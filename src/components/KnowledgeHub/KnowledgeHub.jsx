import "./KnowledgeHub.css";

import { KNOWLEDGE_HUB_URL } from "../../config.js";

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

      {KNOWLEDGE_HUB_URL ? (
        <a
          className="hub-link"
          href={KNOWLEDGE_HUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the Hub ↗
        </a>
      ) : (
        <span className="hub-link hub-link--soon">Hub link coming soon</span>
      )}
    </div>
  );
}

export default KnowledgeHub;
