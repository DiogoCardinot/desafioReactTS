import React from "react";
import "./Submenu.css";

const SubMenu = () => {
  return (
    <div className="submenu-wrapper">
      <div className="submenu">
        <div className="submenu-title">
          <h2>Cursos</h2>
        </div>
        <div className="submenu-categories-items">
          <ul className="submenu__categories">
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
          </ul>
          <ul>
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
            <li className="submenu__category">
              <a className="submenu__category-link" href="/">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
        <button className="submenu-button">VER TODOS</button>
      </div>
    </div>
  );
};

export { SubMenu };
