import React from "react";

import "./FooterLinksMobileFaleConosco.css";

const FooterLinksMobileFaleConosco = () => {
  return (
    <ul className="footer-mobile-faleconosco-links-items-list">
      <li className="footer-mobile-faleconosco-links-item">
        <span className="footer-mobile-faleconosco-links-span">
          ATENDIMENTO AO CONSUMIDOR
        </span>
      </li>
      <li className="footer-mobile-faleconosco-links-item">
        <a
          className="footer-mobile-faleconosco-links-link"
          href="tel:1141599504"
        >
          (11) 4159 9504
        </a>
      </li>
      <li className="footer-mobile-faleconosco-links-item">
        <span className="footer-mobile-faleconosco-links-span">
          ATENDIMENTO ONLINE
        </span>
      </li>
      <li className="footer-mobile-faleconosco-links-item">
        <a
          className="footer-mobile-faleconosco-links-link"
          href="tel:5511994338825"
        >
          (11) 99433-8825
        </a>
      </li>
    </ul>
  );
};

export { FooterLinksMobileFaleConosco };
