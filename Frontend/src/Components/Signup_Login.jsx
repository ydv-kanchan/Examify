import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon

const SignUp_Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-50 via-gray-200 to-gray-400 shadow-md p-10">
      {/* Outer Container with White Background */}
      <div className="bg-white rounded-lg p-4 flex w-full max-w-4xl justify-center gap-x-1 shadow-lg">
        {/* Left Side - Sign In */}
        <div className="w-[500px] h-[600px] bg-gray-200 bg-opacity-90 shadow-md p-10 rounded-lg flex items-center justify-center">
          <div className="text-center w-full max-w-sm mx-auto">
            <h2 className="text-3xl font-semibold mb-5 text-gray-600">
              Welcome back :)
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full p-1.5 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="w-full p-1.5 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                  required
                />
              </div>

              {/* Forgot Password Link (Now above Sign In button) */}
              <p className="text-sm text-gray-800 hover:text-gray-600 cursor-pointer text-right mb-3">
                Forgot Password?
              </p>

              <button
                type="submit"
                className="w-full bg-gray-600 text-white py-2 px-3 rounded hover:bg-gray-500 mb-4"
              >
                SIGN IN
              </button>

              {/* Google Sign-In Button */}
              <button className="w-full border border-gray-400 py-2 px-3 rounded flex items-center justify-center gap-2 hover:bg-gray-300 transition">
                <FcGoogle className="text-xl" />
                <span className="text-gray-600 font-medium">
                  Sign in with Google
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Sign Up */}
        <div className="w-[500px] h-[600px] p-10 rounded-lg text-black text-center flex items-center justify-center">
          <div className="max-w-sm">
            <h1 className="text-3xl font-semibold mb-4">New here?</h1>
            <p className="text-lg mb-6">
              Sign up to shop effortlessly while managing your inventory with
              ease!
            </p>
            <button className="w-full border-2 border-black text-black py-2 px-3 rounded hover:bg-black hover:text-white transition mb-3">
              SIGN UP
            </button>

            {/* Google Sign-Up Button */}
            <button className="w-full border border-gray-400 py-2 px-3 rounded flex items-center justify-center gap-2 hover:bg-gray-300 transition">
              <FcGoogle className="text-xl" />
              <span className="text-black font-medium">
                Sign up with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp_Login;
