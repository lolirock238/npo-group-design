import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero.jsx'
import './Page.css'
import hero1 from '../assets/hero/hero-1.png'
import hero2 from '../assets/hero/hero-2.png'
import hero3 from '../assets/hero/hero-3.png'
import hero4 from '../assets/hero/hero-4.png'
import hero5 from '../assets/hero/hero-5.png'

const SLIDES = [
  {
    image: hero1,
    imageLabel: 'Members / group photo',
    caption: 'Risk-based AML/CFT oversight. Protected civic space.',
    buttonLabel: 'About Us',
    buttonTo: '/about',
  },
  {
    image: hero2,
    imageLabel: 'Talk to Your Regulator session',
    caption: 'Structured dialogue between NPOs and their regulators.',
    buttonLabel: 'Talk to Your Regulator',
    buttonTo: '/talk-to-your-regulator',
  },
  {
    image: hero3,
    imageLabel: 'High-Level Conference',
    caption: "Sharing Kenya's model across Africa.",
    buttonLabel: 'Media',
    buttonTo: '/media',
  },
  {
    image: hero4,
    imageLabel: 'County outreach forum',
    caption: 'CFT sensitisation across eight counties.',
    buttonLabel: 'Focus Areas',
    buttonTo: '/focus',
  },
  {
    image: hero5,
    imageLabel: 'Strategy launch',
    caption: 'Our roadmap to 2027.',
    buttonLabel: 'Resources',
    buttonTo: '/resources',
  },
]

const KEY_ISSUES = [
  {
    title: 'Over-regulation',
    body: 'Rules that go beyond the actual risk — blanket documentation, registration and reporting demands that burden legitimate NPOs and shrink civic space, often without improving AML/CFT outcomes.',
    href: 'https://fatfplatform.org/issues/over-regulation/',
  },
  {
    title: 'De-risking & financial access',
    body: 'Banks restricting or closing NPO accounts to avoid perceived risk rather than managing it — causing delayed or blocked transfers, especially for cross-border and humanitarian funds.',
    href: 'https://fatfplatform.org/issues/over-regulation-2/',
  },
  {
    title: 'Sector involvement in national risk assessments',
    body: 'NPOs must be consulted in the risk assessments that shape their oversight, so measures are evidence-based and proportionate — and emerging issues are surfaced early.',
    href: 'https://fatfplatform.org/issues/over-regulation-3/',
  },
]

const NEWS_TEASERS = [
  { meta: '30 Sep 2025 · ISS Africa', title: "Risk and reward of Kenya's push to reverse FATF grey-listing", href: 'https://issafrica.org/iss-today/risk-and-reward-of-kenya-s-push-to-reverse-fatf-grey-listing' },
  { meta: 'PBORA', title: 'TI-Kenya & PBORA strengthen collaboration on AML/CFT guidance for the NPO sector', href: 'https://pbora.go.ke/ti-kenya-pbora-strengthen-collaboration-amlcft-guidance-npo-sector' },
  { meta: 'YouTube', title: 'Kenya FATF NPO WG channel — recent livestreams', href: 'https://www.youtube.com/@kenyafatfnpowg/streams' },
]

