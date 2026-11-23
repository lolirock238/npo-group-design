
import { YOUTUBE_STREAMS } from "../config.js";
import Hero from "../components/Hero/Hero.jsx";
import pboraLogo from "../assets/media/pbora-logo.png";
import {
  NewsList,
  GalleryGrid,
  VideoGrid,
} from "../components/Media/Media.jsx";

import media1 from "../assets/media/media-1.png";
import media2 from "../assets/media/media-2.png";
import media3 from "../assets/media/media-3.png";
import media4 from "../assets/media/media-4.png";
import media5 from "../assets/media/media-5.png";
import media6 from "../assets/media/media-6.png";

import "./Page.css";
import "./Media.css";

// Existing article URLs preserved.
const NEWS_LINKS = [
  {
    source: "ISS Africa",
    title: "Risk and reward of Kenya's push to reverse FATF grey-listing",
    href: "https://issafrica.org/iss-today/risk-and-reward-of-kenya-s-push-to-reverse-fatf-grey-listing",
    image:
      "https://res.cloudinary.com/devex/image/fetch/ar_1:1,b_transparent,c_pad,f_auto,q_auto,w_320/https://neo-assets.s3.amazonaws.com/assets/0122/1481/ISS.jpg",
    date: "30 September 2025",
  },
  {
    source: "PBORA",
    title:
      "TI-Kenya & PBORA strengthen collaboration on AML/CFT guidance for the NPO sector",
    href: "https://pbora.go.ke/ti-kenya-pbora-strengthen-collaboration-amlcft-guidance-npo-sector",
    image: pboraLogo,
  },
];

// Gallery titles and descriptions preserved.
const GALLERIES = [
  // Captions re-matched to the photos: media-6 shows the #T2R banner and
  // media-3 the Strategic Plan handover. TODO: confirm media-1 / media-2
  // captions against the original photo captions.
  {
    title: "Launch of Talk to Your Regulator",
    image: media6,
  },
  {
    title: "Launch of the Strategic Plan 2025–2027",
    image: media3,
  },
  {
    title:
      "Working Group Meetings — June 2025, December 2025, March 2026, June 2026",
    image: media2,
  },
  {
    title: "PBO Week — 15 April 2026",
    image: media4,
  },
  {
    title: "CFT Sensitisation Outreach Forums",
    description:
      "Mombasa, Kwale, Kilifi, Kisumu, Uasin Gishu, Nakuru, Nairobi and Garissa",
    image: media5,
  },
  {
    title: "Annual High-Level Civil Society AML/CFT Conference",
    description: "2024, 2025 and 2026",
    image: media1,
  },
];

// Strategy Launch is included automatically by VideoGrid.
const VIDEOS = [];

function Media() {
  return (
    <>
      <Hero
        eyebrow="Media"
        title="News, video & galleries"
        subtitle="Press coverage, video highlights, and photos from our events."
      />

      {/* Photo galleries first */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Event highlights</span>
            <h2>From our events</h2>
          </div>

          <GalleryGrid items={GALLERIES} />
        </div>
      </section>

      {/* External coverage */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">In the news</span>
            <h2>External coverage</h2>
            <p>
              Read coverage and updates from our partners and media outlets.
            </p>
          </div>

          <NewsList items={NEWS_LINKS} />
        </div>
      </section>

      {/* Compact video section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Video highlights</span>
            <h2>Watch our events</h2>
            <p>
              Recordings and highlights from the Kenya NPO Working Group on the FATF.
            </p>
          </div>

          <VideoGrid items={VIDEOS} />

          <div className="section-foot">
            <a
              className="panel__link"
              href={YOUTUBE_STREAMS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the YouTube channel ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Media;
