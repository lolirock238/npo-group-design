import PartnerLogos from "../components/Partner/Partner.jsx";

const PARTNERS = [
  { name: "Global NPO Coalition on FATF", image: "global-npo-coalition.png" },
  {
    name: "CSO Coalition on Human Rights and Counter-Terrorism",
    image: "cso-coalition.png",
  },
  { name: "Human Security Collective", image: "human-security-collective.png" },
  {
    name: "International Centre for Not-for-Profit Law (ICNL)",
    image: "incl.png",
  },
  {
    name: "Fund for Global Human Rights",
    image: "fund-for-global-human-rights.png",
  },
  { name: "Spaces for Change", image: "spaces-for-change.png" },
  { name: "Civic Advisory Hub", image: "civic-advisory-hub.png" },
  {
    name: "Public Benefit Organisations Regulatory Authority (PBORA)",
    image: "pbora.png",
  },
  {
    name: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
    image: "giz.png",
  },
  { name: "Ford Foundation", image: "ford-foundation.png" },
];

// 3.5 Partners
function Partner() {
  return (
    <div className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h2>Working with us</h2>
        </div>
        <PartnerLogos items={PARTNERS} />
      </div>
    </div>
  );
}

export default Partner;
