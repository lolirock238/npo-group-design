import PartnerLogos from "../components/Partner/Partner.jsx";
import gizLogo from "../assets/partners/giz.png";
import iclLogo from "../assets/partners/icl.png";

// Donors and funders only. Working Group members live under About > Membership.
// TODO: add the ICL logo (src/assets/partners/) and set it as `logo` below.
const PARTNERS = [
  { name: "GIZ", logo: gizLogo, url: "https://www.giz.de/en" },
  { name: "ICL", logo: iclLogo, url: "https://ichooselife.global/" },
];

function Partner() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h2>Our donors and funders</h2>
        </div>

        <PartnerLogos items={PARTNERS} />
      </div>
    </section>
  );
}

export default Partner;
