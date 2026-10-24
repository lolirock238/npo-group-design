import './Partner.css'

// Renders a grid of organisation "logo chips". Real logo artwork is
// supplied per-organisation by the client; until then each chip shows
// the organisation's name so the grid and layout are already final.
function Partner({ items }) {
  return (
    <div className="logo-grid">
      {items.map((name) => (
        <div className="logo-chip" key={name} title={name}>
          {name}
        </div>
      ))}
    </div>
  )
}

export default Partner
