import './Media.css'

export function NewsList({ items }) {
  return (
    <ul className="news-link-list">
      {items.map((item) => (
        <li key={item.title}>
          <span className="news-link-list__source">{item.source}</span>

          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>

          {item.date && (
            <span className="news-link-list__date">
              {item.date}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export function GalleryGrid({ items }) {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <div className="gallery-card" key={item.title}>
          <div className="gallery-card__frame">
            <img
              src={item.image}
              alt={item.title}
              className="gallery-card__image"
            />
          </div>

          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}