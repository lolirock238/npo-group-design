import { useState } from "react";
import {
  ShieldCheck,
  Handshake,
  Wallet,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "./FocusAreas.css";

const AREA_ICONS = {
  "Awareness and Resilience": ShieldCheck,
  "Multistakeholder Collaboration and Advocacy": Handshake,
  "Financial Inclusion": Wallet,
  "Research & Learning": BookOpen,
};

const AREA_COLORS = {
  "Awareness and Resilience": "focus-card--green",
  "Multistakeholder Collaboration and Advocacy": "focus-card--orange",
  "Financial Inclusion": "focus-card--blue",
  "Research & Learning": "focus-card--purple",
};

function FocusAreas({ area }) {
  const [expanded, setExpanded] = useState(false);

  const { label, title, context, objectives, completed, ongoing, comingUp } =
    area;

  const Icon = AREA_ICONS[title] || ShieldCheck;
  const cardId = `focus-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <article
      className={`focus-card ${AREA_COLORS[title] || ""} ${
        expanded ? "focus-card--expanded" : ""
      }`}
    >
      <div className="focus-card__head">
        <div className="focus-card__top">
          <span className="focus-card__icon" aria-hidden="true">
            <Icon size={30} strokeWidth={1.8} />
          </span>
          <span className="focus-card__label">{label}</span>
        </div>

        <h2>{title}</h2>
        <p>{context}</p>

        <button
          type="button"
          className="focus-card__read-more"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
          aria-controls={cardId}
        >
          {expanded ? "Read less" : "Read more"}
          {expanded ? (
            <ChevronUp size={16} aria-hidden="true" />
          ) : (
            <ChevronDown size={16} aria-hidden="true" />
          )}
        </button>
      </div>

      {expanded && (
        <div className="focus-card__body" id={cardId}>
          <h4>Objectives</h4>
          <ul>
            {objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>

          {completed?.length > 0 && (
            <>
              <h4>Completed activities</h4>
              {completed.map((activity) => (
                <div className="focus-activity" key={activity.title}>
                  <strong>{activity.title}</strong>
                  <p>{activity.body}</p>
                </div>
              ))}
            </>
          )}

          {ongoing?.length > 0 && (
            <>
              <h4>Ongoing activities</h4>
              {ongoing.map((activity) => (
                <div className="focus-activity" key={activity.title}>
                  <strong>{activity.title}</strong>
                  <p>{activity.body}</p>
                </div>
              ))}
            </>
          )}

          {comingUp && (
            <p className="focus-comingup">
              <strong>Coming up:</strong> {comingUp}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export default FocusAreas;
