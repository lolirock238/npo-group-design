import "./Resources.css";

function Resources({ title, rows }) {
  return (
    <div className="resource-group">
      <h3>{title}</h3>

      <div className="resource-items">
        {rows.map((row) => (
          <article className="resource-item" key={row.resource}>
            <div className="resource-item__info">
              <span className="resource-item__type">{row.type}</span>
              <h4>{row.resource}</h4>
              <p>{row.note}</p>
            </div>

            <div className="resource-item__details">
              <span>File: {row.fileType || "To be confirmed"}</span>
              <span>Size: {row.fileSize || "To be confirmed"}</span>
            </div>

            <div className="resource-item__action">
              {row.downloadUrl ? (
                <a
                  href={row.downloadUrl}
                  className="resource-download"
                  download
                >
                  Download <span aria-hidden="true">↓</span>
                </a>
              ) : (
                <span className="resource-unavailable">File coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Resources;
