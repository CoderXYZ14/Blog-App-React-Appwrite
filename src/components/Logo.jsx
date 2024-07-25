import React from "react";
import logo from "../assets/logo.png";
function Logo({ width = "100px" }) {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" style={{ width: width }} />
    </div>
  );
}

export default Logo;
