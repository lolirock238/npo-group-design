import "./Partner.css";

// Logo grid. If an item has a `url`, the logo links to that organisation's
// website; otherwise it is shown unlinked. Items without a logo show their name.
function Partner({ items }) {
  return (
    <div className="logo-grid">
      {items.map((item) => {
        const inner = item.logo ? (
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="partner-logo"
            loading="lazy"
          />
        ) : (
          <span className="logo-chip__name">{item.name}</span>
        );

        return item.url ? (
          <a
            className="logo-chip"
            key={item.name}
            href={item.url}
            title={item.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} (opens website)`}
          >
            {inner}
          </a>
        ) : (
          <div className="logo-chip" key={item.name} title={item.name}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export default Partner;
