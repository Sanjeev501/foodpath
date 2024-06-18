import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../utils/profileSlice";
import Modal from "./Modal";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const [showModal, setShowModal] = useState(false);
  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);

  const username = useSelector((state) => state.profile.username);
  const loggedIn = useSelector((state) => state.profile.loggedIn);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoginText(loggedIn ? "Logout" : "Login");
  }, [loggedIn]);

  const handleLogin = () => {
    loginText == "Logout" ? dispatch(userLoggedIn(false)) : setShowModal(true);
  };

  const callModal = () => {
    return <Modal />;
  };

  return (
    <div className="flex justify-between bg-orange-50">
      {showModal && callModal()}
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
          <button onClick={() => handleLogin()}>{loginText}</button>
          {loggedIn && <li className="px-4 font-bold"> User: {username}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
