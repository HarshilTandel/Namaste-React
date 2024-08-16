import React, { useState } from "react";
import LOGO_URL from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
