import './Partner.css'

// Renders a grid of organisation logos.
// Drop image files into: public/images/partners/<slug>.png
// Each item can be either a plain string (name only, shows a text chip)
// or an object { name, image } where `image` is the filename to look for
// in public/images/partners/. If that file isn't there yet, the chip
// falls back to showing the organisation's name so the layout never breaks.
function Partner({ items }) {
  return (
    <div className="logo-grid">
      {items.map((item, i) => {
        const name = typeof item === 'string' ? item : item.name
        const image = typeof item === 'string' ? null : item.image

        return (
          <div className="logo-chip" key={`${name}-${i}`} title={name}>
            {image ? (
              <img
                src={`/images/partners/${image}`}
                alt={name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'block'
                }}
              />
            ) : null}
            <span style={{ display: image ? 'none' : 'block' }}>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Partner
