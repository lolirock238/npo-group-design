import { useState } from "react";

/**
 * Shows `summary` (short preview) always. `children` (the full text) stays
 * in the DOM at all times — never conditionally unmounted — so it's still
 * crawlable by search engines, but is visually clipped with a max-height
 * + fade until the person clicks "Read more". This satisfies "keep the
 * key message visible, keep full text crawlable for SEO."
 */
function ExpandableText({
  summary,
  children,
  moreLabel = "Read more",
  lessLabel = "Read less",
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="expandable">
      {summary && <p className="expandable__summary">{summary}</p>}
      <div
        className={
          "expandable__full" + (expanded ? " expandable__full--open" : "")
        }
      >
        {children}
        {!expanded && <div className="expandable__fade" aria-hidden="true" />}
      </div>
      <button
        type="button"
        className="expandable__toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </div>
  );
}

export default ExpandableText;
