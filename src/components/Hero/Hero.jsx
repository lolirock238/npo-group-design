import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'


function Hero({ slides, eyebrow, title, subtitle }) {
  const [active, setActive] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (!slides || slides.length < 2) return undefined
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer.current)
  }, [slides])

  if (slides && slides.length) {
    const slide = slides[active]

    return (
      <section className="hero hero--carousel" aria-roledescription="carousel">
        <div
          className="hero__backdrop"
          aria-hidden="true"
          style={slide.image ? { backgroundImage: `url(${slide.image})` } : undefined}
        >
          {!slide.image && <span className="hero__backdrop-label">{String(active + 1).padStart(2, '0')}</span>}
        </div>
        <div className="container hero__content">
          <span className="eyebrow">Kenya NPO Working Group on FATF</span>
          <h1 className="hero__caption">{slide.caption}</h1>
          <Link to={slide.buttonTo} className="btn btn-primary">{slide.buttonLabel}</Link>
        </div>
        <div className="hero__dots container">
          {slides.map((s, i) => (
            <button
              key={s.caption}
              className={'hero__dot' + (i === active ? ' hero__dot--active' : '')}
              aria-label={`Show slide ${i + 1}: ${s.imageLabel}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="hero hero--static">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h1>{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}

export default Hero
