import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-100">
      <Link className="w-24" to="/">
        <img className="logo" src={require("../../RestroLogo.png")} />
      </Link>
      <div className="text-base font-semibold">
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
