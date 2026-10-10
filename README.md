# RINGLE

The RINGLE website. Hebrew and English are both included. Hebrew uses a right-to-left layout, and English uses a left-to-right layout.

Hebrew is the default and lives at the site root. English lives under `/en`. The language button switches between the two and keeps the current page.

Pages:

- `/` and `/en` — home
- `/privacy-policy` and `/en/privacy-policy`
- `/terms-of-use` and `/en/terms-of-use`
- `/subscription-terms` and `/en/subscription-terms`

Paths from the old Wix site (`/contact-us`, `/whatsapp-phone`, `/download-now`, `/about-3`, `/he/...`) open the home page at the matching section. `/ads.txt`, `/app-ads.txt`, `/robots.txt` and `/sitemap.xml` are served from `public/`.

The build writes an `index.html` for every route under `dist/`, so GitHub Pages serves each path directly. Unknown paths fall back to `404.html`, which also opens the home page.

## Requirements

- Node.js 22

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

The site runs at [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

The built site is written to `dist/`. To preview that build:

```bash
npm run preview
```

## Deploy

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/pages.yml`. It installs dependencies, builds the site, and deploys it to GitHub Pages.

In the repository settings, open **Pages** and set **Build and deployment** to **GitHub Actions**.
