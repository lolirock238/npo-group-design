import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Hero from "../components/Hero/Hero.jsx";
import "./Page.css";

// Coast Edition poster: drop the image into src/assets/t2r/ as
// "coast-poster.png" (or .jpg/.jpeg/.webp) and it appears automatically.
const posterFiles = import.meta.glob("../assets/t2r/coast-poster.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const COAST_POSTER = Object.values(posterFiles)[0] || null;

// Only sessions that have actually taken place.
const SESSION_POSTS = [
  {
    tag: "19 May 2025",
    title: "Inaugural #T2R session",
    summary: "A summary of this #T2R session will be published here.",
    outcome: "Outcome document — to be added once finalised.",
  },
  {
    tag: "5 March 2026",
    title: "Maanzoni #T2R / tri-sector session",
    summary: "A summary of this #T2R session will be published here.",
    outcome: "Outcome document — to be added once finalised.",
  },
  {
    tag: "15 April 2026",
    title: "PBO Week #T2R session",
    summary: "A summary of this #T2R session will be published here.",
    outcome: "Outcome document — to be added once finalised.",
  },
  {
    tag: "22 October 2026",
    title: "#T2R Coast Edition",
    summary: "A summary of this #T2R session will be published here.",
    outcome: "Outcome document — to be added once finalised.",
  },
];

function TalkToYourRegulator() {
  const [openSession, setOpenSession] = useState(null);

  return (
    <>
      <div className="t2r-hero">
        <Hero
          eyebrow="Talk To Your Regulator"
          title="#T2R"
          subtitle="The Working Group's structured dialogue platform between NPOs and their regulators."
        />
      </div>

      <section className="section">
        <div className="container">
          <div className="panel">
            <h2>Talk to Your Regulator (#T2R)</h2>

            <div className="panel__body">
              <p>
                "Talk to Your Regulator" is the Working Group's structured
                dialogue platform between NPOs and regulators and key
                stakeholders: the Public Benefit Organisations Regulatory
                Authority (PBORA), the Financial Reporting Centre (FRC), the
                Business Registration Service (BRS) and the Kenya Bankers
                Association (KBA). Launched on 19 May 2025, it replaces one-way
                briefings with genuine two-way engagement: agendas prioritise
                NPO concerns, and every session produces a public outcome
                document.
              </p>

              <p>
                Sessions run physically and online through the year, including
                county-led forums and PBORA regional offices. Outcome documents
                are published here and in the Knowledge Hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="coast-edition">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Latest edition · 22 October 2026</span>
            <h2>#T2R Coast Edition</h2>
          </div>

          <figure className="t2r-poster">
            {COAST_POSTER ? (
              <img src={COAST_POSTER} alt="Poster for the #T2R Coast Edition, 22 October 2026" />
            ) : (
              <div className="t2r-poster__placeholder">
                #T2R Coast Edition poster
                <small>Add coast-poster.png to src/assets/t2r/</small>
              </div>
            )}
            <figcaption>Poster developed by the Nuru Trust communications team.</figcaption>
          </figure>

          <a className="t2r-scroll" href="#sessions" aria-label="Jump to all #T2R sessions">
            <span>All #T2R sessions</span>
            <ChevronDown size={26} />
          </a>
        </div>
      </section>

      <section className="section section--alt" id="sessions">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Session write-ups</span>
            <h2>#T2R sessions held</h2>
            <p>
              Select a session to read its summary and access its outcome
              document.
            </p>
          </div>

          <div className="t2r-list">
            {SESSION_POSTS.map((post, index) => {
              const isOpen = openSession === index;

              return (
                <article
                  className={`t2r-card ${isOpen ? "t2r-card--open" : ""}`}
                  key={post.title}
                >
                  <button
                    type="button"
                    className="t2r-card__toggle"
                    onClick={() => setOpenSession(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="t2r-card__heading">
                      <span className="t2r-card__date">{post.tag}</span>
                      <strong>{post.title}</strong>
                    </span>

                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="t2r-card__content">
                      <p>{post.summary}</p>
                      <p className="t2r-card__outcome">{post.outcome}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="upcoming-notice">
            Upcoming: Nairobi #T2R Edition — date to be confirmed. Further
            sessions will be published here once they have taken place.
          </div>
        </div>
      </section>
    </>
  );
}

export default TalkToYourRegulator;
