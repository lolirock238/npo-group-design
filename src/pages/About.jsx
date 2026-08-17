import Hero from '../components/Hero/Hero.jsx'
import Team from './Team.jsx'
import Partner from './Partner.jsx'
import './Page.css'

function About() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="The Working Group"
        subtitle="Mission, vision, history and governance behind Kenya's civil-society response to FATF Recommendation 8."
      />

      {/* 3.1 */}
      <section className="section">
        <div className="container">
          <div className="role-grid">
            <div className="role-card">
              <h3>Mission</h3>
              <p style={{ color: 'var(--color-ink-soft)', fontSize: '0.94rem' }}>
                To promote risk-based AML/CFT oversight, responsive regulation of the NPO sector,
                and the protection of civic space in Kenya.
              </p>
            </div>
            <div className="role-card">
              <h3>Vision</h3>
              <p style={{ color: 'var(--color-ink-soft)', fontSize: '0.94rem' }}>
                A Kenyan NPO sector that is resilient against terrorism-financing abuse and
                operates in an enabling regulatory and financial environment, with civic space
                protected.
              </p>
            </div>
            <div className="role-card">
              <h3>History</h3>
              <p style={{ color: 'var(--color-ink-soft)', fontSize: '0.94rem' }}>
                Established in 2020, the Working Group brings together 40+ civil society
                organisations. Muslims for Human Rights (MUHURI) hosted the Working Group from
                2020 to 2025; since June 2025 it has been hosted by the Centre for Human Rights
                and Policy Studies (CHRIPS), which serves as Secretariat.
              </p>
            </div>
            <div className="role-card">
              <h3>Governance</h3>
              <p style={{ color: 'var(--color-ink-soft)', fontSize: '0.94rem' }}>
                A five-member Steering Committee provides strategic direction; four thematic
                workstreams, each led by co-chairs (8 in total), drive delivery; and an
                International Advisory Group provides technical guidance. Work is guided by the
                Strategic Plan 2025–2027 and its Strategy Implementation, Collaboration, Learning
                & Adaptation Plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 */}
      <section className="section section--alt">
        <div className="container">
          <div className="panel">
            <span className="eyebrow">2026</span>
            <h2>Kenya's current context</h2>
            <p className="panel__body">
              Kenya remains on the FATF grey list following the June 2026 plenary and is working
              to complete its action plan. One requirement directly concerns our members —
              revising the framework for NPO regulation and oversight so that measures are
              risk-based and do not disrupt legitimate activity. The Working Group continues to
              convene NPOs, engage PBORA and other regulators, and push for oversight that is
              proportionate and protective of civic space.
            </p>
          </div>
        </div>
      </section>

      {/* 3.3 + 3.4 */}
      <Team />

      {/* 3.5 */}
      <Partner />
    </>
  )
}

export default About
