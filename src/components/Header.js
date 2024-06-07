import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between bg-orange-50">
      <Link className="w-24" to="/">
        <img className="logo" src={require("../../FoodPath.png")} />
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
            <Link style={{ textDecoration: "none" }} to="/Cart">
              Cart - ({cartItems.length} items)
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
          <li className="px-4 font-bold">User: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
