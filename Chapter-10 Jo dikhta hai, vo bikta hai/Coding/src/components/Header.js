import React, { useState } from "react";
import LOGO_URL from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div style={{ width: "10rem", height: "4rem" }}>
          <img src={LOGO_URL} alt="Logo" className="object-contain w-full h-full" />
        </div>
      </div>
      <div>
        <ul className="flex items-center space-x-6 text-gray-700 font-semibold">
          <li className="flex items-center space-x-2">
            <span
              className={`inline-block w-3 h-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span
              className={`text-sm font-medium ${
                onlineStatus ? "text-green-600" : "text-red-600"
              }`}
            >
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition duration-200">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition duration-200">About Us</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 transition duration-200">Cart</Link>
          </li>
          <li>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
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
