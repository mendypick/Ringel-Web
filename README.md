# RINGLE

The RINGLE website. Hebrew and English are both included. Hebrew uses a right-to-left layout, and English uses a left-to-right layout.

On a first visit, the site follows the browser language. Hebrew opens the Hebrew site. English, and any other language, opens the English site. A language chosen with the language button is saved and used on later visits.

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
