# Meluvya website and photo editing guides

A responsive website for Meluvya, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide. Its black, blue and teal atmosphere, glass panels, rounded wordmark and white buttons follow the supplied app screenshots.

## Run

Use Node.js 24 LTS.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
```

The production build exports a complete static site to `out/`. Preview it with:

```sh
python3 -m http.server 3000 --directory out
```

## Structure

- `src/app/`: page composition, metadata and responsive styles.
- `src/components/`: navigation, stacked hero, image comparison, interactive moodboard, real app showcase, FAQ and accessible download dialog.
- `src/lib/content.ts`: factual FAQ content.
- `public/img/`, `public/fonts/`: local photographs, the native Meluvya app icon and Manrope fonts.

## Brand and interactions

The native Meluvya app icon appears in the header, download panel and dialog, and is used for the favicon and Apple touch icon. The rounded wordmark and dark palette match the supplied app references.

The store buttons retain their App Store and Google Play labels and silhouettes. Until the app's store links are provided, they open a native accessible coming-soon dialog. Escape and both close buttons dismiss it, returning focus to the button that opened it. The header button scrolls to the download panel.

The original stacked hero and before/after comparison support pointer, touch and keyboard controls. The moodboard offers three manually selected edits—Golden, After dark and Nostalgia—with a large photo and two supporting examples. Explore / Create controls switch between intact screenshots of the real app and their accompanying explanation. Both sets of tabs support arrow keys, Home and End, and preserve the section height while switching. Motion respects reduced-motion preferences. FAQs use native `details` and `summary` controls. Header and footer links connect the landing page and blog; homepage section links remain available from article pages.

The landing page retains the existing sample photographs. It does not upload user photos or perform AI generation. No tracking or analytics is included.

## GitHub Pages

Live website: https://popcima.github.io/meluvya-website/

Every push to `main` runs the GitHub Pages workflow: install the lockfile, lint, build, typecheck, and deploy `out/`. GitHub Pages uses GitHub Actions as its publishing source.

The workflow reads the Pages base path and passes it as `NEXT_PUBLIC_BASE_PATH`, so images, fonts, icons and scripts work under the repository URL. Local development stays at the root URL. To build for the current Pages path locally:

```sh
NEXT_PUBLIC_BASE_PATH=/meluvya-website npm run build
```

Update the site by editing the source, committing, and pushing to `main`. Store buttons show a coming-soon dialog until the real App Store and Google Play links are supplied.

The moodboard now offers real, manually controlled before/after previews for Golden hour and Red flash. Nostalgia is a static look, without a fabricated comparison. Each slider has a unique accessible label and supports dragging, touch and arrow keys; inactive mood panels remain inert. Header section links are available on wider screens. Supporting-photo hover depth is limited to fine-pointer devices, and all new motion respects reduced motion.

The app showcase loads lossless WebP transcodes of the supplied screenshots (3.77 MB combined instead of 6.68 MB); the original PNGs are retained. There is no resize, crop or compositing in the assets.


## Blog and technical SEO

`/blog/` and all `/blog/[slug]/` guides are fully rendered into static HTML. `trailingSlash: true` creates nested `index.html` files for fresh GitHub Pages navigation. Unknown article slugs are not generated and return a 404 on the static host.

The index shows at most 12 articles per page, including the featured guide on page 1. Additional articles create crawlable `/blog/page/2/`, `/blog/page/3/` archives with their own metadata, canonical URLs, breadcrumbs and sitemap entries. Page 1 exists only at `/blog/`; `/blog/page/1/` and out-of-range archives are not generated. Until the library exceeds 12 articles, no archive page or pagination is rendered. Previous/next links and a compact page-number list keep navigation usable as the library grows.

- `src/lib/articles.ts`: typed article content, stable dates, sources, related guides and calculated reading time (200 words/minute).
- `src/lib/site.ts`: canonical root, absolute URL helper and shared page metadata.
- `src/lib/blog.ts`: 12-article page slicing, archive URLs, pagination links and archive metadata.
- `src/components/BlogIndex.tsx` and `BlogArticle.tsx`: shared server-rendered templates. Article text is not loaded through a client-only request.
- `src/app/blog/[...slug]/`: resolves existing one-segment article URLs and two-segment archive URLs. Combining these in one static route avoids an empty `generateStaticParams` result when the library has only one index page; no placeholder archive is emitted.
- `src/components/ArticleDownloadCTA.tsx`: the shared Meluvya promotion after each article’s sources, before related guides. It appears automatically on current and future articles. Its App Store and Google Play buttons reuse the existing coming-soon dialog (one instance per article) until real store links are provided; the visible availability note makes that limitation clear.
- `src/app/sitemap.ts`: homepage, blog and article canonical URLs with explicit content dates.
- Every page has a unique title, description, canonical and social metadata. Articles include accurate BlogPosting and BreadcrumbList JSON-LD, with Meluvya as the organization author. No ratings, invented reviewer credentials, or FAQ rich-result claims are included.

The primary audience is English-speaking readers worldwide. No country-specific pages or unverified search-volume claims are used. These guides are a useful starting library, not a guarantee of rankings or traffic.

### First publishing batch

| Guide | Search intent | Reader outcome |
| --- | --- | --- |
| Golden-hour photo editing | Golden hour photo effect; warm photos without orange skin | Choose suitable light, edit conservatively, diagnose unwanted color |
| Digicam effect on a phone | Digicam effect on phone; Y2K photo effect | Separate capture decisions from color and contrast edits |
| Vintage effects guide | Vintage photo effects; film vs digicam; photobooth look | Choose a coherent retro direction and build a consistent set |
| Choosing an AI portrait photo | Best photo for AI portrait; likeness problems; blur | Compare inputs and inspect the resulting portrait |
| AI effects vs filters | AI photo effects vs filters; whether edits change a face | Choose the smallest suitable kind of edit |

Possible next questions are hypotheses to validate, not demonstrated keyword opportunities: “Why do my edited photos look oversaturated?”, “How do I keep the same look across a photo set?”, and “How can I check an AI portrait before sharing it?” Expand only when the article has a distinct purpose and useful original advice. Avoid near-duplicate pages for synonyms.

### Content maintenance

See [the publishing process](publishing/README.md) for daily research, editorial quality checks, and the approved publishing limits.

Add an `Article` to `src/lib/articles.ts` with a distinct slug, specific title/description, actual publication date, image/alt/caption, quick answer, practical sections, sources and related slugs. Keep photographs labelled as illustrative examples unless an actual documented test supports a stronger claim. The routes, sitemap, index, archives and end-of-article promotion are generated from this list. Check all related slugs exist. Use unique single-segment slugs; reserve `page` for archive navigation. The array order is the editorial display order: put new approved guides at the beginning, and keep that order stable between publications. Do not insert drafts or filler to reach a daily quota.

Update `modified` only after a meaningful content revision. Do not refresh dates automatically with each build. Recheck product instructions against the actual app and external technical claims against primary sources. Source links should support the nearby subject; do not copy their text or present a competitor’s capabilities as Meluvya’s. Keep the original dates when fixing only presentation.

Before publication, run lint, typecheck and a prefixed build. Check the exported HTML for one H1, correct metadata, valid JSON-LD, usable internal links and the full article text. Inspect a phone-sized page, its contents links, and any horizontally scrollable table. Verify fresh navigation to every article and a missing slug. After each batch, check that every article appears on exactly one index/archive page, none contains more than 12 articles, archive previous/next links and self-canonicals work, and the sitemap contains only existing archive pages. Confirm the shared store buttons still open the availability dialog. No schedule or automatic publisher is configured by the website itself.

### Configuration for the current site and a future domain

The deployment workflow reads two optional GitHub **repository Actions variables** from Settings → Secrets and variables → Actions → Variables:

- `SITE_URL`: absolute public root. Empty or unset uses `https://popcima.github.io/meluvya-website`. It controls canonicals, sitemap URLs and social/schema URLs. Local builds use the same environment-variable name.
- `GOOGLE_SITE_VERIFICATION`: only the `content` value from a Google HTML verification tag, when you choose that method. Empty or unset renders no verification meta tag. No token is configured or verification performed by this project.

