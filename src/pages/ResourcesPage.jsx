import Hero from '../components/Hero/Hero.jsx'
import KnowledgeHub from '../components/KnowledgeHub/KnowledgeHub.jsx'
import ResourceGroup from '../components/Resources/Resources.jsx'
import './Page.css'

const GROUPS = [
  {
    title: 'Reports & assessments',
    rows: [
      { resource: 'Shadow Report to the ESAAMLG Mutual Evaluation of Kenya', type: 'Report', note: 'Civil-society response to the MER' },
      { resource: 'Kenya NPO Sector TF Risk Assessment Report', type: 'Report', note: 'Rated sector risk low–medium (2024)' },
    ],
  },
  {
    title: 'Strategy & planning',
    rows: [
      { resource: 'Kenya NPO Working Group Strategy, 2025–2027', type: 'Strategy', note: 'Vision, mission, goals, working areas' },
      { resource: 'Strategy Implementation and CLA Plan', type: 'Plan', note: 'Operationalises the Strategy (v1.0, June 2026)' },
    ],
  },
  {
    title: 'Outcome documents & submissions',
    rows: [
      { resource: 'Outcome Document 1 — Maanzoni', type: 'Outcome doc', note: 'From a #T2R / tri-sector session' },
      { resource: 'Outcome Document 2 — PBO Week', type: 'Outcome doc', note: 'PBO Week (15 March 2026)' },
      { resource: 'Submission on the Public Benefit Organisations Regulations 2025', type: 'Submission', note: "Working Group's formal input" },
    ],
  },
  {
    title: 'Guidance',
    rows: [
      { resource: 'AML/CFT Handbook for NPOs', type: 'Handbook', note: 'With TI-Kenya; add popular version when ready' },
    ],
  },
  {
    title: 'Blog',
    rows: [
      { resource: 'Kenya NPO sector progress to exit the grey list', type: 'Blog post', note: 'Plain-language progress update' },
    ],
  },
]

function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        title="Strategy, reports & guidance"
        subtitle="Strategy, plans, reports, submissions, and the handbook — with files hosted in the Knowledge Hub."
      />
      <section className="section">
        <div className="container">
          <KnowledgeHub />
          {GROUPS.map((g) => <ResourceGroup title={g.title} rows={g.rows} key={g.title} />)}
        </div>
      </section>
    </>
  )
}

export default ResourcesPage
