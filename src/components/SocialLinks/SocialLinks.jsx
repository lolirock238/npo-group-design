import { Mail } from 'lucide-react'
import { EMAIL, SOCIALS } from '../../config.js'
import './SocialLinks.css'

// Simple, minimal glyphs for each platform (lucide-react no longer ships
// trademarked brand/logo icons). Handles are set in src/config.js.
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
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

const LINKS = [
  { label: 'YouTube', href: SOCIALS.youtube, Icon: YoutubeIcon },
  { label: 'X', href: SOCIALS.x, Icon: XIcon },
  { label: 'Facebook', href: SOCIALS.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: SOCIALS.instagram, Icon: InstagramIcon },
  { label: 'Email', href: 'mailto:' + EMAIL, Icon: Mail },
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