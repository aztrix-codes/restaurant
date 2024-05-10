import React from "react";
import logo from "../Assets/logo.png";
import homeactivedark from "../Assets/homeactivedark.png"
import menuinactivedark from "../Assets/menuinactivedark.png"
import historyinactivedark from "../Assets/historyinactivedark.png"
import promoinactivedark from "../Assets/promoinactivedark.png"
import settinginactivedark from "../Assets/settinginactivedark.png"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo-container">
        <img src={logo} alt="LOGO" className="logo-img" />
      </div>
      <div className="menu-container">
        <div className="menu-item active">
          <img src={homeactivedark} alt="err" className="menu-item-img"/>  
          <p className="menu-item-name">Home</p>
        </div>
        <div className="menu-item">
          <img src={menuinactivedark} alt="err" className="menu-item-img"/>  
          <p className="menu-item-name">Menu</p>
        </div>
        <div className="menu-item">
          <img src={historyinactivedark} alt="err" className="menu-item-img"/>  
          <p className="menu-item-name">History</p>
        </div>
        <div className="menu-item">
          <img src={promoinactivedark} alt="err" className="menu-item-img"/>  
          <p className="menu-item-name">Promo</p>
        </div>
        <div className="menu-item">
          <img src={settinginactivedark} alt="err" className="menu-item-img"/>  
          <p className="menu-item-name">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
