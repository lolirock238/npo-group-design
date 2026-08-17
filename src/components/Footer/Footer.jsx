import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="status-ledger footer__status">
          <span className="status-ledger__dot" aria-hidden="true" />
          <div>
            <span className="status-ledger__meta">FATF status · June 2026 plenary</span>
            <p className="status-ledger__text">
              As of the FATF plenary of June 2026, Kenya remains under increased monitoring and
              continues to implement its action plan. A key requirement is revising the framework
              for NPO regulation and oversight so that mitigating measures are risk-based and do
              not disrupt or discourage legitimate non-profit activity — the core of the Working
              Group's advocacy.
            </p>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <span className="navbar__brand-mark footer__mark">KWG</span>
            <p className="footer__blurb">
              A network of 40+ civil society organisations promoting risk-based AML/CFT oversight,
              responsive regulation of the NPO sector, and the protection of civic space in Kenya.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigate</h4>
            <ul className="footer__list">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/focus">Focus Areas</NavLink></li>
              <li><NavLink to="/talk-to-your-regulator">Talk To Your Regulator</NavLink></li>
              <li><NavLink to="/resources">Resources</NavLink></li>
              <li><NavLink to="/media">Media</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <ul className="footer__list">
              <li>
                <a href="https://www.youtube.com/@kenyafatfnpowg/streams" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li><a href="mailto:info@kenyafatfnpowg.org">info@kenyafatfnpowg.org</a></li>
              <li><NavLink to="/contact">Join the Working Group</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2020–2026 Kenya NPO Working Group on FATF · Hosted by CHRIPS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
