import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <Link className="navbar-brand" to="/">
        Dan Ayers
      </Link>
      <div className="navbar-collapse" id="collapsibleNavbar">
        <div className="navbar-nav">
          <div>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;