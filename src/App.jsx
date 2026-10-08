import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { copy, external } from "./content.js";
import { Lockup } from "./components/Mark.jsx";
import { LegalPage } from "./LegalPage.jsx";
import { EntranceMark, INTRO, markIntroPlayed, shouldPlayIntro } from "./Entrance.jsx";
import { resolveLanguage, saveLanguage } from "./language.js";

function legalFromHash() {
  const hash = window.location.hash;
  if (hash === "#privacy" || hash === "#terms") return hash.slice(1);
  return null;
}

function deviceStore() {
  const ua = navigator.userAgent || "";
  const iPad = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/Android/i.test(ua)) return external.play;
  if (/iPhone|iPad|iPod/i.test(ua) || iPad) return external.appStore;
  return null;
}

function InstallLink({ className, children, onOpen, onFallback }) {
  const store = deviceStore();
  if (!store) {
    return (
      <a
        className={className}
        href="#download"
        onClick={(event) => {
          event.preventDefault();
          onFallback();
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <a className={className} href={store} target="_blank" rel="noreferrer" onClick={onOpen}>
      {children}
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useState(resolveLanguage);
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState(null);
  const [gallery, setGallery] = useState(0);
  const [tour, setTour] = useState(0);
  const [doc, setDoc] = useState(legalFromHash);
  const [intro, setIntro] = useState(shouldPlayIntro);
  const listRef = useRef(null);
  const tourRef = useRef(null);
  const scrollRef = useRef(null);
  const t = copy[lang];
  const topNav = t.nav.filter((item) => item.href !== "#standards");

  useLayoutEffect(() => {
    if (!intro) return undefined;
    const root = document.documentElement;
    root.dataset.intro = "hold";
    root.style.setProperty("--d-nav", `${INTRO.nav}ms`);
    root.style.setProperty("--d1", `${INTRO.d1}ms`);
    root.style.setProperty("--d2", `${INTRO.d2}ms`);
    root.style.setProperty("--d3", `${INTRO.d3}ms`);
    root.style.setProperty("--d-wipe", `${INTRO.wipe}ms`);
    root.style.setProperty("--d-cta", `${INTRO.cta}ms`);
    const failsafe = window.setTimeout(() => {
      markIntroPlayed();
      delete root.dataset.intro;
      root.classList.remove("intro-landed");
      setIntro(false);
    }, 6000);
    return () => {
      window.clearTimeout(failsafe);
      delete root.dataset.intro;
      root.classList.remove("intro-landed");
    };
  }, [intro]);

  useLayoutEffect(() => {
    document.documentElement.lang = t.code;
    document.documentElement.dir = t.dir;
    const titles = {
      privacy: lang === "he" ? "מדיניות פרטיות — רינגל" : "Privacy Policy — Ringle",
      terms: lang === "he" ? "תנאי שימוש — רינגל" : "Terms of Use — Ringle",
    };
    document.title = titles[doc] || t.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDescription);
  }, [t, doc, lang]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[gallery];
    if (!list || !item) return;
    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const horizontal = getComputedStyle(list).flexDirection.startsWith("row");
    if (horizontal) {
      list.scrollLeft += itemRect.left - listRect.left - (listRect.width - itemRect.width) / 2;
    } else {
      list.scrollTop += itemRect.top - listRect.top;
    }
  }, [gallery, lang]);

  useEffect(() => {
    const list = tourRef.current;
    const item = list?.children[tour];
    if (!list || !item) return;
    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const horizontal = getComputedStyle(list).flexDirection.startsWith("row");
    if (horizontal) {
      list.scrollLeft += itemRect.left - listRect.left - (listRect.width - itemRect.width) / 2;
    } else {
      list.scrollTop += itemRect.top - listRect.top;
    }
  }, [tour, lang]);

  useEffect(() => {
    const sync = () => {
      const next = legalFromHash();
      scrollRef.current = next ? null : window.location.hash || "#top";
      setDoc(next);
      if (next) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (doc) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = scrollRef.current;
    if (!hash) return;
    scrollRef.current = null;
    if (hash === "#top") window.scrollTo(0, 0);
    else document.querySelector(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
  }, [doc]);

  const close = () => setOpen(false);
  const goTo = (hash) => {
    setOpen(false);
    window.history.pushState(null, "", hash);
    if (hash === "#privacy" || hash === "#terms") {
      scrollRef.current = null;
      setDoc(hash.slice(1));
      window.scrollTo(0, 0);
      return;
    }
    if (doc) {
      scrollRef.current = hash;
      setDoc(null);
      return;
    }
    if (hash === "#top") window.scrollTo(0, 0);
    else document.querySelector(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
  };
  const stepGallery = (direction) => {
    setGallery((index) => (index + direction + t.couples.length) % t.couples.length);
  };
  const stepTour = (direction) => {
    setTour((index) => (index + direction + t.screens.length) % t.screens.length);
  };
  const switchLang = () => {
    const next = lang === "he" ? "en" : "he";
    saveLanguage(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "he" ? "rtl" : "ltr";
    setLang(next);
    setFaq(null);
    close();
  };

  const finishIntro = () => {
    markIntroPlayed();
    const root = document.documentElement;
    delete root.dataset.intro;
    root.classList.remove("intro-landed");
    setIntro(false);
  };

  return (
    <>
      {intro && <EntranceMark onDone={finishIntro} />}
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <header className="nav">
        <Lockup image onClick={() => goTo("#top")} />
        <nav className="nav-links" aria-label={t.langLabel}>
          {topNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                goTo(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-end">
          <button type="button" className="lang" onClick={switchLang}>
            <Globe />
            {t.otherLang}
          </button>
          <InstallLink
            className="btn btn-dark nav-cta"
            onOpen={close}
            onFallback={() => goTo("#download")}
          >
            {t.getApp}
          </InstallLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </header>

      {open && (
        <div className="overlay">
          <nav>
            {topNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <InstallLink onOpen={close} onFallback={() => goTo("#download")}>
              {t.getApp}
            </InstallLink>
            <button type="button" className="overlay-lang" onClick={switchLang}>
              {t.otherLang}
            </button>
            <div className="overlay-legal">
              <a
                href="#privacy"
                onClick={(event) => {
                  event.preventDefault();
                  goTo("#privacy");
                }}
              >
                {t.footer.privacy}
              </a>
              <a
                href="#terms"
                onClick={(event) => {
                  event.preventDefault();
                  goTo("#terms");
                }}
              >
                {t.footer.terms}
              </a>
            </div>
          </nav>
        </div>
      )}

      <main id="content">
        {doc ? (
          <LegalPage lang={lang} id={doc} onBack={() => goTo("#top")} />
        ) : (
          <>
        <section className="hero" id="top">
          <div className="wrap hero-inner">
            <h1>
              <span className="hero-line"><span>{t.hero.l1}</span></span>
              <span className="hero-line"><span>{t.hero.l2}</span></span>
              {t.hero.l3 && (
                <span className="hero-line"><span>{t.hero.l3}</span></span>
              )}
              {intro && <span className="hero-wipe" aria-hidden="true" />}
            </h1>
            <InstallLink className="btn btn-dark" onFallback={() => goTo("#download")}>
              {t.getApp}
            </InstallLink>
          </div>
        </section>

        <section className="manifesto" aria-label={t.standards}>
          <div className="wrap">
            {(Array.isArray(t.manifesto) ? t.manifesto : [t.manifesto]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="standards" id="standards">
          <div className="wrap standards-layout">
            <Seal />
            <h2>{t.standards}</h2>
            <div className="portraits">
              {t.singles.map((photo, index) => (
                <span key={photo.src} className={`portrait p${index + 1}`}>
                  <img src={photo.src} alt={photo.alt} width="160" height="160" />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="stories" id="stories">
          <div className="wrap">
            <h2>{t.stories.title}</h2>
            {t.stories.sub ? <p className="sub">{t.stories.sub}</p> : null}
            <div className="gallery">
              <div className="gallery-arrows">
                <button type="button" aria-label={t.stories.prev} onClick={() => stepGallery(-1)}>
                  <Chevron direction="up" />
                </button>
                <button type="button" aria-label={t.stories.next} onClick={() => stepGallery(1)}>
                  <Chevron direction="down" />
                </button>
              </div>
              <div className="gallery-list" role="tablist" aria-label={t.stories.title} ref={listRef}>
                {t.couples.map((photo, index) => {
                  const selected = index === gallery;
                  if (selected) {
                    return (
                      <div key={photo.id} className="feature" role="tab" aria-selected="true">
                        <button type="button" className="feature-name" onClick={() => setGallery(index)}>
                          <span className="pill-mark" aria-hidden="true" />
                          {photo.title}
                        </button>
                        <p className="feature-body">{photo.body}</p>
                        <a className="feature-post" href={photo.post} target="_blank" rel="noreferrer">
                          {t.stories.post}
                        </a>
                      </div>
                    );
                  }
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      role="tab"
                      aria-selected="false"
                      className="pill"
                      onClick={() => setGallery(index)}
                    >
                      <span className="pill-mark" aria-hidden="true">
                        <Plus />
                      </span>
                      {photo.title}
                    </button>
                  );
                })}
              </div>
              <div className="gallery-frame">
                <img
                  key={t.couples[gallery].id}
                  src={t.couples[gallery].src}
                  alt={t.couples[gallery].alt}
                  width="1000"
                  height="1200"
                />
              </div>
              <div className="gallery-detail">
                <p>{t.couples[gallery].body}</p>
                <a href={t.couples[gallery].post} target="_blank" rel="noreferrer">
                  {t.stories.post}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="app-tour" id="app">
          <div className="wrap">
            <h2>{t.app.title}</h2>
            <div className={t.screens.length > 1 ? "gallery app-gallery has-nav" : "gallery app-gallery"}>
              {t.screens.length > 1 && (
                <div className="gallery-arrows">
                  <button type="button" aria-label={t.app.prev} onClick={() => stepTour(-1)}>
                    <Chevron direction="up" />
                  </button>
                  <button type="button" aria-label={t.app.next} onClick={() => stepTour(1)}>
                    <Chevron direction="down" />
                  </button>
                </div>
              )}
              <div className="gallery-list" role="tablist" aria-label={t.app.title} ref={tourRef}>
                {t.screens.map((screen, index) => {
                  const selected = index === tour;
                  if (selected) {
                    return (
                      <div key={screen.id} className="feature" role="tab" aria-selected="true">
                        <button type="button" className="feature-name" onClick={() => setTour(index)}>
                          <span className="pill-mark" aria-hidden="true" />
                          {screen.title}
                        </button>
                        <p className="feature-body">{screen.body}</p>
                      </div>
                    );
                  }
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      role="tab"
                      aria-selected="false"
                      className="pill"
                      onClick={() => setTour(index)}
                    >
                      <span className="pill-mark" aria-hidden="true">
                        <Plus />
                      </span>
                      {screen.title}
                    </button>
                  );
                })}
              </div>
              <div className="screen-stage">
                <div className="screen-track" style={{ "--i": tour }}>
                  {t.screens.map((screen, index) => (
                    <img
                      key={screen.id}
                      className={
                        index === tour ? "is-on" : index === tour - 1 ? "is-prev" : index === tour + 1 ? "is-next" : "is-far"
                      }
                      src={screen.src}
                      alt={index === tour ? screen.alt : ""}
                      width="471"
                      height="1024"
                    />
                  ))}
                </div>
              </div>
              <div className="gallery-detail">
                <p>{t.screens[tour].body}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="download">
          <div className="wrap">
            <h2>{t.cta.title}</h2>
            <div className="stores">
              <a href={external.appStore} target="_blank" rel="noreferrer">
                <Apple />
                <span>
                  <small>{t.cta.on}</small>
                  {t.cta.appStore}
                </span>
              </a>
              <a href={external.play} target="_blank" rel="noreferrer">
                <Play />
                <span>
                  <small>{t.cta.on}</small>
                  {t.cta.play}
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="wrap faq-wrap">
            <h2>{t.faq.title}</h2>
            <div className="faq-list">
              {t.faq.items.map(([question, answer], index) => {
                const isOpen = faq === index;
                return (
                  <div className={isOpen ? "item open" : "item"} key={question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setFaq(isOpen ? null : index)}
                    >
                      <span>{question}</span>
                      <i aria-hidden="true" />
                    </button>
                    <div className="answer">
                      <p>{answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="support" id="support">
          <div className="wrap">
            <p className="eyebrow">{t.support.eyebrow}</p>
            <h2>{t.support.title}</h2>
            <a className="mail" href={external.email}>
              {t.support.email}
            </a>
            <a className="whatsapp" href={external.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              {t.support.whatsapp}
            </a>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <Lockup onClick={() => goTo("#top")} />
            <p>{t.footer.blurb}</p>
          </div>
          <div>
            <h2>{t.footer.nav}</h2>
            <ul>
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      goTo(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button type="button" onClick={switchLang}>
                  {t.otherLang}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h2>{t.footer.social}</h2>
            <ul>
              {t.footer.socials.map(([label, key]) => (
                <li key={key}>
                  <a href={external[key]} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.footer.support}</h2>
            <ul>
              <li>
                <a href={external.email}>support@ringledating.com</a>
              </li>
              <li>
                <a className="wa-link" href={external.whatsapp} target="_blank" rel="noreferrer">
                  <WhatsAppIcon />
                  {t.support.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(event) => {
                    event.preventDefault();
                    goTo("#privacy");
                  }}
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={(event) => {
                    event.preventDefault();
                    goTo("#terms");
                  }}
                >
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <small>{t.footer.rights}</small>
          <small>{t.footer.intention}</small>
        </div>
        <div className="wrap footer-mark" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}brand/ringle-wordmark.png`} alt="" width="1024" height="214" />
        </div>
      </footer>
    </>
  );
}

function Seal() {
  return (
    <svg className="seal" viewBox="0 0 72 72" aria-hidden="true">
      <path
        fill="#006AFF"
        d="M36 4 42 10.2 50.2 8.4 52.8 16.4 60.4 20.2 57.2 27.8 62.8 34.2 56.8 40.2 59.2 48.4 51.4 51.6 50.6 60 42.6 58.2 36 64 29.4 58.2 21.4 60 20.6 51.6 12.8 48.4 15.2 40.2 9.2 34.2 14.8 27.8 11.6 20.2 19.2 16.4 21.8 8.4 30 10.2Z"
      />
      <path
        d="M26 36.5 33 43.5 47 28.5"
        fill="none"
        stroke="#fff"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ direction }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d={direction === "up" ? "M3 9.2 7 4.8 11 9.2" : "M3 4.8 7 9.2 11 4.8"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="wa-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#25D366"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.15h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.9c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.18-.14.3-.28.46-.14.16-.29.36-.41.48-.14.13-.28.28-.12.55.16.26.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.18 1.35.27.13.43.11.59-.07.16-.17.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.13.44.2.51.31.06.11.06.65-.18 1.33z"
      />
    </svg>
  );
}

function Plus() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 1.2v9.6M1.2 6h9.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Globe() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 8h12M8 2c1.6 1.8 2.4 3.8 2.4 6S9.6 12.2 8 14C6.4 12.2 5.6 10.2 5.6 8S6.4 3.8 8 2Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function Apple() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.7 9.6c0-1.8 1.5-2.7 1.6-2.8-.9-1.3-2.2-1.4-2.7-1.5-1.1-.1-2.2.7-2.8.7s-1.5-.7-2.4-.6c-1.3 0-2.4.7-3.1 1.8-1.3 2.3-.3 5.6.9 7.5.6.9 1.4 1.9 2.4 1.9.9 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.6-.9 2.2-1.8c.7-1 1-2 1-2.1-.1 0-1.9-.7-2.1-2.9ZM11.4 4.4c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.2 1.2-.5.6-.9 1.5-.8 2.3.9.1 1.7-.4 2.2-1.1Z"
      />
    </svg>
  );
}

function Play() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M1 1.8c0-.8.9-1.3 1.6-.9l12 7.2c.7.4.7 1.4 0 1.8l-12 7.2c-.7.4-1.6-.1-1.6-.9V1.8Z"
      />
    </svg>
  );
}
