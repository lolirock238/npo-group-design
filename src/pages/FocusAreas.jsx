import Hero from "../components/Hero/Hero.jsx";
import FocusAreaCard from "../components/FocusAreas/FocusAreas.jsx";
import "./Page.css";

const AREAS = [
  {
    label: "Focus area 01",
    title: "Awareness and Resilience",
    context:
      "The Working Group raises awareness of NPOs on terror-financing threats and the effective mitigation measures they can take.",
    objectives: [
      "Build NPO understanding of TF typologies, NPO-specific risk and risk-based oversight.",
      "Strengthen sector-owned safeguards through self-regulation and practical AML/CFT guidance.",
    ],

    outreachSchedule: [
      { activity: "CFT Outreach Forum", location: "Mombasa", date: "20&21 April 2026" },
      { activity: "CFT Outreach Forum", location: "Kwale", date: "23 April 2026" },
      { activity: "CFT Outreach Forum", location: "Kilifi", date: "27&28 April 2026" },
      { activity: "CFT Outreach Forum", location: "Kisumu", date: "11&12 May 2026" },
      { activity: "CFT Outreach Forum", location: "Eldoret", date: "14&15 May 2026" },
      { activity: "CFT Outreach Forum", location: "Nakuru", date: "18&19 May 2026" },
      { activity: "CFT Outreach Forum", location: "Nairobi", date: "3&4 June 2026" },
      { activity: "CFT Outreach Forum", location: "Garissa", date: "9&10 June 2026" },
    ],

    completed: [
      {
        title: "County outreach and sensitisation forums",
        body: "Two-day forums delivered across eight counties (Mombasa, Kwale, Kilifi, Kisumu, Uasin Gishu, Nakuru, Nairobi and Garissa), co-organised with PBORA, building NPO understanding of TF typologies, NPO-specific risk and risk-based oversight.",
      },
      {
        title: "NPO AML/CFT Handbook",
        body: "A practical AML/CFT guideline (with TI-Kenya) and a simplified popular version for smaller NPOs, launched through county events.",
      },
    ],
    ongoing: [
      {
        title: "Sector-owned toolkits on self-regulation and AML/CFT",
        body: "Tiered, bilingual toolkits with an online module, including a self-scoring tool that generates bank-usable evidence.",
      },
    ],
    comingUp:
      "Self-regulation Training of Trainers and county cascade; awareness forums supporting NPO-led, PBORA-recognised forums.",
  },
  {
    label: "Focus area 02",
    title: "Multistakeholder Collaboration and Advocacy",
    context:
      "The Working Group builds relationships, partnerships and engagements for risk-based, human rights-compliant CFT oversight of NPOs, and amplifies the voice of NPOs in AML/CFT processes.",
    objectives: [
      "Institutionalise structured NPO–regulator dialogue.",
      "Co-develop risk-based, rights-respecting oversight frameworks with regulators.",
    ],
    t2rSchedule: [
      { name: "Maanzoni #T2R", date: "5 March 2026", status: "done" },
      { name: "PBO Week #T2R", date: "15 April 2026", status: "done" },
      { name: "#T2R Coast Edition", date: "22 October 2026", status: "done" },
      { name: "Nairobi #T2R Edition", date: "Date to be confirmed", status: "upcoming" },
    ],
    ongoing: [
      {
        title: "'Talk to Your Regulator' (#T2R)",
        body: "Physical and online sessions through the year with regulatory bodies, prioritising NPO concerns, with outcome documents shared sector-wide. Inaugural session: 19 May 2025.",
      },
      {
        title: "Risk-Based Oversight and Monitoring (RBOM)",
        body: "Co-developed the RBOM Framework, risk-profiling matrix and PBORA CFT Manual with the regulator; preparing a real-world pilot.",
      },
    ],
    comingUp:
      "Periodic review of FATF-NPO identification and TF risk with government; PBORA accountability research and human-rights training; capacity-building, evidence resources and responsive campaigns.",
  },
  {
    label: "Focus area 03",
    title: "Financial Inclusion",
    context:
      "The Working Group builds partnerships — with financial institutions, funders and the private sector — to increase NPO financial sustainability and address de-risking and financial exclusion.",
    objectives: [
      "Document the scale and impact of de-risking on the NPO sector.",
      "Improve NPO access to financial services through evidence and bank engagement.",
    ],
    ongoing: [
      {
        title: "National banking survey",
        body: "A mixed-methods survey of NPOs across regions (targeting 399+ responses), administered independently by civil society to protect candour, documenting de-risking, account restrictions and barriers to receiving international funds.",
      },
    ],
    comingUp:
      "A National Tri-Sector Working Group (NPOs–regulators–banks); proportionate banking due-diligence guidance and joint bank training; NPO financial sustainability and literacy support.",
  },
  {
    label: "Focus area 04",
    title: "Research & Learning",
    context:
      "The Working Group conducts policy research to inform risk-based AML/CFT policy and practice, and to make the case for proportionate oversight.",
    objectives: [
      "Build the evidence base for proportionate, risk-based oversight.",
      "Share Kenya's model regionally and sustain a community of practice.",
    ],
    ongoing: [
      {
        title: "Research, evidence and policy insights",
        body: "Targeted research, policy briefs and case studies, including a Kenya country case study for the Global NPO Coalition (book chapter submitted June 2026).",
      },
      {
        title: "AML/CFT knowledge repository (CVE Knowledge Hub)",
        body: "Upgrading the CVE Hub into the Working Group's knowledge hub, curating AML/CFT publications, with a WhatsApp AI chatbot and County CVE Hubs under exploration.",
      },
      {
        title: "Community of practice and regional learning",
        body: "Sharing Kenya's model at the Annual High-Level Civil Society AML/CFT Conference and building toward an Africa-wide NPO AML/CFT network.",
      },
    ],
    comingUp:
      "An RBOM real-world monitoring pilot; a regional learning session and brief.",
  },
];

function FocusAreas() {
  return (
    <>
      <Hero
        eyebrow="Focus Areas"
        title="Four workstreams, one goal"
        subtitle="Each focus area carries key context and objectives, activities completed and under way, and what's coming up."
      />
      <section className="section">
        <div className="container">
          <div className="focus-list">
            {AREAS.map((area) => (
              <FocusAreaCard area={area} key={area.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FocusAreas;
