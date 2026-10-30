import PartnerLogos from "../components/Partner/Partner.jsx";

import chripsLogo from "../assets/partners/CHRIPS Logo (3).jpg";
import cifarLogo from "../assets/partners/CiFAR logo.jpg";
import crecoLogo from "../assets/partners/CRECO KENYA LOGO .png";
import gfiLogo from "../assets/partners/GFI logo Png.jpeg";
import gizLogo from "../assets/partners/GIZ.png";
import kecosceLogo from "../assets/partners/KECOSCE JPEG LOGO.jpg";
import madaciLogo from "../assets/partners/MADACI.jpg";
import maneeLogo from "../assets/partners/MANEE LOGO 1.jpg";
import muhuriLogo from "../assets/partners/MUHURI LOGO-1.jpg";
import nuruLogo from "../assets/partners/Nuru Logo PNG.png";

const PARTNERS = [
  { name: "CHRIPS", logo: chripsLogo },
  { name: "CiFAR", logo: cifarLogo },
  { name: "CRECO Kenya", logo: crecoLogo },
  { name: "GFI", logo: gfiLogo },
  { name: "GIZ", logo: gizLogo },
  { name: "KECOSCE", logo: kecosceLogo },
  { name: "MADACI", logo: madaciLogo },
  { name: "MANEE", logo: maneeLogo },
  { name: "MUHURI", logo: muhuriLogo },
  { name: "Nuru", logo: nuruLogo },
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
