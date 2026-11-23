import { STRATEGIC_PLAN_URL } from "../config.js";
import Hero from "../components/Hero/Hero.jsx";
import Team from "./Team.jsx";
import Partner from "./Partner.jsx";
import "./Page.css";

function About() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="The Working Group"
        subtitle="Mission, vision, history and governance behind Kenya's civil-society response to FATF Recommendation 8."
      />

      {/* Mission, vision, history and governance */}
      <section className="section about-overview">
        <div className="container">
          <div className="role-grid">
            <div className="role-card">
              <h3>Mission</h3>
              <p
                style={{ color: "var(--color-ink-soft)", fontSize: "0.94rem" }}
              >
                To promote risk-based AML/CFT oversight, responsive regulation
                of the NPO sector, and the protection of civic space in Kenya.
              </p>
            </div>

            <div className="role-card">
              <h3>Vision</h3>
              <p
                style={{ color: "var(--color-ink-soft)", fontSize: "0.94rem" }}
              >
                A Kenyan NPO sector that is resilient against
                terrorism-financing abuse and operates in an enabling regulatory
                and financial environment, with civic space protected.
              </p>
            </div>

            <div className="role-card">
              <h3>History</h3>
              <p
                style={{ color: "var(--color-ink-soft)", fontSize: "0.94rem" }}
              >
                Established in 2020, the Working Group brings together 40+ civil
                society organisations. Muslims for Human Rights (MUHURI) hosted
                the Working Group from 2020 to 2024; since 2025 it has been
                hosted by the Centre for Human Rights and Policy Studies
                (CHRIPS), which serves as Secretariat.
              </p>
            </div>

            <div className="role-card">
              <h3>Governance</h3>
              <p
                style={{ color: "var(--color-ink-soft)", fontSize: "0.94rem" }}
              >
                A five-member Steering Committee provides strategic direction.
                Four thematic workstreams, each led by co-chairs (eight in
                total), drive delivery. Work is guided by the Strategic Plan
                2025–2027 and its Strategy Implementation, Collaboration,
                Learning &amp; Adaptation Plan.
              </p>

              <a
                className="panel__link"
                href={STRATEGIC_PLAN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our Strategic Plan 2025–2027 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Working Group members */}
      <Team />

      {/* Partners */}
      <Partner />
    </>
  );
}

export default About;
