import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({ slides, eyebrow, title, subtitle }) {
  const [active, setActive] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (!slides || slides.length < 2) return undefined;

    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer.current);
  }, [slides]);

  useEffect(() => {
    if (slides && active >= slides.length) {
      setActive(0);
    }
  }, [slides, active]);

  if (slides && slides.length) {
    const slide = slides[active];

    return (
      <section
        className="hero hero--carousel"
        aria-roledescription="carousel"
        aria-label="Featured highlights"
      >
        <div
          className="hero__slide"
          key={slide.caption}
          style={{
            backgroundImage: `
    linear-gradient(
      90deg,
      rgba(8, 35, 29, 0.45) 0%,
      rgba(8, 35, 29, 0.22) 45%,
      rgba(8, 35, 29, 0.02) 100%
    ),
    url("${slide.image}")
  `,
          }}
          role="img"
          aria-label={slide.imageLabel || slide.caption}
        />

        <div className="container hero__content">
          <span className="eyebrow">Kenya NPO Working Group on FATF</span>

          <h1 className="hero__caption" key={slide.caption}>
            {slide.caption}
          </h1>

          <Link to={slide.buttonTo} className="btn btn-primary hero__button">
            {slide.buttonLabel}
          </Link>
        </div>

        <div className="hero__dots container" aria-label="Choose a slide">
          {slides.map((s, i) => (
            <button
              key={s.caption}
              type="button"
              className={
                "hero__dot" + (i === active ? " hero__dot--active" : "")
              }
              aria-label={`Show slide ${i + 1}: ${s.imageLabel || s.caption}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="hero hero--static">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h1>{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default Hero;
