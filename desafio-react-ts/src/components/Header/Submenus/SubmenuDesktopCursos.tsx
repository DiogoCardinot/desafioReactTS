import React from "react";

import "./SubmenuDesktopCursos.css";
import ArrowLeft from "../../../assets/images/arrow-left-black.png";

const SubMenuDesktopCursos = () => {
  return (
    <div className="submenu-desktop-cursos-wrapper">
      <h3 className="submenu-desktop-cursos-title">Cursos</h3>
      <div className="submenu-desktop-cursos-cotegories-wrapper">
        <ul className="submenu-desktop-cursos-categories">
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
        </ul>
        <ul className="submenu-desktop-cursos-categories">
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
          <li className="submenu-desktop-cursos-category">
            <a className="submenu-desktop-cursos-category-link" href="/">
              Lorem Ipsum
            </a>
          </li>
        </ul>
      </div>
      <div className="submenu-desktop-cursos-button-wrapper">
        <button className="submenu-desktop-cursos-button">VER TODOS</button>
        <img
          src={ArrowLeft}
          alt="See more"
          className="submenu-desktop-cursos-arrow-image"
        />
      </div>
    </div>
  );
};
export { SubMenuDesktopCursos };
