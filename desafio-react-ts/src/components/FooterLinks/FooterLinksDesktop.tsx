import React from "react";

import "./FooterLinksDesktop.css";

import FacebookIcon from "../../assets/images/facebook-icon.png";
import InstagramIcon from "../../assets/images/instagram-icon.png";
import TwitterIcon from "../../assets/images/twitter-icon.png";
import YouTubeIcon from "../../assets/images/youtube-icon.png";
import LinkedinIcon from "../../assets/images/linkedin-icon.png";

const FooterLinksDesktop = () => {
  return (
    <div className="footer-links-dekstop-wrapper">
      <div className="footer-links-dekstop-block">
        <h4 className="footer-links-desktop-block-title">INSTITUCIONAL</h4>
        <ul className="footer-desktop-links-items-list">
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="/">
              QUEM SOMOS
            </a>
          </li>
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="/">
              POLÍTICA DE PRIVACIDADE
            </a>
          </li>
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="/">
              SEGURANÇA
            </a>
          </li>
          <li className="footer-desktop-links-item">
            <u className="footer-desktop-links-u">SEJA UM VENDEDOR</u>
          </li>
        </ul>
      </div>
      <div className="footer-links-desktop-block">
        <h4 className="footer-links-desktop-block-title">DÚVIDAS</h4>
        <ul className="footer-desktop-links-items-list">
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="/">
              ENTREGA
            </a>
          </li>
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="/">
              PAGAMENTO
            </a>
          </li>
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="/">
              TROCAS E DEVOLUÇÕES
            </a>
          </li>
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="/">
              DÚVIDAS FREQUENTES
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-links-desktop-block">
        <h4 className="footer-links-desktop-block-title">FALE CONOSCO</h4>
        <ul className="footer-desktop-links-items-list">
          <li className="footer-desktop-links-item">
            <span className="footer-desktop-links-span">
              ATENDIMENTO AO CONSUMIDOR
            </span>
          </li>
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="tel:1141599504">
              (11) 4159 9504
            </a>
          </li>
          <li className="footer-desktop-links-item">
            <span className="footer-desktop-links-span">
              ATENDIMENTO ONLINE
            </span>
          </li>
          <li className="footer-desktop-links-item">
            <a className="footer-desktop-links-link" href="tel:5511994338825">
              (11) 99433-8825
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-links-desktop-socialmedias">
        <ul className="footer-links-desktop-social-network">
          <li className="footer-links-desktop-social-network-icon">
            <a href="https://www.facebook.com/digitalm3" target="_blank">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
          </li>
          <li className="footer-links-desktop-social-network-icon">
            <a href="https://www.instagram.com/m3.ecommerce/" target="_blank">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
          </li>
          <li className="footer-links-desktop-social-network-icon">
            <a href="#" target="_blank">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
          </li>
          <li className="footer-links-desktop-social-network-icon">
            <a
              href="https://www.youtube.com/channel/UCSMoUkouJCf_LUYfFiIK2yw"
              target="_blank"
            >
              <img src={YouTubeIcon} alt="Youtube Icon" />
            </a>
          </li>
          <li className="footer-links-desktop-social-network-icon">
            <a
              href="https://www.linkedin.com/company/m3ecommerce/"
              target="_blank"
            >
              <img src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
          </li>
        </ul>
        <a
          href="www.loremipsum.com"
          className="footer-links-desktop-social-network-email"
          target="_blank"
        >
          www.loremipsum.com
        </a>
      </div>
    </div>
  );
};

export { FooterLinksDesktop };
