import React from "react";

import "./FooterDesktop.css";

import MasterCardIconDesktop from "../../assets/images/master-card-icon-desktop.png";
import VisaIconDesktop from "../../assets/images/visa-icon-desktop.png";
import AmericanExpressIconDesktop from "../../assets/images/diners-icon-desktop.png";
import EloIconDesktop from "../../assets/images/elo-icon-desktop.png";
import HipercardIconDesktop from "../../assets/images/hipercard-icon-desktop.png";
import PaypalIconDesktop from "../../assets/images/paypal-icon-desktop.png";
import BoletoIconDesktop from "../../assets/images/boleto-icon-desktop.png";
import VtexSeloIconDesktop from "../../assets/images/vtex-selo-icon-desktop.png";
import LogoVtexDesktop from "../../assets/images/vtex-icon-desktop.png";
import LogoM3Desktop from "../../assets/images/logom3-icon-desktop.png";

const FooterDesktop = () => {
  return (
    <div className="footer-desktop-wrapper">
      <div className="footer-desktop-text-wrapper">
        <span className="footer-desktop-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </span>
      </div>
      <div className="footer-desktop-payment-trust-icons">
        <ul className="footer-desktop-payment-icons">
          <li className="footer-desktop-payment-icon">
            <img src={MasterCardIconDesktop} alt="MasterCard Icon" />
          </li>
          <li className="footer-desktop-payment-icon">
            <img src={VisaIconDesktop} alt="Visa Icon" />
          </li>
          <li className="footer-desktop-payment-icon">
            <img src={AmericanExpressIconDesktop} alt="AmericanExpress Icon" />
          </li>
          <li className="footer-desktop-payment-icon">
            <img src={EloIconDesktop} alt="Elo Icon" />
          </li>
          <li className="footer-desktop-payment-icon">
            <img src={HipercardIconDesktop} alt="HiperCard Icon" />
          </li>
          <li className="footer-desktop-payment-icon">
            <img src={PaypalIconDesktop} alt="PayPal Icon" />
          </li>
          <li className="footer-desktop-payment-icon">
            <img src={BoletoIconDesktop} alt="Boleto Icon" />
          </li>
        </ul>
        <ul className="footer-desktop-trust-icons">
          <li className="footer-desktop-trust-icon">
            <img src={VtexSeloIconDesktop} alt="Selo de confiança Vtex" />
          </li>
        </ul>
      </div>
      <div className="footer-desktop-infos-development">
        <a
          href="https://vtex.com/br-pt/"
          target="_blank"
          className="footer-desktop-infos-development-wrapper footer-desktop-infos-development-wrapper-powered-by "
        >
          <span className="footer-desktop-infos-powered-by-developed-by">
            Powered by
          </span>
          <img src={LogoVtexDesktop} alt="Logo Vtex" />
        </a>
        <a
          href="https://m3ecommerce.com"
          target="_blank"
          className="footer-desktop-infos-development-wrapper"
        >
          <span className="footer-desktop-infos-powered-by-developed-by">
            Developed by
          </span>
          <img src={LogoM3Desktop} alt="Logo M3" />
        </a>
      </div>
    </div>
  );
};
export { FooterDesktop };