const FAQS = [
  { q: 'What is the FATF?', a: 'The Financial Action Task Force — the global standard-setter for anti-money-laundering and counter-terrorist-financing (AML/CFT).' },
  { q: 'What is Recommendation 8?', a: 'The FATF standard on NPOs. Revised in 2016 and 2023, it requires focused, proportionate, risk-based oversight applied only to a subset of NPOs, without disrupting legitimate activity.' },
  { q: 'Is Kenya on the FATF grey list?', a: 'Yes. Kenya was grey-listed in February 2024 and, as of the June 2026 plenary, remains under increased monitoring while it completes its action plan.' },
  { q: 'Does grey-listing mean NPOs must report to the FRC?', a: "No. A 2025 POCAMLA amendment removed NPOs from the list of 'reporting institutions'. POTA obligations remain, alongside a voluntary FRC disclosure channel." },
]

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className="faq-item" key={item.q}>
            <button
              className="faq-item__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="faq-item__answer">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero slides={SLIDES} />

      {/* 2.2 Explainer 1 */}
      <section className="section">
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Explainer</span>
            <h2>What is the FATF, and how does it affect NPOs?</h2>
            <div className="panel__body">
              <p>
                The Financial Action Task Force (FATF) is the global standard-setter for
                anti-money-laundering and countering the financing of terrorism (AML/CFT). One of
                its 40 Recommendations — Recommendation 8 — governs how countries oversee
                non-profit organisations.
              </p>
              <p>
                For years, Recommendation 8 was applied as though every NPO were high-risk. That
                drove blanket restrictions, bank de-risking, financial exclusion, and the misuse
                of counter-terrorism justifications to shrink civic space. Revisions in 2016 and
                2023 corrected course: oversight must be focused, proportionate and risk-based,
                applied only to the subset of organisations within the FATF definition of an NPO,
                and must not disrupt legitimate activity.
              </p>
              <p>
                Kenya was grey-listed by the FATF in February 2024, and exiting the grey list is
                now a national priority. Revising the NPO framework so that oversight is
                risk-based is part of Kenya's action plan — and Kenya's own NPO-sector risk
                assessment (2024) rated the sector's terrorism-financing risk low–medium. This is
                the gap the Working Group works in: low actual risk, but disproportionate
                compliance pressure.
              </p>
            </div>
            <div className="infographic-note">
              <strong>Infographic spec (separate consultant)</strong>
              FATF (40 Recommendations) → Recommendation 8 (NPOs) → Risk-based approach (only
              FATF-defined NPOs) → Kenya action plan (revise NPO oversight) → Exit grey list.
              Timeline: 2016 R.8 revised · 2023 R.8 updated · Feb 2024 Kenya grey-listed · 2024 NPO
              risk assessment rated low–medium · 2025 POCAMLA amendment · June 2026 still
              grey-listed.
            </div>
            <a className="panel__link" href="https://fatfplatform.org/context/fatf-explained/" target="_blank" rel="noopener noreferrer">
              FATF Explained ↗
            </a>{' '}
            <a className="panel__link" href="https://fatfplatform.org/context/fatf-and-npos/" target="_blank" rel="noopener noreferrer">
              FATF & NPOs ↗
            </a>
          </div>
        </div>
      </section>

      {/* 2.3 Explainer 2 */}
      <section className="section section--alt">
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Explainer</span>
            <h2>What we do, and how we work</h2>
            <div className="panel__body">
              <p>
                The Kenya NPO Working Group on FATF is a network of 40+ civil society
                organisations, established in 2020. From June 2025, it has been hosted by the
                Centre for Human Rights and Policy Studies (CHRIPS). Muslims for Human Rights
                (MUHURI) hosted the Working Group from 2020–2025. We promote risk-based AML/CFT
                oversight, responsive regulation of the NPO sector, and the protection of civic
                space.
              </p>
              <p>
                We work through four thematic workstreams — Awareness & Resilience;
                Multistakeholder Collaboration & Advocacy; Financial Inclusion; and Research &
                Learning — guided by a five-member Steering Committee, 8 workstream co-chairs and
                an International Advisory Group. The Working Group is guided by a Strategic Plan,
                2025–2027, and a Strategy Implementation, Collaboration, Learning & Adaptation
                Plan that keeps our work evidence-led.
              </p>
            </div>
            <div className="infographic-note">
              <strong>Infographic spec (separate consultant)</strong>
              Steering Committee → Secretariat (CHRIPS) → four workstreams → 40+ members, with the
              Advisory Group to one side and external partners (PBORA, FRC, KBA, BRS) connected
              through #T2R and the tri-sector group.
            </div>
          </div>
        </div>
      </section>

      {/* 2.4 Risk-based approach */}
      <section className="section">
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Why it matters</span>
            <h2>The risk-based approach</h2>
            <div className="panel__body">
              <p>
                A risk-based approach means oversight is proportionate to the terrorism-financing
                risk an organisation actually poses — applied only to the subset of organisations
                within the FATF definition of an NPO, and grounded in evidence rather than
                assumption.
              </p>
              <p>
                Not all NPOs carry the same risk; most carry little or none. Kenya's NPO-sector TF
                Risk Assessment rated the sector low–medium, so oversight should match that
                profile rather than treat every organisation as a threat.
              </p>
              <p>
                One-size-fits-all regulation harms the sector and ultimately undermines the
                state's own objectives. Blanket rules encourage banks to de-risk and close NPO
                accounts, restrict access to legitimate funding, and impose disproportionate
                compliance costs on smaller organisations. They also have a chilling effect on
                freedoms of association and expression. At the same time, they weaken AML/CFT
                efforts by spreading limited supervisory resources across low-risk organisations
                instead of focusing on areas of genuine risk.
              </p>
            </div>
            <a className="panel__link" href="https://fatfplatform.org/risk-based-approach/" target="_blank" rel="noopener noreferrer">
              Read the Coalition's Risk-Based Approach page ↗
            </a>
          </div>
        </div>
      </section>

      {/* 2.5 Key issues */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Key issues</span>
            <h2>Where oversight goes wrong</h2>
          </div>
          <div className="card-grid">
            {KEY_ISSUES.map((issue) => (
              <article className="info-card" key={issue.title}>
                <h3>{issue.title}</h3>
                <p>{issue.body}</p>
                <a className="panel__link" href={issue.href} target="_blank" rel="noopener noreferrer">Read more ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 News teaser */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Media</span>
            <h2>Latest news</h2>
          </div>
          <div className="news-grid">
            {NEWS_TEASERS.map((n) => (
              <article className="news-card" key={n.title}>
                <span className="news-card__meta">{n.meta}</span>
                <h3>{n.title}</h3>
                <a href={n.href} target="_blank" rel="noopener noreferrer">Read ↗</a>
              </article>
            ))}
          </div>
          <div className="section-foot">
            <Link className="panel__link" to="/media">View all news →</Link>
          </div>
        </div>
      </section>

      {/* 2.6 FAQs teaser */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
          </div>
          <FaqAccordion items={FAQS} />
          <div className="section-foot">
            <Link className="panel__link" to="/#faqs">See all FAQs →</Link>
          </div>
        </div>
      </section>

      {/* 2.6 Contact block */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="contact-block">
            <div>
              <h2>Get in touch</h2>
              <p>info@kenyafatfnpowg.org</p>
            </div>
            <div className="contact-block__actions">
              <Link to="/contact" className="btn btn-primary">Contact us</Link>
              <div className="contact-block__social">
                <a href="https://www.youtube.com/@kenyafatfnpowg/streams" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
