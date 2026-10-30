import "./Partner.css";

function Partner({ items }) {
  return (
    <div className="logo-grid">
      {items.map((partner) => (
        <div className="logo-chip" key={partner.name} title={partner.name}>
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="partner-logo"
          />
        </div>
      ))}
    </div>
  );
}

export default Partner;
