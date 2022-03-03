import React from "react";
import "./Header.css";
import logoM3Header from "../images/LogoM3AcademyHeader.png";
import searchIcon from "../images/search-icon.png";
import cartIcon from "../images/cart-icon.png";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="abc">
          <div className="header-logo-desktop">
            <a href="/">
              <img src={logoM3Header} alt="Logo M3Academy" />
            </a>
          </div>

          <button className="active-navbar-button">
            <span className="hamburguer-button"></span>
          </button>

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

            <img
              src={searchIcon}
              alt="Ícone de pesquisa"
              className="header-search-icon"
            />
          </div>

          <div className="header-infos">
            <span className="header-infos-text">ENTRAR</span>
            <img src={cartIcon} alt="Carrinho de Compras" />
          </div>
        </div>
        <div className="header-search-mobile">
          <input
            type="text"
            placeholder="Buscar..."
            className="header-search-input-mobile"
          />

          <img
            src={searchIcon}
            alt="Ícone de pesquisa"
            className="header-search-icon-mobile"
          />
        </div>

        <ul className="list-items">
          <li className="list-item">
            <button className="list-item-button">CURSOS</button>
          </li>
          <li className="list-item">
            <button className="list-item-button">SAIBA MAIS</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
export { Header };
