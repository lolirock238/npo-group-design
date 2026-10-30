import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Hero from "../components/Hero/Hero.jsx";
import "./Page.css";

const SESSION_POSTS = [
  {
    tag: "19 May 2025",
    title: "Inaugural #T2R session",
    summary: "A summary of this #T2R session will be published here.",
    outcome: "Outcome document — to be added once finalised.",
  },
  {
    tag: "Date to be confirmed",
    title: "Maanzoni #T2R / tri-sector session",
    summary: "A summary of this #T2R session will be published here.",
    outcome: "Outcome document — to be added once finalised.",
  },
  {
    tag: "15 March 2026",
    title: "PBO Week #T2R session",
    summary: "A summary of this #T2R session will be published here.",
    outcome: "Outcome document — to be added once finalised.",
  },
  {
    tag: "Date to be confirmed",
    title: "2nd #T2R Forum — Nairobi",
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
                dialogue platform between NPOs and the institutions that
                regulate them — the Public Benefit Organisations Regulatory
                Authority (PBORA), the Financial Reporting Centre (FRC), the
                Kenya Bankers Association (KBA) and the Business Registration
                Service (BRS). Launched on 19 May 2025, it replaces one-way
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

      <section className="section section--alt">
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
            Additional #T2R sessions will be published here as dates and session
            details are confirmed.
          </div>
        </div>
      </section>
    </>
  );
}

export default TalkToYourRegulator;
