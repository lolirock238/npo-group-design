import "./KnowledgeHub.css";

const KNOWLEDGE_HUB_URL = "https://cve-hub.example.org/";

function KnowledgeHub() {
  return (
    <div className="hub-callout">
      <span className="eyebrow">Knowledge Hub</span>

      <h3>Kenya Hub for Resilience Against Terrorism &amp; Illicit Finance</h3>

      <p>
        The CVE Hub is being upgraded into the Working Group's knowledge
        repository. Files are maintained there; this page links into it so
        resources are kept in one place.
      </p>

      <a
        className="hub-link"
        href={KNOWLEDGE_HUB_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open the Hub ↗
      </a>
    </div>
  );
}

export default KnowledgeHub;
