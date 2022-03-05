import React, { useState } from "react";
import "./Header.css";
import logoM3Header from "../../assets/images/LogoM3AcademyHeader.png";
import searchIcon from "../../assets/images/search-icon.png";
import cartIcon from "../../assets/images/cart-icon.png";

import { SubMenuMobileCursos } from "./Submenus/SubmenuMobileCursos";
import { SubMenuMobileSaibaMais } from "./Submenus/SubmenuMobileSaibaMais";
import { SubMenuDesktopCursos } from "./Submenus/SubmenuDesktopCursos";
import { SubMenuDesktopSaibaMais } from "./Submenus/SubmenuDesktopSaibaMais";

const Header = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [openCursosMobile, setopenCursosMobile] = useState(false);
  const [openSaibaMaisMobile, setopenSaibaMaisMobile] = useState(false);
  let [openCursosDesktop, setopenCursosDesktop] = useState(false);
  let [openSaibaMaisDesktop, setopenSaibaMaisDesktop] = useState(false);

  const toggleStateCursos = () => {
    setopenCursosDesktop(!openCursosDesktop);
    setopenSaibaMaisDesktop(false);
  };
  const toggleStateSaibaMais = () => {
    setopenSaibaMaisDesktop(!openSaibaMaisDesktop);
    setopenCursosDesktop(false);
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="header-logo-desktop">
            <a href="/">
              <img src={logoM3Header} alt="Logo M3Academy" />
            </a>
          </div>

          <div className={`nav-wrapper ${openNavBar ? "active" : ""}`}>
            <button
              className="active-navbar-button"
              onClick={() => {
                setOpenNavBar(true);
              }}
            >
              <span className="hamburguer-button"></span>
            </button>
            <div className={`list-items-mobile ${openNavBar ? "active" : ""}`}>
              <div className="close-navbar-wrapper">
                <input
                  type="text"
                  placeholder="Digite aqui"
                  className="search-close-navbar-input"
                />
                <button
                  className="close-navbar-button"
                  onClick={() => {
                    setOpenNavBar(false);
                    setopenSaibaMaisMobile(false);
                    setopenCursosMobile(false);
                  }}
                >
                  <span className="close-navbar"></span>
                </button>
              </div>
              <ul className="list-items-mobile-options">
                <li className="list-item-mobile">
                  <div
                    className="list-item-mobile-wrapper"
                    onClick={() => {
                      setopenCursosMobile(!openCursosMobile);
                    }}
                  >
                    <button className="list-item-button-mobile">CURSOS</button>
                    <div className="see-more-icon">+</div>
                  </div>
                  <div
                    className={`navbar-cursos ${
                      openCursosMobile ? "active" : ""
                    }`}
                  >
                    <SubMenuMobileCursos />
                  </div>
                </li>
                <li className="list-item-mobile">
                  <div
                    className="list-item-mobile-wrapper"
                    onClick={() => {
                      setopenSaibaMaisMobile(!openSaibaMaisMobile);
                    }}
                  >
                    <button className="list-item-button-mobile">
                      SAIBA MAIS
                    </button>
                    <div className="see-more-icon">+</div>
                  </div>

                  <div
                    className={`navbar-cursos ${
                      openSaibaMaisMobile ? "active" : ""
                    }`}
                  >
                    <SubMenuMobileSaibaMais />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-logo-mobile">
            <a href="/">
              <img src={logoM3Header} alt="Logo M3Academy" />
            </a>
          </div>

          <div className="header-search-desktop">
            <input
              type="text"
              placeholder="Buscar..."
              className="header-search-input"
            />
            <button className="search-icon-button">
              <img
                src={searchIcon}
                alt="Ícone de pesquisa"
                className="header-search-icon"
              />
            </button>
          </div>

          <div className="header-infos">
            <span className="header-infos-text">ENTRAR</span>
            <img
              src={cartIcon}
              alt="Carrinho de Compras"
              className="cart-icon"
            />
          </div>
        </div>

        <div className="header-search-mobile">
          <input
            type="text"
            placeholder="Buscar..."
            className="header-search-input"
          />
          <button className="search-icon-button">
            <img
              src={searchIcon}
              alt="Ícone de pesquisa"
              className="header-search-icon"
            />
          </button>
        </div>

        <ul className="list-items">
          <li className="list-item">
            <button className="list-item-button" onClick={toggleStateCursos}>
              CURSOS
            </button>
          </li>
          <li className="list-item">
            <button className="list-item-button" onClick={toggleStateSaibaMais}>
              SAIBA MAIS
            </button>
          </li>
        </ul>
      </div>
      <div className={`department-cursos ${openCursosDesktop ? "open" : ""}`}>
        <SubMenuDesktopCursos />
      </div>
      <div
        className={`department-saiba-mais ${
          openSaibaMaisDesktop ? "open" : ""
        }`}
      >
        <SubMenuDesktopSaibaMais />
      </div>
    </header>
  );
};
export { Header };
