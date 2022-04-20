import React, { useState } from "react";

import "./FooterLinksMobile.css";

import { FooterLinksMobileInstitucional } from "./FooterLinksMobileContents/FooterLinksMobileInstitucional";
import { FooterLinksMobileDuvidas } from "./FooterLinksMobileContents/FooterLinksMobileDuvidas";
import { FooterLinksMobileFaleConosco } from "./FooterLinksMobileContents/FooterLinksMobileFaleConosco";

import FacebookIcon from "../../assets/images/facebook-icon.png";
import InstagramIcon from "../../assets/images/instagram-icon.png";
import TwitterIcon from "../../assets/images/twitter-icon.png";
import YouTubeIcon from "../../assets/images/youtube-icon.png";
import LinkedinIcon from "../../assets/images/linkedin-icon.png";

const FooterLinksMobile = () => {
  const [openInstitucional, setOpenInstitucional] = useState(false);
  const [openDuvidas, setOpenDuvidas] = useState(false);
  const [openFaleConosco, setOpenFaleConosco] = useState(false);
  const handleToggleInstitucional = () => {
    setOpenInstitucional(!openInstitucional);
  };
  const handleToggleDuvida = () => {
    setOpenDuvidas(!openDuvidas);
  };
  const handleToggleFaleConosco = () => {
    setOpenFaleConosco(!openFaleConosco);
  };

  return (
    <div className="footer-links-mobile-wrapper">
      <ul className="footer-links-mobile-items">
        <li className="footer-links-mobile-item">
          <div
            className="footer-links-mobile-item-wrapper-institutional"
            onClick={handleToggleInstitucional}
          >
            <button className="footer-links-item-wrapper-button">
              Institucional
            </button>

            <span
              className={`footer-links-item-wrapper-span ${
                openInstitucional ? "see-more" : ""
              }`}
            ></span>
            <span
              className={`footer-links-item-wrapper-span-veja-menos ${
                openInstitucional ? "see-less" : ""
              }`}
            ></span>
          </div>
          <div
            className={`footer-links-item-institutional-content ${
              openInstitucional ? "isopen" : ""
            }`}
          >
            <FooterLinksMobileInstitucional />
          </div>
        </li>
        <li className="footer-links-mobile-item">
          <div
            className="footer-links-mobile-item-wrapper-saiba-mais"
            onClick={handleToggleDuvida}
          >
            <button className="footer-links-item-wrapper-button">
              Dúvidas
            </button>
            <span
              className={`footer-links-item-wrapper-span ${
                openDuvidas ? "see-more" : ""
              }`}
            ></span>
            <span
              className={`footer-links-item-wrapper-span-veja-menos ${
                openDuvidas ? "see-less" : ""
              }`}
            ></span>
          </div>
          <div
            className={`footer-links-item-duvidas-content ${
              openDuvidas ? "isopen" : ""
            }`}
          >
            <FooterLinksMobileDuvidas />
          </div>
        </li>
        <li className="footer-links-mobile-item">
          <div
            className="footer-links-mobile-item-wrapper-fale-conosco"
            onClick={handleToggleFaleConosco}
          >
            <button className="footer-links-item-wrapper-button">
              Fale Conosco
            </button>
            <span
              className={`footer-links-item-wrapper-span ${
                openFaleConosco ? "see-more" : ""
              }`}
            ></span>
            <span
              className={`footer-links-item-wrapper-span-veja-menos ${
                openFaleConosco ? "see-less" : ""
              }`}
            ></span>
          </div>
          <div
            className={`footer-links-item-faleconosco-content ${
              openFaleConosco ? "isopen" : ""
            }`}
          >
            <FooterLinksMobileFaleConosco />
          </div>
        </li>
      </ul>

      <ul className="footer-links-mobile-social-newtwork">
        <li className="footer-links-mobile-social-network-icon">
          <a href="https://www.facebook.com/digitalm3" target="_blank">
            <img src={FacebookIcon} alt="Facebook Icon" />
          </a>
        </li>
        <li className="footer-links-mobile-social-network-icon">
          <a href="https://www.instagram.com/m3.ecommerce/" target="_blank">
            <img src={InstagramIcon} alt="Instagram Icon" />
          </a>
        </li>
        <li className="footer-links-mobile-social-network-icon">
          <a href="#" target="_blank">
            <img src={TwitterIcon} alt="Twitter Icon" />
          </a>
        </li>
        <li className="footer-links-mobile-social-network-icon">
          <a
            href="https://www.youtube.com/channel/UCSMoUkouJCf_LUYfFiIK2yw"
            target="_blank"
          >
            <img src={YouTubeIcon} alt="Youtube Icon" />
          </a>
        </li>
        <li className="footer-links-mobile-social-network-icon">
          <a
            href="https://www.linkedin.com/company/m3ecommerce/"
            target="_blank"
          >
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { FooterLinksMobile };
