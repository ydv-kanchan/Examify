import React from "react";

const SignUp_Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100  bg-opacity-90 shadow-md p-10">
      {/* Outer Container with White Background */}
      <div className="bg-white rounded-lg p-4 flex w-full max-w-4xl justify-center gap-x-1">
        {/* Left Side - Sign In */}
        <div className="w-[500px] h-[600px] bg-gray-200 bg-opacity-90 shadow-md p-10 rounded-lg flex items-center justify-center">
          <div className="text-center w-full max-w-sm mx-auto">
            <h2 className="text-3xl font-semibold mb-5">Welcome back :)</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="w-full p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-1.5 px-3 rounded hover:bg-gray-800"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Sign Up */}
        <div className="w-[500px] h-[600px] p-10 rounded-lg text-black text-center flex items-center justify-center">
          <div className="max-w-sm">
            <h1 className="text-3xl font-semibold mb-4">New here?</h1>
            <p className="text-lg mb-6">
              Sign up and unlock a range of eco-friendly products for a greener
              shopping experience!
            </p>
            <button className="border-2 border-black text-black py-3 px-8 rounded hover:bg-black hover:text-white transition">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp_Login;
