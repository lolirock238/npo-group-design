import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import npoLogo from '../../assets/npo-logo.png'
import './Navbar.css'

const KNOWLEDGE_HUB_URL = 'https://cve-hub.example.org' // placeholder for the CVE / Knowledge Hub external link 
 
function Navbar() { 
  const [open, setOpen] = useState(false) 
 
  const navLinkClass = ({ isActive }) => 'navbar__link' + (isActive ? ' navbar__link--active' : '') 
 
  return ( 
    <header className="navbar"> 
      <div className="navbar__inner container"> 
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}> 
          <img src={npoLogo} alt="Kenya NPO Working Group logo" className="navbar__logo" />
          
        </NavLink> 
 
        <button 
          className="navbar__toggle" 
          aria-label={open ? 'Close menu' : 'Open menu'} 
          aria-expanded={open} 
          onClick={() => setOpen((v) => !v)} 
        > 
          <span /> 
          <span /> 
          <span /> 
        </button> 
 
        <nav className={'navbar__nav' + (open ? ' navbar__nav--open' : '')}> 
          <NavLink to="/" end className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink> 
          <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink> 
          <NavLink to="/focus" className={navLinkClass} onClick={() => setOpen(false)}>Focus Areas</NavLink> 
          <NavLink to="/talk-to-your-regulator" className={navLinkClass} onClick={() => setOpen(false)}>Talk To Your Regulator</NavLink> 
          <a 
            href={KNOWLEDGE_HUB_URL} 
            className="navbar__link" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            Knowledge Hub ↗ 
          </a> 
          <NavLink to="/resources" className={navLinkClass} onClick={() => setOpen(false)}>Resources</NavLink> 
          <NavLink to="/media" className={navLinkClass} onClick={() => setOpen(false)}>Media</NavLink> 
          <NavLink to="/contact" className="navbar__cta" onClick={() => setOpen(false)}>Contact</NavLink> 
        </nav> 
      </div> 
    </header> 
  ) 
} 
 
export default Navbar