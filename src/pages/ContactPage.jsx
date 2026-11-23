import { EMAIL, SOCIALS, MEMBERSHIP_FORM_URL } from '../config.js'
import Hero from '../components/Hero/Hero.jsx'
import Contact from '../components/Contact/Contact.jsx'
import './Page.css'

function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Reach the Secretariat, join the Working Group, or explore a partnership."
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <Contact />
          </div>

          <div>
            <div className="info-block">
              <h3>Contact details</h3>
              <p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
              <ul className="contact-socials">
                <li><a href={SOCIALS.x} target="_blank" rel="noopener noreferrer">X ↗</a></li>
                <li><a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a></li>
                <li><a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
                <li><a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a></li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Join the Working Group</h3>
              <p>
                Open to civil society organisations working on, or affected by, AML/CFT oversight
                of the NPO sector in Kenya. Every member joins at least one workstream. Submit a
                short membership application using the online form and a member of the Secretariat will
                follow up.
              </p>
              <p>
                <a
                  className="btn btn-primary"
                  href={MEMBERSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the membership form ↗
                </a>
              </p>
              <ul className="workstream-tags">
                <li>Awareness & Resilience</li>
                <li>Multistakeholder Collaboration</li>
                <li>Financial Inclusion</li>
                <li>Research & Learning</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Partner with us</h3>
              <p>
                We collaborate with regulators, financial institutions, funders and civil society
                partners — drawing on our track record in the grey-list response, RBOM
                co-development, #T2R and tri-sector work. See our current partners on the{' '}
                <a href="/about">About</a> page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
