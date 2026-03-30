import { useEffect } from "react";

export default function Hero({ leftLogo, rightLogo }) {

  useEffect(() => {
    // TITLE LETTER REVEAL
    const letters = document.querySelectorAll(".hero-title span.letter");
    letters.forEach((l, i) => {
      l.style.animationDelay = `${i * 0.08}s`;
    });

    // SCROLL-BASED GLOW
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const intensity = Math.min(scrollY / 600, 1);
      hero.style.setProperty("--glow", intensity);
    });
  }, []);

  const title = "IFEMS XYZ".split("");

  return (
    <section className="hero glass-border">
      <div className="hero-noise"></div>
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <div className="hero-logo floating left">
          {leftLogo}
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            {title.map((char, i) => (
              <span key={i} className="letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="hero-subtitle">
            Building premium digital experiences, design systems,
            and modern web solutions.
          </p>
        </div>

        <div className="hero-logo floating right">
          {rightLogo}
        </div>
      </div>
    </section>
  );
}

