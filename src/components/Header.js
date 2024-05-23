import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <img className="logo" src={require("../../RestroLogo.png")} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/ContactUs">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="">
              Cart
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/Grocery">
              Grocery
            </Link>
          </li>
          <button
            className="loginBtn"
            onClick={() =>
              setLoginText(loginText == "Login" ? "Logout" : "Login")
            }
          >
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
