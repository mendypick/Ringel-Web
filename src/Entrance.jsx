import { useLayoutEffect, useRef } from "react";

export const INTRO = {
  reveal: 500,
  hold: 220,
  travel: 580,
  nav: 1320,
  rise: 420,
  d1: 1440,
  d2: 1560,
  d3: 1680,
  wipe: 1440,
  cta: 1820,
  done: 2320,
};

const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";

export function shouldPlayIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const hash = window.location.hash;
  if (hash === "#privacy" || hash === "#terms") return false;
  try {
    if (sessionStorage.getItem("ringle-intro") === "1") return false;
  } catch {
    return false;
  }
  return true;
}

export function markIntroPlayed() {
  try {
    sessionStorage.setItem("ringle-intro", "1");
  } catch {
    /* private mode */
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function EntranceMark({ onDone }) {
  const ref = useRef(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useLayoutEffect(() => {
    const mark = ref.current;
    const target = document.querySelector(".nav .wordmark");
    const root = document.documentElement;
    if (!mark || !target) {
      doneRef.current();
      return undefined;
    }

    let cancelled = false;
    const animations = [];

    const run = async () => {
      const ready = [];
      if (document.fonts?.ready) ready.push(document.fonts.ready);
      if (mark.decode) ready.push(mark.decode().catch(() => {}));
      else if (!mark.complete) {
        ready.push(
          new Promise((resolve) => {
            mark.addEventListener("load", resolve, { once: true });
            mark.addEventListener("error", resolve, { once: true });
          }),
        );
      }
      await Promise.race([Promise.all(ready), wait(400)]);
      if (cancelled) return;

      const dpr = window.devicePixelRatio || 1;
      const maxSharp = 1024 / dpr;
      const width = Math.min(mark.offsetWidth || maxSharp, maxSharp);
      mark.style.width = `${width}px`;
      const height = mark.offsetHeight;
      if (!width || !height) {
        doneRef.current();
        return;
      }

      const from = `translate(${(window.innerWidth - width) / 2}px, ${(window.innerHeight - height) / 2}px) scale(1)`;
      mark.style.transform = from;
      root.dataset.intro = "on";

      animations.push(
        mark.animate(
          [{ clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)" }],
          { duration: INTRO.reveal, easing: EASE, fill: "forwards" },
        ),
      );

      await wait(INTRO.reveal + INTRO.hold);
      if (cancelled) return;

      const box = target.getBoundingClientRect();
      const scale = box.width / width;
      const move = mark.animate(
        [
          { transform: from },
          { transform: `translate(${box.left}px, ${box.top}px) scale(${scale})` },
        ],
        { duration: INTRO.travel, easing: EASE, fill: "forwards" },
      );
      animations.push(move);
      try {
        await move.finished;
      } catch {
        return;
      }
      if (cancelled) return;

      const landed = target.getBoundingClientRect();
      mark.style.transform = `translate(${landed.left}px, ${landed.top}px) scale(${landed.width / width})`;
      root.classList.add("intro-landed");
      mark.style.visibility = "hidden";

      await wait(INTRO.done - (INTRO.reveal + INTRO.hold + INTRO.travel));
      if (!cancelled) doneRef.current();
    };

    run();

    return () => {
      cancelled = true;
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return (
    <img
      ref={ref}
      className="enter-mark"
      src={`${import.meta.env.BASE_URL}brand/ringle-wordmark.png`}
      alt=""
      width="1024"
      height="214"
      aria-hidden="true"
    />
  );
}
