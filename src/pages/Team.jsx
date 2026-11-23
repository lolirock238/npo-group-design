import PartnerLogos from "../components/Partner/Partner.jsx";

import article19 from "../assets/members/article19.png";
import chrips from "../assets/members/chrips.jpg";
import cifar from "../assets/members/cifar.jpg";
import creco from "../assets/members/creco.png";
import defenders from "../assets/members/defenders-coalition.png";
import gfi from "../assets/members/gfi.jpeg";
import islamicRelief from "../assets/members/islamic-relief-kenya.png";
import kcjc from "../assets/members/kcjc.png";
import kecosce from "../assets/members/kecosce.jpg";
import madaci from "../assets/members/madaci.jpg";
import manee from "../assets/members/manee.jpg";
import muhuri from "../assets/members/muhuri.jpg";
import nuru from "../assets/members/nuru-trust.png";
import pfh from "../assets/members/partners-for-humanity.png";
import tiKenya from "../assets/members/ti-kenya.png";

// Working Group members, alphabetical. Each logo links to the member's website.
const MEMBERS = [
  { name: "Article 19", logo: article19, url: "https://www.article19.org/" },
  { name: "CHRIPS", logo: chrips, url: "https://chrips.or.ke/" },
  {
    name: "CiFAR (Civil Forum for Asset Recovery)",
    logo: cifar,
    url: "https://cifar.eu/",
  },
  { name: "CRECO Kenya", logo: creco, url: "https://crecokenya.org/" },
  {
    name: "Defenders Coalition",
    logo: defenders,
    url: "https://defenderscoalition.org/",
  },
  {
    name: "Global Financial Integrity (GFI)",
    logo: gfi,
    url: "https://gfintegrity.org/",
  },
  {
    name: "Islamic Relief Kenya",
    logo: islamicRelief,
    url: "https://islamic-relief.or.ke/",
  },
  {
    name: "Kayole Community Justice Centre",
    logo: kcjc,
    url: "https://www.facebook.com/KayoleCJC/",
  },
  { name: "KECOSCE", logo: kecosce, url: "https://kecosce.org/" },
  { name: "MADACI", logo: madaci, url: "https://www.madaci.org/" },
  { name: "MANEE Kenya", logo: manee, url: "https://www.maneekenya.org/" },
  { name: "MUHURI", logo: muhuri, url: "https://muhuri.org/" },
  { name: "Nuru Trust", logo: nuru, url: "https://nurutrust.africa/" },
  {
    name: "Partners for Humanity Foundation",
    logo: pfh,
    url: "https://www.partnersforhumanity.org/",
  },
  {
    name: "Transparency International Kenya",
    logo: tiKenya,
    url: "https://tikenya.org/",
  },
];

const SECRETARIAT = [
  {
    years: "2020 – 2024",
    name: "MUHURI",
    full: "Muslims for Human Rights",
    logo: muhuri,
  },
  {
    years: "2025 – Present",
    name: "CHRIPS",
    full: "Centre for Human Rights and Policy Studies",
    logo: chrips,
  },
];

function Team() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Governance</span>
          <h2>The Team</h2>
        </div>

        <h3 className="team-subhead">Secretariat</h3>
        <ol className="timeline">
          {SECRETARIAT.map((era) => (
            <li className="timeline__item" key={era.name}>
              <span className="timeline__years">{era.years}</span>
              <div className="timeline__card">
                <img src={era.logo} alt={`${era.name} logo`} />
                <div>
                  <strong>{era.name}</strong>
                  <span>{era.full}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="section-head" style={{ marginTop: "2.8rem" }}>
          <span className="eyebrow">Membership</span>
          <h2>Working Group Members</h2>
          <p>
            The Working Group brings together 40+ civil society organisations.
            Select a logo to visit the member's website.
          </p>
        </div>

        <PartnerLogos items={MEMBERS} />
      </div>
    </section>
  );
}

export default Team;
