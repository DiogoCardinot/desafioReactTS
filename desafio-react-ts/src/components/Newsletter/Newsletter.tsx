import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter">
        <h2 className="newsletter-title">ASSINE NOSSA NEWSLETTER</h2>
        <div className="newsletter-content">
          <input
            className="newsletter-input"
            type="email"
            placeholder="E-mail"
          />
          <button className="newsletter-button"> ENVIAR</button>
        </div>
      </div>
    </div>
  );
};

export { Newsletter };
