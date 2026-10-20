"""Read-only validation of the exported SEO routes and linked local files."""
import json
import os
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / 'out'
SITE = (os.environ.get('SITE_URL') or 'https://popcima.github.io/meluvya-website').rstrip('/') + '/'
PREFIX = urlparse(SITE).path.rstrip('/')

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.meta, self.links, self.assets, self.ids = {}, [], [], set()
        self.ctas, self.dialogs = 0, 0
        self.canonical, self.lang = [], None
        self.h1, self.titles, self.jsonld = [], [], []
        self.capture = None
        self.buffer = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'section' and 'article-download' in a.get('class', '').split():
            self.ctas += 1
        if tag == 'dialog' and a.get('id') == 'download-dialog':
            self.dialogs += 1
        if a.get('id'):
            self.ids.add(a['id'])
        if tag == 'html':
            self.lang = a.get('lang')
        if tag == 'meta':
            self.meta[a.get('name') or a.get('property')] = a.get('content')
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a['href'])
        if tag == 'a' and a.get('href'):
            self.links.append(a['href'])
        if tag in ('img', 'script') and a.get('src'):
            self.assets.append(a['src'])
        if tag == 'link' and a.get('rel') in ('stylesheet', 'icon', 'apple-touch-icon'):
            self.assets.append(a['href'])
        if tag in ('title', 'h1') or (tag == 'script' and a.get('type') == 'application/ld+json'):
            self.capture, self.buffer = tag, []

    def handle_data(self, data):
        if self.capture:
            self.buffer.append(data)

    def handle_endtag(self, tag):
        if tag == self.capture:
            text = ''.join(self.buffer).strip()
            {'title': self.titles, 'h1': self.h1, 'script': self.jsonld}[tag].append(text)
            self.capture, self.buffer = None, []

def local_file(url):
    path = unquote(urlparse(url).path)
    assert path == PREFIX or path.startswith(PREFIX + '/'), f'Unprefixed local URL: {url}'
    relative = path[len(PREFIX):].lstrip('/')
    target = ROOT / relative
    if not Path(relative).suffix:
        target = target / 'index.html'
    return target

def schema_items(item):
    if isinstance(item, list):
        for child in item:
            yield from schema_items(child)
    elif isinstance(item, dict):
        yield item
        if '@graph' in item:
            yield from schema_items(item['@graph'])

tree = ET.parse(ROOT / 'sitemap.xml')
urls = [n.text for n in tree.findall('.//{*}loc')]
assert len(urls) == len(set(urls)) and len(urls) >= 3, urls
article_count = 0
pages = {}
for url in urls:
    file = local_file(url)
    assert file.is_file(), f'Missing route: {url}'
    page = Page(file.read_text())
    pages[url] = page
    assert page.lang == 'en', (url, page.lang)
    assert page.canonical == [url], (url, page.canonical)
    assert len(page.h1) == len(page.titles) == 1, (url, page.h1, page.titles)
    assert page.meta.get('description'), f'Missing description: {url}'
    assert 'noindex' not in page.meta.get('robots', '').lower(), url
    assert page.meta.get('og:url') == url, (url, page.meta.get('og:url'))
    assert page.meta.get('og:title') and page.meta.get('og:description'), url
    assert page.meta.get('twitter:card'), url
    assert page.meta.get('og:image', '').startswith('https://'), url
    assert local_file(page.meta['og:image']).is_file(), (url, page.meta['og:image'])
    schemas = [obj for entry in page.jsonld for obj in schema_items(json.loads(entry))]
    if '/blog/' in url and url != SITE + 'blog/' and not url.startswith(SITE + 'blog/page/'):
        article_count += 1
        assert page.ctas == page.dialogs == 1, (url, 'Missing or duplicated CTA/dialog')
        articles = [obj for obj in schemas if obj.get('@type') in ('Article', 'BlogPosting')]
        assert len(articles) == 1, (url, schemas)
        article = articles[0]
        assert article['headline'] == page.h1[0], (url, article['headline'], page.h1)
        assert article['author']['@type'] == 'Organization', (url, article['author'])
        assert article['author']['name'] == 'Meluvya', (url, article['author'])
        assert article['datePublished'] <= article['dateModified'], (url, 'Invalid article date order')
        assert any(obj.get('@type') == 'BreadcrumbList' for obj in schemas), url
        assert len(file.read_text()) > 10000, f'Unexpectedly small article HTML: {url}'

assert len({p.titles[0] for p in pages.values()}) == len(pages), 'Duplicate titles'
assert len({p.meta['description'] for p in pages.values()}) == len(pages), 'Duplicate descriptions'
link_count = 0
for url, page in pages.items():
    for value in page.links + page.assets:
        resolved = urljoin(url, value)
        parsed = urlparse(resolved)
        if parsed.netloc != urlparse(SITE).netloc or parsed.scheme not in ('http', 'https'):
            continue
        target = local_file(resolved)
        assert target.is_file(), (url, 'broken local link/asset', value, str(target))
        if parsed.fragment and target.suffix == '.html':
            linked_page = pages.get(resolved.split('#')[0]) or Page(target.read_text())
            assert unquote(parsed.fragment) in linked_page.ids, (url, 'missing anchor', value)
        link_count += 1

print(json.dumps({'result': 'PASS', 'routes': len(pages), 'local_links_and_assets_checked': link_count,
                  'article_pages': article_count, 'unique_canonicals_titles_descriptions': True,
                  'schema': 'Article and Breadcrumb JSON-LD parses and matches visible titles',
                  'titles': [p.titles[0] for p in pages.values()]}, indent=2))
