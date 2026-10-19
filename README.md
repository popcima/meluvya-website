# Meluvya landing page

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
- `src/components/`: navigation, hero, image comparison, gallery, steps, FAQ, download panel and accessible download dialog.
- `src/lib/content.ts`: gallery and FAQ content.
- `public/img/`, `public/fonts/`: local photographs, the native Meluvya app icon and Manrope fonts.

## Brand and interactions

The native Meluvya app icon appears in the header, download panel and dialog, and is used for the favicon and Apple touch icon. The rounded wordmark and dark palette match the supplied app references.

The store buttons retain their App Store and Google Play labels and silhouettes. Until the app's store links are provided, they open a native accessible coming-soon dialog. Escape and both close buttons dismiss it, returning focus to the button that opened it. The header button scrolls to the download panel.

The before/after comparison supports pointer, touch and keyboard controls. The photo gallery pauses on hover. Motion respects the reduced-motion preference. FAQs use native `details` and `summary` controls. Footer links navigate to sections within this page.

The landing page retains the existing sample photographs. It does not upload user photos or perform AI generation. No tracking or analytics is included.

## GitHub Pages

Live website: https://popcima.github.io/meluvya-website/

Every push to `main` runs the GitHub Pages workflow: install the lockfile, lint, build, typecheck, and deploy `out/`. GitHub Pages uses GitHub Actions as its publishing source.

The workflow reads the Pages base path and passes it as `NEXT_PUBLIC_BASE_PATH`, so images, fonts, icons and scripts work under the repository URL. Local development stays at the root URL. To build for the current Pages path locally:

```sh
NEXT_PUBLIC_BASE_PATH=/meluvya-website npm run build
```

Update the site by editing the source, committing, and pushing to `main`. Store buttons show a coming-soon dialog until the real App Store and Google Play links are supplied.
