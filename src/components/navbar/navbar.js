import React from "react";
import { NavLink } from "react-router-dom";
import logoFullTime from "../../assets/logo.png";

import "./navbar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar_unordered-list">
        <li className="navbar_list-item">
          <NavLink to="/">
            <div className="navbar_logo-container">
              <img src={logoFullTime} />
            </div>
          </NavLink>
        </li>
        <li className="navbar_list-item">
          <NavLink activeClassName="navbar_link--selected" to="/team">
            EQUIPE
          </NavLink>
        </li>
        <li className="navbar_list-item">
          <NavLink activeClassName="navbar_link--selected" to="/history">
            HISTÓRICO
          </NavLink>
        </li>
        <li className="navbar_list-item">
          <NavLink activeClassName="navbar_link--selected" to="/contact">
            CONTATO
          </NavLink>
        </li>
        <li className="navbar_list-item">
          <NavLink activeClassName="navbar_link--selected" to="/store">
            LOJA
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
