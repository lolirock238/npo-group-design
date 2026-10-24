import PartnerLogos from '../components/Partner/Partner.jsx'

const PARTNERS = [
  'Global NPO Coalition on FATF',
  'CSO Coalition on Human Rights and Counter-Terrorism',
  'Human Security Collective',
  'International Centre for Not-for-Profit Law (ICNL)',
  'Fund for Global Human Rights',
  'Spaces for Change',
  'Civic Advisory Hub',
  'Public Benefit Organisations Regulatory Authority (PBORA)',
  'GIZ',
  'Ford Foundation',
]

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
  )
}

export default Partner
