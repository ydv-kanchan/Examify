import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-center shadow-lg items-center bg-gray-100">
      <div className="w-[90%] h-full flex items-center px-4 bg-gray-100">
        <div className="h-24 w-24 flex items-center">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-full w-full object-contain"
          />
        </div>

        <div className="h-full flex items-center w-auto ml-auto space-x-6">
          <Link to="/about" className="text-black font-bold hover:text-gray-700">
            About Us
          </Link>
          <Link to="/contact" className="text-black font-bold hover:text-gray-700">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
