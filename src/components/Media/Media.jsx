import './Media.css'

import media1 from '../../assets/media/media-1.png'
import media2 from '../../assets/media/media-2.png'
import media3 from '../../assets/media/media-3.png'
import media4 from '../../assets/media/media-4.png'
import media5 from '../../assets/media/media-5.png'
import media6 from '../../assets/media/media-6.png'

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
            <span className="news-link-list__date">{item.date}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export function GalleryGrid({ items }) {
  const images = [
    media1,
    media2,
    media3,
    media4,
    media5,
    media6,
  ]

  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <div className="gallery-card" key={item}>
          <div className="gallery-card__frame">
            <img
              src={images[index]}
              alt={item}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}