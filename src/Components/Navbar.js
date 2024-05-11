import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { navMenu } from "../Utils/uidata";

function Navbar() {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <div className="Navbar">
      <div className="logo-container">
        <img src={logo} alt="LOGO" className="logo-img" />
      </div>
      <div className="menu-container">
        {navMenu.map((item) => (
          <Link key={item.id} to={item.path} className="Link" onClick={() => setActiveLink(item.id)}>
            <div className={`menu-item ${activeLink === item.id ? "active" : ""}`}>
              <img
                src={activeLink === item.id ? item.active : item.inactivedark}
                alt="err"
                className="menu-item-img"
              />
              <p className="menu-item-name">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
