import "./FocusAreas.css";

// Renders one focus area: key context, objectives, activities, coming up.
// Section 4 of the guide: "Only work genuinely underway is listed as ongoing."
function FocusAreas({ area }) {
  const { label, title, context, objectives, completed, ongoing, comingUp } =
    area;
  return (
    <article className="focus-card">
      <div className="focus-card__head">
        <span>{label}</span>
        <h2>{title}</h2>
        <p>{context}</p>
      </div>
      <div className="focus-card__body">
        <h4>Objectives</h4>
        <ul>
          {objectives.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>

        {completed && completed.length > 0 && (
          <>
            <h4>Completed activities</h4>
            {completed.map((c) => (
              <div className="focus-activity" key={c.title}>
                <strong>{c.title}</strong>
                <p>{c.body}</p>
              </div>
            ))}
          </>
        )}

        <h4>Ongoing activities</h4>
        {ongoing.map((c) => (
          <div className="focus-activity" key={c.title}>
            <strong>{c.title}</strong>
            <p>{c.body}</p>
          </div>
        ))}
        {area.outreachSchedule && (
          <>
            <h4>Outreach forum schedule</h4>
            <table className="resource-table focus-schedule-table">
              <thead>
                <tr>
                  <th>Activity Type</th>
                  <th>Implementation Location</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {area.outreachSchedule.map((row, i) => (
                  <tr key={row.activity + row.location + i}>
                    <td>{row.activity}</td>
                    <td>{row.location}</td>
                    <td>{row.date || "TBC"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {area.outcomeDocumentPending && (
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--color-ink-soft)",
              margin: "0 0 1.2em",
            }}
          >
            National outcome document: <em>to be completed</em> — will be
            viewable and downloadable on this page once finalised.
          </p>
        )}

        {comingUp && <p className="focus-comingup">Coming up: {comingUp}</p>}
      </div>
    </article>
  );
}

export default FocusAreas;
