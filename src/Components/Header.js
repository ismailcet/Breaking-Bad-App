import React from "react";
import Logo from "../Images/logo.png";
const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
