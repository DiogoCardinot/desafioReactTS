import React from "react";

import "./FooterMobile.css";

import MasterCardIconMobile from "../../assets/images/master-card-icon-mobile.png";
import VisaIconMobile from "../../assets/images/visa-icon-mobile.png";
import AmericanExpressIconMobile from "../../assets/images/diners-icon-mobile.png";
import EloIconMobile from "../../assets/images/elo-icon-mobile.png";
import HipercardIconMobile from "../../assets/images/hipercard-icon-mobile.png";
import PaypalIconMobile from "../../assets/images/paypal-icon-mobile.png";
import BoletoIconMobile from "../../assets/images/boleto-icon-mobile.png";
import VtexSeloIconMobile from "../../assets/images/vtex-selo-icon-mobile.png";
import LogoVtexMobile from "../../assets/images/vtex-icon-mobile.png";
import LogoM3Mobile from "../../assets/images/logom3-icon-mobile.png";

const FooterMobile = () => {
  return (
    <div className="footer-mobile-wrapper">
      <div className="footer-mobile-payment-trust-icons">
        <ul className="footer-mobile-payment-icons">
          <li className="footer-mobile-payment-icon">
            <img src={MasterCardIconMobile} alt="MasterCard Icon" />
          </li>
          <li className="footer-mobile-payment-icon">
            <img src={VisaIconMobile} alt="Visa Icon" />
          </li>
          <li className="footer-mobile-payment-icon">
            <img src={AmericanExpressIconMobile} alt="AmericanExpress Icon" />
          </li>
          <li className="footer-mobile-payment-icon">
            <img src={EloIconMobile} alt="Elo Icon" />
          </li>
          <li className="footer-mobile-payment-icon">
            <img src={HipercardIconMobile} alt="HiperCard Icon" />
          </li>
          <li className="footer-mobile-payment-icon">
            <img src={PaypalIconMobile} alt="PayPal Icon" />
          </li>
          <li className="footer-mobile-payment-icon">
            <img src={BoletoIconMobile} alt="Boleto Icon" />
          </li>
        </ul>
        <ul className="footer-mobile-trust-icons">
          <li className="footer-mobile-trust-icon">
            <img src={VtexSeloIconMobile} alt="Selo de confiança Vtex" />
          </li>
        </ul>
      </div>
      <div className="footer-mobile-text-wrapper">
        <span className="footer-mobile-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. .
        </span>
      </div>

      <div className="footer-mobile-infos-development">
        <a
          href="https://vtex.com/br-pt/"
          target="_blank"
          className="footer-mobile-infos-development-wrapper footer-mobile-infos-development-wrapper-powered-by "
        >
          <span className="footer-mobile-infos-powered-by-developed-by">
            Powered by
          </span>
          <img src={LogoVtexMobile} alt="Logo Vtex" />
        </a>
        <a
          href="https://m3ecommerce.com"
          target="_blank"
          className="footer-mobile-infos-development-wrapper"
        >
          <span className="footer-mobile-infos-powered-by-developed-by">
            Developed by
          </span>
          <img src={LogoM3Mobile} alt="Logo M3" />
        </a>
      </div>
    </div>
  );
};
export { FooterMobile };
