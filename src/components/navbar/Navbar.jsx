import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../image/magnifier-icon.png";
import "./navbar.less";
import Search from "../search/Search";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__conteiner">
        <Link className="navbar__link" to="/">
          <p className="navbar__logo-text">Sercher</p>
          <img
            src={searchIcon}
            alt="icon-magnifier"
            className="navbar__logo-icon"
          ></img>
        </Link>
      </div>

      <button type="button" className="navbar__change-theme-bts">
        Theme
      </button>
    </div>
  );
}

export default Navbar;
