import Hero from '../components/Hero/Hero.jsx'
import FocusAreaCard from '../components/FocusAreas/FocusAreas.jsx'
import './Page.css'

const AREAS = [
  {
    label: 'Focus area 01',
    title: 'Awareness and Resilience',
    context:
      'The Working Group raises awareness of NPOs on terror-financing threats and the effective mitigation measures they can take.',
    objectives: [
      'Build NPO understanding of TF typologies, NPO-specific risk and risk-based oversight.',
      'Strengthen sector-owned safeguards through self-regulation and practical AML/CFT guidance.',
    ],
    completed: [
      {
        title: 'County outreach and sensitisation forums',
        body:
          'Two-day forums delivered across eight counties: Mombasa, Kwale, Kilifi, Kisumu, Uasin Gishu, Nakuru, Nairobi and Garissa.',
      },
      {
        title: 'NPO AML/CFT Handbook',
        body:
          'A practical AML/CFT guideline developed with TI-Kenya and a simplified popular version for smaller NPOs.',
      },
    ],
    ongoing: [
      {
        title: 'Sector-owned toolkits on self-regulation and AML/CFT',
        body:
          'Tiered, bilingual toolkits with an online module and self-scoring tool.',
      },
    ],
    comingUp:
      'Self-regulation Training of Trainers and county cascade.',
  },

  {
    label: 'Focus area 02',
    title: 'Multistakeholder Collaboration and Advocacy',
    context:
      'The Working Group builds relationships, partnerships and engagements for risk-based, human-rights-compliant CFT oversight of NPOs.',
    objectives: [
      'Institutionalise structured NPO–regulator dialogue.',
      'Co-develop risk-based, rights-respecting oversight frameworks with regulators.',
    ],
    ongoing: [
      {
        title: 'Talk to Your Regulator (#T2R)',
        body:
          'Physical and online sessions with regulatory bodies, prioritising NPO concerns.',
      },
      {
        title: 'Risk-Based Oversight and Monitoring (RBOM)',
        body:
          'Co-developed the RBOM Framework, risk-profiling matrix and PBORA CFT Manual.',
      },
    ],
    comingUp:
      'Periodic review of FATF-NPO identification and TF risk with government.',
  },

  {
    label: 'Focus area 03',
    title: 'Financial Inclusion',
    context:
      'The Working Group builds partnerships with financial institutions, funders and the private sector to address de-risking and financial exclusion.',
    objectives: [
      'Document the scale and impact of de-risking on the NPO sector.',
      'Improve NPO access to financial services through evidence and bank engagement.',
    ],
    ongoing: [
      {
        title: 'National banking survey',
        body:
          'A mixed-methods survey documenting de-risking, account restrictions and barriers to receiving international funds.',
      },
    ],
    comingUp:
      'A National Tri-Sector Working Group involving NPOs, regulators and banks.',
  },

  {
    label: 'Focus area 04',
    title: 'Research & Learning',
    context:
      'The Working Group conducts policy research to inform risk-based AML/CFT policy and practice.',
    objectives: [
      'Build the evidence base for proportionate, risk-based oversight.',
      'Share Kenya’s model regionally and sustain a community of practice.',
    ],
    ongoing: [
      {
        title: 'Research, evidence and policy insights',
        body:
          'Targeted research, policy briefs and case studies supporting proportionate oversight.',
      },
      {
        title: 'AML/CFT knowledge repository',
        body:
          'Upgrading the CVE Hub into the Working Group’s knowledge repository.',
      },
      {
        title: 'Community of practice and regional learning',
        body:
          'Sharing Kenya’s model through regional and international learning opportunities.',
      },
    ],
    comingUp:
      'An RBOM real-world monitoring pilot and regional learning session.',
  },
]

function FocusAreas() {
  return (
    <>
      <Hero
        eyebrow="Focus Areas"
        title="Four workstreams, one goal"
        subtitle="Our work is organised across four thematic focus areas."
      />

      <section className="section">
        <div className="container">

          <h2>Our Focus Areas</h2>

          <p>
            Explore the four workstreams through which the Kenya NPO Working
            Group advances risk-based AML/CFT oversight and protects civic space.
          </p>

          <div className="focus-list">

            {AREAS.map((area) => (
              <FocusAreaCard
                key={area.title}
                area={area}
              />
            ))}

          </div>

        </div>
      </section>
    </>
  )
}

export default FocusAreas