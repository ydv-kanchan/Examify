import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center bg-white shadow-lg">
      <div className="w-full h-full flex items-center px-8 bg-white shadow-md">
        {/* Logo Section - Smaller and aesthetic */}
        <div className="h-16 flex items-center">
          {/* Using a more fitting icon, you can change it to a custom image or another icon */}
          <i className="fas fa-graduation-cap text-2xl text-blue-500"></i>
          <span className="text-2xl font-extrabold text-blue-500 ml-2">
            Examify
          </span>
        </div>

        {/* Navbar Links Section */}
        <div className="h-full flex items-center w-auto ml-auto space-x-6">
          {/* About Us Link */}
          <Link
            to="/about"
            className="text-black font-extrabold text-l hover:text-gray-600"
          >
            About Us
          </Link>

          {/* Contact Us Link */}
          <Link
            to="/contact"
            className="text-black font-extrabold text-l hover:text-gray-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
