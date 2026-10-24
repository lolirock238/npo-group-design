import './Media.css'

// 8.1 In the news — external links
export function NewsList({ items }) {
  return (
    <ul className="news-link-list">
      {items.map((item) => (
        <li key={item.title}>
          <span className="news-link-list__source">{item.source}</span>
          <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
          {item.date && <span className="news-link-list__date">{item.date}</span>}
        </li>
      ))}
    </ul>
  )
}

// 8.3 Photo galleries
export function GalleryGrid({ items }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <div className="gallery-card" key={item}>
          <div className="gallery-card__frame" aria-hidden="true" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}
