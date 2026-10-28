import PartnerLogos from "../components/Partner/Partner.jsx";

const PARTNERS = [
  "Civic Advisory Hub",
  "CSO Coalition on Human Rights and Counter-Terrorism",
  "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
  "Ford Foundation",
  "Fund for Global Human Rights",
  "Global NPO Coalition on FATF",
  "Human Security Collective",
  "International Centre for Not-for-Profit Law (ICNL)",
  "Public Benefit Organisations Regulatory Authority (PBORA)",
  "Spaces for Change",
];

function Partner() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Partners</span>
          <h2>Working with us</h2>
        </div>

        <PartnerLogos items={PARTNERS} />
      </div>
    </section>
  );
}

export default Partner;