`NEXT_PUBLIC_BASE_PATH` remains supplied by `actions/configure-pages` in the workflow. It controls route and asset paths, while `SITE_URL` controls public absolute URLs. They must describe the same deployed location. For the current site, the build uses base path `/meluvya-website` and the default canonical root above.

When the chosen custom domain is ready, configure its DNS and GitHub Pages custom-domain/HTTPS settings, then set `SITE_URL` to that actual HTTPS root. Confirm the Pages configuration outputs an empty base path when serving at the domain root; for an equivalent local build, leave `NEXT_PUBLIC_BASE_PATH` empty. Redeploy, then check fresh article URLs, assets, canonical tags and sitemap URLs together. Check what happens to each old GitHub Pages article URL and maintain appropriate redirects where hosting permits; a canonical tag is not a redirect. Do not point canonicals at a domain before it serves the matching pages. A domain change alone does not establish ranking gains. Follow [Google’s site-move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) when migrating URLs.

### Search Console, when the domain is ready

Verification and submission are deferred until the user chooses to proceed. For a custom domain, a Domain property uses DNS verification. For a specific hosted path, a URL-prefix property can cover that exact HTTPS prefix. See [Google’s property setup guide](https://support.google.com/webmasters/answer/34592) and [ownership verification methods](https://support.google.com/webmasters/answer/9008080).

If using HTML-tag verification for a URL-prefix property, put the supplied content value in `GOOGLE_SITE_VERIFICATION`, rebuild, confirm the live homepage meta tag, and complete verification in Search Console. Do not remove a working verification token after verification unless switching methods deliberately.

After verification, submit the actual sitemap URL: currently `https://popcima.github.io/meluvya-website/sitemap.xml`, or the equivalent at the new canonical root. Use URL Inspection for a few representative guides and monitor indexing, not just whether a sitemap was accepted. Google’s [sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) explains submission; a sitemap is a discovery signal and does not guarantee indexing.

No project-level robots file is emitted. `https://popcima.github.io/meluvya-website/robots.txt` would not control the host: robots rules belong at `https://popcima.github.io/robots.txt`, outside this project. A root-domain deployment can add a genuine root robots file later. The current pages do not send a noindex directive.

Once real Search Console data is available, review queries and landing pages monthly. Distinguish no impressions from impressions with few clicks; inspect indexing and relevance first, then improve an unhelpful title or answer. Prioritize useful additions from recurring reader questions rather than publishing a fixed volume of articles. Record substantive changes and compare subsequent impressions, clicks, CTR and query mix without treating average position as a promised result. No tracking script or analytics account has been added.
