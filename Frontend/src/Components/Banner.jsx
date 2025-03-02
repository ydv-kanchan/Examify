import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?shopping')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-2xl max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to EasyMart
        </h1>
        <p className="text-lg mb-6 opacity-90">
          Your one-stop destination for shopping! Discover amazing products from
          trusted vendors.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition-all duration-300">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Banner;
