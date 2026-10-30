import { Mail } from 'lucide-react'
import './SocialLinks.css'

// Simple, minimal glyphs for each platform (lucide-react no longer ships
// trademarked brand/logo icons). Update the hrefs below to the Working
// Group's real handles once confirmed.
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.5" cy="8" r="1.3" fill="currentColor" />
      <rect x="6.5" y="10.5" width="2" height="7" fill="currentColor" />
      <path d="M11 10.5h2v1.1c.5-.8 1.3-1.3 2.4-1.3 2 0 2.9 1.3 2.9 3.4V17.5h-2v-3.3c0-1-.4-1.7-1.4-1.7-.8 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8v3.1h-2V10.5Z" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.6 21v-6.4h2.1l.3-2.5h-2.4V10.5c0-.7.2-1.2 1.2-1.2h1.3V7.1c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3v1.8H8.9v2.5h2.1V21" fill="currentColor" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Update these hrefs to the Working Group's real handles when available.
const LINKS = [
  { label: 'YouTube', href: 'https://www.youtube.com/@kenyafatfnpowg/streams', Icon: YoutubeIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kenya-npo-working-group-on-fatf', Icon: LinkedinIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/kenyafatfnpowg', Icon: FacebookIcon },
  { label: 'X (Twitter)', href: 'https://twitter.com/kenyafatfnpowg', Icon: XIcon },
  { label: 'Email', href: 'mailto:info@kenyafatfnpowg.org', Icon: Mail },
]

function SocialLinks({ variant = 'default' }) {
  return (
    <div className={'social-links social-links--' + variant}>
      {LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          className="social-links__item"
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={label}
          title={label}
        >
          <Icon size={18} strokeWidth={2} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks