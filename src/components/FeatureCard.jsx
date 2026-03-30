import React from "react";
import { Link } from "react-router-dom";

function FeatureCard({
  icon,
  title,
  headline,
  description,
  benefits,
  target,
  link,          // ✅ FIX
  buttonText     // ✅ FIX
}) {
  return (
    <div className="feature-card">

      <div className="card-icon-wrapper">
        {icon}
      </div>

      <div className="target-badge">
        {target}
      </div>

      <h3 className="card-title">
        {title}
      </h3>

      <div className="card-headline">
        {headline}
      </div>

      <p className="card-description">
        {description}
      </p>

      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index}>
            <span className="check-mark">✓</span>
            {benefit}
          </li>
        ))}
      </ul>

      {/* ✅ BUTTON WITH LINK */}
      {link ? (
        <Link to={link}>
          <button className="card-button">
            {buttonText || "Learn More"}
          </button>
        </Link>
      ) : (
        <button className="card-button">
          {buttonText || "Learn More"}
        </button>
      )}

    </div>
  );
}

export default FeatureCard;