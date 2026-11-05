const STEERING_COMMITTEE = [
  "Muslims for Human Rights (MUHURI)",
  "Article 19 Eastern Africa",
  "Centre for Human Rights and Policy Studies (CHRIPS)",
  "Islamic Relief",
  "Transparency International-Kenya",
];

function Team() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Governance</span>
          <h2>The Team</h2>
        </div>

        <div className="role-grid">
          <div className="role-card">
            <h3>Secretariat</h3>
            <ul>
              <li>Centre for Human Rights and Policy Studies (CHRIPS)</li>
            </ul>
          </div>

          <div className="role-card">
            <h3>Steering Committee</h3>
            <ul>
              {STEERING_COMMITTEE.map((org) => (
                <li key={org}>{org}</li>
              ))}
            </ul>
          </div>

          <div className="role-card">
            <h3>Workstreams</h3>
            <ul>
              <li>Awareness &amp; Resilience</li>
              <li>Multistakeholder Collaboration &amp; Advocacy</li>
              <li>Financial Inclusion</li>
              <li>Research &amp; Learning</li>
            </ul>

            <p
              style={{
                fontSize: "0.86rem",
                marginTop: "0.8em",
                marginBottom: 0,
              }}
            >
              Each workstream is led by co-chairs (eight in total). Every
              Working Group member joins at least one workstream. See Contact to
              apply.
            </p>
          </div>
        </div>

        <div className="section-head" style={{ marginTop: "2.8rem" }}>
          <span className="eyebrow">Membership</span>
          <h2>Working Group Members</h2>
          <p>
            The Working Group brings together 40+ civil society organisations.
            Member names and approved logos will be presented alphabetically as
            publishing permissions are confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
