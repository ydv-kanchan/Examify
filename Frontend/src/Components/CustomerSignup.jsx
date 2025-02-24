import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const CustomerSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    houseNo: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-green-50 to-green-100 text-gray-900 p-6">
      <div
        className={`bg-white flex flex-col w-full shadow-xl rounded-2xl p-10 relative transition-all duration-300 transform hover:scale-[1.02] ${
          step === 3 ? "max-w-lg min-h-[400px] p-10" : "max-w-2xl min-h-[550px]"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-5">
          {step === 1
            ? "Create Account"
            : step === 2
            ? "Address Details"
            : "Confirm Details"}
        </h2>

        {/* Step Indicators */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-5">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  step >= num
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          {step === 1 && (
            <>
              {[
                "fullName",
                "username",
                "email",
                "password",
                "confirmPassword",
              ].map((field, index) => (
                <input
                  key={index}
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border mb-3 rounded-md focus:ring-2 focus:ring-green-400 transition-all"
                  required
                />
              ))}
              <div className="flex justify-end mt-auto">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  Next
                </button>
              </div>

              {/* OR Line */}
              <div className="flex items-center my-3">
                <hr className="flex-grow border-gray-300" />
                <span className="px-3 text-gray-500 text-sm">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Google Signup Button */}
              <button className="w-full border border-gray-400 py-3 flex items-center justify-center gap-3 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 text-lg font-medium">
                <FcGoogle className="text-2xl" />
                <span className="text-gray-700">Signup with Google</span>
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {[
                "houseNo",
                "landmark",
                "city",
                "state",
                "country",
                "pincode",
              ].map((field, index) => (
                <input
                  key={index}
                  type="text"
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border mb-3 rounded-md focus:ring-2 focus:ring-green-400 transition-all"
                  required
                />
              ))}
            </>
          )}

          {step === 3 && (
            <div className="flex flex-col flex-grow justify-center items-center text-lg text-center ">
              <p className="text-gray-900 ">
                Please review all details before finishing your signup.
              </p>
            </div>
          )}

          {step > 1 && (
            <div className="flex justify-between mt-auto">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                Back
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  Finish
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CustomerSignup;
