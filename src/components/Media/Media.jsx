
import './Media.css'

// External media coverage
export function NewsList({ items = [] }) {
  return (
    <div className="news-list">
      {items.map((item) => (
        <article className="news-card" key={item.href}>
          <a
            className="news-card__thumbnail"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read: ${item.title}`}
          >
            {item.image ? (
              <img src={item.image} alt="" loading="lazy" />
            ) : (
              <span className="news-card__placeholder">
                {item.source}
              </span>
            )}
          </a>

          <div className="news-card__content">
            <span className="news-card__source">{item.source}</span>
            <h3>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </h3>
            {item.date && (
              <span className="news-card__date">{item.date}</span>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

// Video gallery
const strategyLaunchVideo = {
  title: '2025–2027 Strategy Launch',
  source: 'YouTube',
  href: 'https://www.youtube.com/watch?v=DmohpJm8mjc',
  image: 'https://img.youtube.com/vi/DmohpJm8mjc/hqdefault.jpg',
}

export function VideoGrid({ items = [] }) {
  const videos = [
    strategyLaunchVideo,
    ...items.filter(
      (video) => video.href !== strategyLaunchVideo.href
    ),
  ]

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <a
          className="video-card"
          href={video.href}
          target="_blank"
          rel="noopener noreferrer"
          key={video.href}
        >
          <div className="video-card__thumbnail">
            {video.image ? (
              <img src={video.image} alt="" loading="lazy" />
            ) : (
              <div className="video-card__placeholder">
                Video preview
              </div>
            )}
            <span className="video-card__play" aria-hidden="true">
              ▶
            </span>
          </div>

          <div className="video-card__content">
            <span className="video-card__source">
              {video.source || 'Video'}
            </span>
            <h3>{video.title}</h3>
            {video.date && <p>{video.date}</p>}
          </div>
        </a>
      ))}
    </div>
  )
}

// Photo galleries
// Each item can be a title string or an object containing title, image and href.
export function GalleryGrid({ items = [] }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => {
        const gallery =
          typeof item === 'string' ? { title: item } : item

        const cardContent = (
          <>
            <div className="gallery-card__image">
              {gallery.image ? (
                <img
                  src={gallery.image}
                  alt={gallery.title}
                  loading="lazy"
                />
              ) : (
                <div className="gallery-card__placeholder">
                  {gallery.title}
                </div>
              )}
            </div>
            <div className="gallery-card__content">
              <h3>{gallery.title}</h3>
              {gallery.description && <p>{gallery.description}</p>}
            </div>
          </>
        )

        return (
          <article
            className="gallery-card"
            key={gallery.title}
          >
            {gallery.href ? (
              <a
                className="gallery-card__link"
                href={gallery.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              cardContent
            )}
          </article>
        )
      })}
    </div>
  )
}
