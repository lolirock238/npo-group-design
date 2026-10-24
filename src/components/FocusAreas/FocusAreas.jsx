import './FocusAreas.css'

// Renders one focus area: key context, objectives, activities, coming up.
// Section 4 of the guide: "Only work genuinely underway is listed as ongoing."
function FocusAreas({ area }) {
  const { label, title, context, objectives, completed, ongoing, comingUp } = area
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
          {objectives.map((o) => <li key={o}>{o}</li>)}
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

        {comingUp && <p className="focus-comingup">Coming up: {comingUp}</p>}
      </div>
    </article>
  )
}

export default FocusAreas
