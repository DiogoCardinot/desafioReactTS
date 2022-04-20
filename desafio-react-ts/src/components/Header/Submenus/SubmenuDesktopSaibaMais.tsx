import React from "react";

import "./SubmenuDesktopSaibaMais.css";
import ArrowLeft from "../../../assets/images/arrow-left-black.png";

const SubMenuDesktopSaibaMais = () => {
  return (
    <div className="submenu-desktop-saiba-mais-wrapper">
      <h3 className="submenu-desktop-saiba-mais-title">Saiba Mais</h3>
      <div className="submenu-desktop-saiba-mais-cotegories-wrapper">
        <ul className="submenu-desktop-saiba-mais-categories">
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
        </ul>
        <ul className="submenu-desktop-saiba-mais-categories">
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-saiba-mais-category">
            <a className="submenu-desktop-saiba-mais-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
        </ul>
      </div>
      <div className="submenu-desktop-saiba-mais-button-wrapper">
        <button className="submenu-desktop-saiba-mais-button">VER TODOS</button>
        <img
          src={ArrowLeft}
          alt="See more"
          className="submenu-desktop-saiba-mais-arrow-image"
        />
      </div>
    </div>
  );
};
export { SubMenuDesktopSaibaMais };
