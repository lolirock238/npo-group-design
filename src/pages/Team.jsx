import Partner from '../components/Partner/Partner.jsx'

const STEERING_COMMITTEE = ['MUHURI', 'Article 19 Eastern Africa', 'CHRIPS', 'Islamic Relief', 'Transparency International-Kenya']
const ADVISORY_GROUP = ['ICNL', 'Fund for Global Human Rights', 'Human Security Collective', 'Civic Advisory Hub']

// 3.3 The Team
function Team() {
  return (
    <div className="section">
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
              {STEERING_COMMITTEE.map((org) => <li key={org}>{org}</li>)}
            </ul>
          </div>

          <div className="role-card">
            <h3>International Advisory Group</h3>
            <ul>
              {ADVISORY_GROUP.map((org) => <li key={org}>{org}</li>)}
            </ul>
          </div>

          <div className="role-card">
            <h3>Workstreams</h3>
            <ul>
              <li>Awareness & Resilience</li>
              <li>Multistakeholder Collaboration & Advocacy</li>
              <li>Financial Inclusion</li>
              <li>Research & Learning</li>
            </ul>
            <p style={{ fontSize: '0.86rem', marginTop: '0.8em', marginBottom: 0 }}>
              Each workstream is led by co-chairs (8 in total). Every member of the Working Group
              joins at least one workstream — see Contact to apply.
            </p>
          </div>
        </div>

        <div className="section-head" style={{ marginTop: '2.8rem' }}>
          <span className="eyebrow">Membership</span>
          <h2>Working Group Members</h2>
          <p>The Working Group brings together 40+ civil society organisations. Every member joins at least one workstream.</p>
        </div>
        <Partner items={['Full membership list and logos to be confirmed for publishing']} />
        <p style={{ fontSize: '0.82rem', color: 'var(--color-ink-soft)', marginTop: '0.8rem' }}>
          Content owner for this section: Joy Christine (joy@chrips.or.ke).
        </p>
      </div>
    </div>
  )
}

export default Team
