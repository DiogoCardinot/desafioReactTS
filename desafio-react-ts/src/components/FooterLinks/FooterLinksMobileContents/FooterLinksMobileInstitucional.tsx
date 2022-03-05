import React from "react";

import "./FooterLinksMobileInstitucional.css";

const FooterLinksMobileInstitucional = () => {
  return (
    <ul className="footer-mobile-institucional-links-items-list">
      <li className="footer-mobile-institucional-links-item">
        <a className="footer-mobile-institucional-links-link" href="/">
          QUEM SOMOS
        </a>
      </li>
      <li className="footer-mobile-institucional-links-item">
        <a className="footer-mobile-institucional-links-link" href="/">
          POLÍTICA DE PRIVACIDADE
        </a>
      </li>
      <li className="footer-mobile-institucional-links-item">
        <a className="footer-mobile-institucional-links-link" href="/">
          SEGURANÇA
        </a>
      </li>
      <li className="footer-mobile-institucional-links-item">
        <u className="footer-mobile-institucional-links-u">SEJA UM VENDEDOR</u>
      </li>
    </ul>
  );
};

export { FooterLinksMobileInstitucional };
