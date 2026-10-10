# Working on this site

Read this before changing anything.

## Deploy

Pushing to `main` deploys to GitHub Pages through `.github/workflows/pages.yml`.

- Do not edit the workflow, the Pages settings, the custom domain, or `public/CNAME` unless you are explicitly asked to.
- Do not commit or push unless you are explicitly asked to.
- Do not change `base` handling in `vite.config.js`. It is `/` when `public/CNAME` exists and `/<repo>/` on github.io, and that is what makes both work.

## URL structure

Hebrew is the site. English is a copy of it under `/en`.

- `/` is Hebrew. `/en` is English. Every page exists at both, for example `/privacy-policy` and `/en/privacy-policy`.
- The language comes from the URL only. Do not add browser language detection, saved language preferences, cookies, or redirects between languages.
- The mobile app links to `https://www.ringledating.com/en/privacy-policy`, `/en/terms-of-use` and `/en/subscription-terms`, and the Hebrew versions without `/en`. Never rename these slugs.
- Paths from the old Wix site (`/contact-us`, `/whatsapp-phone`, `/download-now`, `/about-3`, `/he/...`) must keep working. They open the home page at the matching section.
- All routes live in `src/routes.js`. To add a page, add its slug there. The build then writes an html file for it in both languages. Do not add a router library.

## Static files

- `public/ads.txt` must stay byte for byte as it is. Google reads it.
- `public/app-ads.txt`, `public/robots.txt` and `public/sitemap.xml` are served as is. Update the sitemap when adding a page.

## Content

- Site copy is in `src/content.js`, once under `he` and once under `en`. A text change is done in both.
- Legal documents are plain text in `src/legal/`, one `.he.txt` and one `.en.txt` per document. First line is the title, the rest is paragraphs.
- Hebrew is right to left. Check layout changes in both directions.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```
