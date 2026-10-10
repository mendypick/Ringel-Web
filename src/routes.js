export const LANGS = ["he", "en"];

// vite sets BASE_URL, node (vite.config) has no import.meta.env
const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");

export const DOC_SLUGS = {
  "privacy-policy": "privacy",
  "terms-of-use": "terms",
  "subscription-terms": "subscription",
};

// pages of the old wix site that are now sections of the home page
export const SECTION_SLUGS = {
  "contact-us": "#support",
  "whatsapp-phone": "#support",
  "download-now": "#download",
  "about-3": "#stories",
  "עולם-קטן-ושבתון": "#top",
};

export function pathFor(lang, doc) {
  const prefix = lang === "en" ? "/en" : "";
  if (!doc) return prefix ? `${BASE}${prefix}` : `${BASE}/`;
  const slug = Object.keys(DOC_SLUGS).find((key) => DOC_SLUGS[key] === doc);
  return `${BASE}${prefix}/${slug}`;
}

export function parsePath(pathname) {
  let path = pathname;
  try {
    path = decodeURIComponent(pathname);
  } catch {
    /* keep raw */
  }
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
  path = path.replace(/\/+$/, "");
  let lang = "he";
  if (path === "/en" || path.startsWith("/en/")) {
    lang = "en";
    path = path.slice(3);
  } else if (path === "/he" || path.startsWith("/he/")) {
    path = path.slice(3);
  }
  const slug = path.replace(/^\//, "");
  if (DOC_SLUGS[slug]) return { lang, doc: DOC_SLUGS[slug], section: null, known: true };
  return { lang, doc: null, section: SECTION_SLUGS[slug] || null, known: slug === "" || slug in SECTION_SLUGS };
}

export function allPaths() {
  const slugs = ["", ...Object.keys(DOC_SLUGS), ...Object.keys(SECTION_SLUGS)];
  const paths = [];
  for (const slug of slugs) {
    paths.push(slug ? `/${slug}` : "/");
    paths.push(slug ? `/en/${slug}` : "/en");
  }
  paths.push("/he");
  return paths;
}
