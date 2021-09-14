import React from "react";
import "./skewed-card.css";

export function SkewedCard({
  cardText,
  cardLink,
  imageUrl,
  containerClassName,
  imageClassName,
  horizontalImage,
}) {
  const imageClasses = horizontalImage
    ? "skewed-card_image--horizontal"
    : "skewed-card_image";

  return (
    <a href={cardLink} className={`skewed-card ${containerClassName || ""}`}>
      <div className="skewed-card_content-container">
        <img
          className={`${imageClasses} ${imageClassName || ""}`}
          src={imageUrl}
        />
        <div className="skewed-card_text-container">
          <h3 className="skewed-card_text">{cardText}</h3>
        </div>
      </div>
    </a>
  );
}
