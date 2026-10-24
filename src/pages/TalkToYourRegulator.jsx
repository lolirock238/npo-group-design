import Hero from '../components/Hero/Hero.jsx'
import './Page.css'

const SESSION_POSTS = [
  {
    tag: 'Session summary',
    title: 'Maanzoni — #T2R / tri-sector session',
    href: '/resources',
  },
  {
    tag: 'Session summary',
    title: 'PBO Week (15 March 2026)',
    href: '/resources',
  },
  {
    tag: 'Session summary',
    title: 'Further #T2R session write-up',
    href: '/resources',
  },
  {
    tag: 'Session summary',
    title: 'Further #T2R session write-up',
    href: '/resources',
  },
]

function TalkToYourRegulator() {
  return (
    <>
      <Hero
        eyebrow="Talk To Your Regulator"
        title="#T2R"
        subtitle="The Working Group's structured dialogue platform between NPOs and their regulators."
      />

      <section className="section">
        <div className="container">
          <div className="panel">
            <h2>Talk to Your Regulator (#T2R)</h2>
            <div className="panel__body">
              <p>
                "Talk to Your Regulator" is the Working Group's structured dialogue platform
                between NPOs and the institutions that regulate them — the Public Benefit
                Organisations Regulatory Authority (PBORA), the Financial Reporting Centre (FRC),
                the Kenya Bankers Association (KBA) and the Business Registration Service (BRS).
                Launched on 19 May 2025, it replaces one-way briefings with genuine two-way
                engagement: agendas prioritise NPO concerns, and every session produces a public
                outcome document.
              </p>
              <p>
                Sessions run physically and online through the year, including county-led forums
                and PBORA regional offices. Outcome documents are published here and in the
                Knowledge Hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Session write-ups</span>
            <h2>#T2R sessions held</h2>
          </div>
          <div className="t2r-list">
            {SESSION_POSTS.map((post, i) => (
              <article className="t2r-card" key={post.title + i}>
                <span>{post.tag}</span>
                <h3>{post.title}</h3>
                <a href={post.href}>View outcome document →</a>
              </article>
            ))}
          </div>

          <div className="upcoming-notice">
            Two #T2R sessions remain in 2026, including a session in Mombasa. Dates will be
            published here ahead of each session.
          </div>
        </div>
      </section>
    </>
  )
}

export default TalkToYourRegulator
