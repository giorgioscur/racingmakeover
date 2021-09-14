import React from "react";
import "./skewed-text-card.css";

export function SkewedTextCard({ text, alignLeft }) {
  const textClass = alignLeft
    ? "skewed-text-card_align-left"
    : "skewed-text-card_text";

  return (
    <div className="skewed-text-card_container">
      <h1 className={textClass}>{text}</h1>
    </div>
  );
}
