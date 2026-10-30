import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero.jsx";
import ExpandableText from "../components/ExpandableText/ExpandableText.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks.jsx";
import "./Page.css";

import hero1 from "../assets/hero/hero-1.png";
import hero2 from "../assets/hero/hero-2.png";
import hero3 from "../assets/hero/hero-3.png";
import hero4 from "../assets/hero/hero-4.png";
import hero5 from "../assets/hero/hero-5.png";

const SLIDES = [
  {
    image: hero1,
    imageLabel: "Members / group photo",
    caption: "Risk-based AML/CFT oversight. Protected civic space.",
    buttonLabel: "About Us",
    buttonTo: "/about",
  },
  {
    image: hero2,
    imageLabel: "Talk to Your Regulator session",
    caption: "Structured dialogue between NPOs and their regulators.",
    buttonLabel: "Talk to Your Regulator",
    buttonTo: "/talk-to-your-regulator",
  },
  {
    image: hero3,
    imageLabel: "High-Level Conference",
    caption: "Sharing Kenya's model across Africa.",
    buttonLabel: "Media",
    buttonTo: "/media",
  },
  {
    image: hero4,
    imageLabel: "County outreach forum",
    caption: "CFT sensitisation across eight counties.",
    buttonLabel: "Focus Areas",
    buttonTo: "/focus",
  },
  {
    image: hero5,
    imageLabel: "Strategy launch",
    caption: "Our roadmap to 2027.",
    buttonLabel: "Resources",
    buttonTo: "/resources",
  },
];

const KEY_ISSUES = [
  {
    title: "Over-regulation",
    body: "Rules that go beyond the actual risk — blanket documentation, registration and reporting demands that burden legitimate NPOs and shrink civic space, often without improving AML/CFT outcomes.",
    href: "https://fatfplatform.org/issues/over-regulation/",
  },
  {
    title: "De-risking & financial access",
    body: "Banks restricting or closing NPO accounts to avoid perceived risk rather than managing it — causing delayed or blocked transfers, especially for cross-border and humanitarian funds.",
    href: "https://fatfplatform.org/issues/over-regulation-2/",
  },
  {
    title: "Sector involvement in national risk assessments",
    body: "NPOs must be consulted in the risk assessments that shape their oversight, so measures are evidence-based and proportionate — and emerging issues are surfaced early.",
    href: "https://fatfplatform.org/issues/over-regulation-3/",
  },
];

const NEWS_TEASERS = [
  {
    meta: "30 Sep 2025 · ISS Africa",
    title: "Risk and reward of Kenya's push to reverse FATF grey-listing",
    href: "https://issafrica.org/iss-today/risk-and-reward-of-kenya-s-push-to-reverse-fatf-grey-listing",
  },
  {
    meta: "PBORA",
    title:
      "TI-Kenya & PBORA strengthen collaboration on AML/CFT guidance for the NPO sector",
    href: "https://pbora.go.ke/ti-kenya-pbora-strengthen-collaboration-amlcft-guidance-npo-sector",
  },
  {
    meta: "YouTube",
    title: "Kenya FATF NPO WG channel — recent livestreams",
    href: "https://www.youtube.com/@kenyafatfnpowg/streams",
  },
];

const FAQS = [
  {
    q: "What is the FATF?",
    a: "The Financial Action Task Force — the global standard-setter for anti-money-laundering and counter-terrorist-financing (AML/CFT).",
  },
  {
    q: "What is Recommendation 8?",
    a: "The FATF standard on NPOs. Revised in 2016 and 2023, it requires focused, proportionate, risk-based oversight applied only to a subset of NPOs, without disrupting legitimate activity.",
  },
  {
    q: "Is Kenya on the FATF grey list?",
    a: "Yes. Kenya was grey-listed in February 2024 and, as of the June 2026 plenary, remains under increased monitoring while it completes its action plan.",
  },
  {
    q: "Does grey-listing mean NPOs must report to the FRC?",
    a: "No. A 2025 POCAMLA amendment removed NPOs from the list of 'reporting institutions'. POTA obligations remain, alongside a voluntary FRC disclosure channel.",
  },
];

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="faq-item" key={item.q}>
            <button
              type="button"
              className="faq-item__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              {item.q}
              <span className="faq-item__icon">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && <p className="faq-item__answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

