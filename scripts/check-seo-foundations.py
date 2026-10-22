"""Check topic discovery, editorial attribution and visible update dates after export."""
import contextlib
import io
import json
import runpy
from html.parser import HTMLParser
from urllib.parse import urljoin
from pathlib import Path

with contextlib.redirect_stdout(io.StringIO()):
    checked = runpy.run_path(str(Path(__file__).with_name('check-export.py')))
pages, site = checked['pages'], checked['SITE']
class Visible(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.hidden = 0; self.parts = []; self.feed(text)
    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'): self.hidden += 1
    def handle_endtag(self, tag):
        if tag in ('script', 'style'): self.hidden -= 1
    def handle_data(self, data):
        if not self.hidden: self.parts.append(data)

editorial = site + 'editorial/'
assert editorial in pages, 'Editorial policy missing from sitemap'
archive = pages[site + 'blog/']
assert 'by-topic' in archive.ids, 'Topic directory missing'
archive_links = {urljoin(site + 'blog/', value) for value in archive.links}
count, updated = 0, 0
for url, page in pages.items():
    schemas = [obj for entry in page.jsonld for obj in checked['schema_items'](json.loads(entry))]
    articles = [obj for obj in schemas if obj.get('@type') == 'BlogPosting']
    if not articles: continue
    count += 1
    assert url in archive_links, ('Guide not linked from blog page one', url)
    assert editorial in {urljoin(url, value) for value in page.links}, ('Missing editorial link', url)
    assert articles[0]['author']['url'] == editorial, ('Author URL mismatch', url)
    if articles[0]['dateModified'] != articles[0]['datePublished']:
        text = ''.join(Visible(checked['local_file'](url).read_text()).parts)
        assert 'Updated ' in text, ('Missing visible update date', url)
        updated += 1
print(json.dumps({'result':'PASS','guides_linked_from_blog_page_one':count,'editorial_attribution':count,'visible_updated_dates':updated,'indexing_and_rankings':'Not measured by this check'},indent=2))
