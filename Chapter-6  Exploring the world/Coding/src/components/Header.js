import React, { useState } from "react";
import LOGO_URL from "../../utils/constant";


const Header = () => {

  const [btnName,setbtnName] = useState("Login");
  
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#cart">Cart</a>
          </li>
          <button className="login" onClick={() => {
             setbtnName(btnName === "Login" ? "Logout" : "Login");
          } 
          }>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