function Home() {
  const [newsIndex, setNewsIndex] = useState(0);

  const showPreviousNews = () => {
    setNewsIndex(
      (current) => (current - 1 + NEWS_TEASERS.length) % NEWS_TEASERS.length,
    );
  };

  const showNextNews = () => {
    setNewsIndex((current) => (current + 1) % NEWS_TEASERS.length);
  };

  const currentNews = NEWS_TEASERS[newsIndex];

  return (
    <>
      <Hero slides={SLIDES} />

      {/* What is the FATF? */}
      <section className="section">
        <div className="container">
          <div className="panel">
            <h2>What is the FATF, and how does it affect NPOs?</h2>

            <div className="panel__body">
              <ExpandableText summary="The Financial Action Task Force (FATF) sets global standards for anti-money-laundering and countering the financing of terrorism (AML/CFT). Recommendation 8 guides how countries oversee non-profit organisations.">
                <p>
                  For years, Recommendation 8 was applied as though every NPO
                  were high-risk. That drove blanket restrictions, bank
                  de-risking, financial exclusion, and the misuse of
                  counter-terrorism justifications to shrink civic space.
                </p>

                <p>
                  Revisions in 2016 and 2023 corrected course: oversight must be
                  focused, proportionate and risk-based, applied only to the
                  subset of organisations within the FATF definition of an NPO,
                  and must not disrupt legitimate activity.
                </p>

                <p>
                  Kenya was grey-listed by the FATF in February 2024, and
                  exiting the grey list is a national priority. Kenya's
                  NPO-sector risk assessment in 2024 rated the sector's
                  terrorism-financing risk low–medium. The Working Group works
                  to address the gap between that risk profile and
                  disproportionate compliance pressure.
                </p>

                <div className="infographic-note">
                  <strong>Infographic specification (for consultant)</strong>
                  <p>
                    FATF (40 Recommendations) → Recommendation 8 (NPOs) →
                    Risk-based approach (only FATF-defined NPOs) → Kenya action
                    plan (revise NPO oversight) → Exit grey list.
                  </p>
                  <p>
                    Timeline: 2016 Recommendation 8 revised; 2023 updated;
                    February 2024 Kenya grey-listed; 2024 NPO risk assessment
                    rated low–medium; 2025 POCAMLA amendment; June 2026 still
                    grey-listed.
                  </p>
                </div>

                <p>Learn more from the FATF Platform:</p>

                <p>
                  <a
                    className="panel__link"
                    href="https://fatfplatform.org/context/fatf-explained/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FATF Explained ↗
                  </a>
                </p>

                <p>
                  <a
                    className="panel__link"
                    href="https://fatfplatform.org/context/fatf-and-npos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FATF and NPOs ↗
                  </a>
                </p>
              </ExpandableText>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section section--alt">
        <div className="container">
          <div className="panel">
            <h2>What We Do and How We Work</h2>

            <div className="panel__body">
              <ExpandableText summary="The Kenya NPO Working Group on FATF is a network of 40+ civil society organisations established in 2020. We promote risk-based AML/CFT oversight, responsive regulation of the NPO sector, and the protection of civic space.">
                <p>
                  From June 2025, the Working Group has been hosted by the
                  Centre for Human Rights and Policy Studies (CHRIPS). Muslims
                  for Human Rights (MUHURI) hosted the Working Group from
                  2020–2025.
                </p>

                <p>
                  We work through four thematic workstreams — Awareness &amp;
                  Resilience; Multistakeholder Collaboration &amp; Advocacy;
                  Financial Inclusion; and Research &amp; Learning — guided by a
                  five-member Steering Committee and eight workstream co-chairs.
                </p>

                <p>
                  The Working Group is guided by a Strategic Plan, 2025–2027,
                  and a Strategy Implementation, Collaboration, Learning &amp;
                  Adaptation Plan that keeps our work evidence-led.
                </p>

                <div className="infographic-note">
                  <strong>Infographic specification (for consultant)</strong>
                  <p>
                    Steering Committee → Secretariat (CHRIPS) → four workstreams
                    → 40+ members, with the Advisory Group to one side and
                    external partners (PBORA, FRC, KBA, BRS) connected through
                    Talk to Your Regulator and the tri-sector group.
                  </p>
                </div>
              </ExpandableText>
            </div>

            <div className="section-foot">
              <Link className="panel__link" to="/knowledgeHub">
                Read our Strategy Plan 2025–2027 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Risk-based approach */}
      <section className="section">
        <div className="container">
          <div className="panel">
            <h2>The risk-based approach</h2>

            <div className="panel__body">
              <ExpandableText summary="A risk-based approach means oversight should match the actual terrorism-financing risk an organisation poses, using evidence rather than assumptions.">
                <p>
                  Not all NPOs carry the same risk; most carry little or none.
                  Kenya's NPO-sector TF Risk Assessment rated the sector
                  low–medium, so oversight should reflect that profile rather
                  than treat every organisation as a threat.
                </p>

                <p>
                  One-size-fits-all regulation harms the sector and can
                  undermine the state's own objectives. Blanket rules encourage
                  banks to de-risk and close NPO accounts, restrict legitimate
                  funding, and impose disproportionate compliance costs on
                  smaller organisations.
                </p>

                <p>
                  These measures can also chill freedoms of association and
                  expression. They weaken AML/CFT efforts by spreading limited
                  supervisory resources across low-risk organisations instead of
                  focusing on areas of genuine risk.
                </p>
              </ExpandableText>
            </div>

            <a
              className="panel__link"
              href="https://fatfplatform.org/risk-based-approach/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Coalition's Risk-Based Approach page ↗
            </a>
          </div>
        </div>
      </section>

      {/* Key issues */}
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

                <a
                  className="panel__link"
                  href={issue.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News carousel */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Media</span>
            <h2>Latest News</h2>
          </div>

          <div
            className="news-carousel"
            aria-roledescription="carousel"
            aria-label="Latest news"
          >
            <button
              type="button"
              className="news-carousel__arrow news-carousel__arrow--prev"
              onClick={showPreviousNews}
              aria-label="Previous news article"
            >
              &#8249;
            </button>

            <div className="news-carousel__track" aria-live="polite">
              <div className="news-carousel__slide">
                <article className="news-card" key={currentNews.title}>
                  <span className="news-card__meta">{currentNews.meta}</span>

                  <h3>{currentNews.title}</h3>

                  <a
                    href={currentNews.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read article ↗
                  </a>
                </article>
              </div>
            </div>

            <button
              type="button"
              className="news-carousel__arrow news-carousel__arrow--next"
              onClick={showNextNews}
              aria-label="Next news article"
            >
              &#8250;
            </button>

            <div
              className="news-carousel__dots"
              aria-label="Choose a news article"
            >
              {NEWS_TEASERS.map((news, index) => (
                <button
                  key={news.title}
                  type="button"
                  className={
                    "news-carousel__dot" +
                    (newsIndex === index ? " news-carousel__dot--active" : "")
                  }
                  onClick={() => setNewsIndex(index)}
                  aria-label={`Show article ${index + 1}: ${news.title}`}
                  aria-current={newsIndex === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          <div className="section-foot">
            <Link className="panel__link" to="/media">
              View all news →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section--alt" id="faqs">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
          </div>

          <FaqAccordion items={FAQS} />

          <div className="section-foot">
            <Link className="panel__link" to="/#faqs">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact and social media */}
      <section className="section" style={{ borderBottom: "none" }}>
        <div className="container">
          <div className="contact-block">
            <div>
              <h2>Get in touch</h2>
              <p>
                <a href="mailto:info@kenyafatfnpowg.org">
                  info@kenyafatfnpowg.org
                </a>
              </p>
            </div>

            <div className="contact-block__actions">
              <Link to="/contact" className="btn btn-primary">
                Contact us
              </Link>

              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
