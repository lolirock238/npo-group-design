
import { useState } from "react";

export default function ExpandableText({
  summary,
  children,
  moreLabel = "Read more",
  lessLabel = "Read less",
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="expandable-text">
      <p className="expandable-text__summary">{summary}</p>

      {expanded && (
        <div className="expandable-text__content">
          {children}
        </div>
      )}

      <button
        type="button"
        className="expandable-text__link"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? lessLabel : moreLabel}
        <span aria-hidden="true">
          {expanded ? " ↑" : " →"}
        </span>
      </button>
    </div>
  );
}
