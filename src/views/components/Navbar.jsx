import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiHome2Line,
  RiLogoutBoxLine,
  RiLoginBoxLine,
  RiUserLine,
} from "react-icons/ri";
import logo from "../assets/logo.png";
const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("sign-in");
    navigate("/sign-in", { replace: true });
    onLogout();
  };

  const handleLoginLinkClick = () => {
    handleLogout();
    navigate("/sign-in", { replace: true });
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/home" className="text-white text-lg font-semibold">
          <img src={logo} width={50} className=" bg-white" alt="logo" />
        </Link>
        <Link to="/browse" className="flex text-white hover:text-gray-300">
          <RiHome2Line className="pr-1" size={24} />
          Browse
        </Link>

        <Link to="/contactus" className="text-white text-lg font-semibold">
          contact us
        </Link>
        <Link to="/aboutus" className="text-white text-lg font-semibold">
          about us
        </Link>
        <Link to="/main" className="text-white hover:text-gray-300">
          Upload
        </Link>

        <div className="flex items-center space-x-4">
          {isLoggedIn && (
            <Link
              to="/userDetails"
              className="text-white hover:text-gray-300 pr-[150px]"
            >
              <RiUserLine size={24} />
            </Link>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-300"
            >
              <RiLogoutBoxLine size={24} />
            </button>
          ) : (
            <button
              onClick={handleLoginLinkClick}
              className="text-white hover:text-gray-300"
            >
              <RiLoginBoxLine size={24} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
