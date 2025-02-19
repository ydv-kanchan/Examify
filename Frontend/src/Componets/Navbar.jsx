import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="/logo.png" // Ensure logo is in public folder as 'logo.png'
            alt="Easy Mart Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-6">
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
