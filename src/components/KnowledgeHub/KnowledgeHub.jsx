const KNOWLEDGE_HUB_URL = "https://www.cve-kenya.org/";

function KnowledgeHub() {
  return (
    <div className="hub-callout">
      <div>
        <span className="eyebrow">Knowledge Hub</span>

        <h3>
          Kenya Hub for Resilience Against Terrorism &amp; Illicit Finance
        </h3>

        <p>
          Explore the Working Group's knowledge repository for AML/CFT
          research, publications, guidance and other resources supporting
          Kenya's non-profit sector.
        </p>
      </div>

      <a
        className="btn btn-outline"
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