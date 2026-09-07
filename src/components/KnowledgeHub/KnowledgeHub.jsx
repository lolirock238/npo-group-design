import './KnowledgeHub.css'

const KNOWLEDGE_HUB_URL = 'https://cve-hub.example.org'

// Section 6: the Knowledge Hub nav tab is an external link to the CVE Hub.
// To avoid overlap with /resources, the Hub is the front-end library where
// files live; /resources links into it so files stay in one place.
function KnowledgeHub() {
  return (
    <div className="hub-callout">
      <div>
        <span className="eyebrow">Knowledge Hub</span>
        <h3>Kenya Hub for Resilience Against Terrorism &amp; Illicit Finance</h3>
        <p>
          The CVE Hub is being upgraded into the Working Group's knowledge repository. Files are
          maintained there; this page links into it so resources are kept in one place.
        </p>
      </div>
      <a className="btn btn-outline" href={KNOWLEDGE_HUB_URL} target="_blank" rel="noopener noreferrer">
        Open the Hub ↗
      </a>
    </div>
  )
}

export default KnowledgeHub
