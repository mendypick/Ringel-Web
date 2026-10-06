export const LANGUAGE_KEY = "ringle-lang";

export function readSavedLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === "he" || saved === "en") return saved;
  } catch {
    /* storage unavailable */
  }
  return null;
}

export function languageFromNavigator() {
  const primary = (navigator.languages && navigator.languages[0]) || navigator.language || "";
  return /^he\b/i.test(primary) ? "he" : "en";
}

export function resolveLanguage() {
  return readSavedLanguage() || languageFromNavigator();
}

export function saveLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_KEY, lang);
  } catch {
    /* storage unavailable */
  }
}
