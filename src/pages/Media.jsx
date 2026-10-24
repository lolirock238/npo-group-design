import Hero from '../components/Hero/Hero.jsx'
import { NewsList, GalleryGrid } from '../components/Media/Media.jsx'
import './Page.css'
import './Media.css'

const NEWS_LINKS = [
  {
    source: 'ISS Africa',
    title: "Risk and reward of Kenya's push to reverse FATF grey-listing",
    href: 'https://issafrica.org/iss-today/risk-and-reward-of-kenya-s-push-to-reverse-fatf-grey-listing',
    date: '30 September 2025',
  },
  {
    source: 'PBORA',
    title: 'TI-Kenya & PBORA strengthen collaboration on AML/CFT guidance for the NPO sector',
    href: 'https://pbora.go.ke/ti-kenya-pbora-strengthen-collaboration-amlcft-guidance-npo-sector',
  },
]

const GALLERIES = [
  'Launch of Talk to Your Regulator',
  'Launch of Strategy 2025–2027',
  'Working Group Meetings — June 2025, December 2025, March 2026, June 2026',
  'PBO Week — 15 March 2026',
  'CFT Sensitisation Outreach Forums (8) — Mombasa, Kwale, Kilifi, Kisumu, Uasin Gishu, Nakuru, Nairobi, Garissa',
  'Annual High-Level Civil Society AML/CFT Conference — 2024, 2025, 2026',
]

function Media() {
  return (
    <>
      <Hero
        eyebrow="Media"
        title="News, video & galleries"
        subtitle="Press coverage, the Working Group's YouTube channel, and photo galleries from our events."
      />

      {/* 8.1 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">In the news</span>
            <h2>External coverage</h2>
          </div>
          <NewsList items={NEWS_LINKS} />
        </div>
      </section>

      {/* 8.2 */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Video</span>
            <h2>YouTube</h2>
            <p>Recent livestreams from the Kenya FATF NPO WG channel.</p>
          </div>
          <div className="media-video-embed">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=kenyafatfnpowg"
              title="Kenya FATF NPO WG channel"
              allowFullScreen
            />
          </div>
          <div className="section-foot">
            <a className="panel__link" href="https://www.youtube.com/@kenyafatfnpowg/streams" target="_blank" rel="noopener noreferrer">
              Visit the channel ↗
            </a>
          </div>
        </div>
      </section>

      {/* 8.3 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Photo galleries</span>
            <h2>From our events</h2>
          </div>
          <GalleryGrid items={GALLERIES} />
        </div>
      </section>
    </>
  )
}

export default Media
