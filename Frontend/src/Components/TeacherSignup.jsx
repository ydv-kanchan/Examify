import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const TeacherSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    teacherId: "",
    qualification: "",
    specialization: "",
    institution: "",
    designation: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    console.log("Form Data Submitted:", formData);
  
    try {
      const response = await fetch("http://localhost:3000/api/signup/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Response from Server:", data);
      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors.map((err) => err.msg));
        } else if (data.message) {
          setErrors([data.message]);
        }
        return;
      }
      alert("Signup successful! A verification email has been sent to your account");
      navigate("/"); 
    } catch (error) {
      setErrors(["Something went wrong. Please try again."]);
    }
  };

  const stepTitles = [
    "Basic Information",
    "Professional Details",
    "Confirm Details",
  ];

  const inputFields = {
    1: [
      "firstName", 
      "lastName",
      "email",
      "phone", 
      "password", 
      "confirmPassword"
    ],
    2: [
      "teacherId",
      "qualification",
      "specialization",
      "institution",
      "designation",
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-orange-50 to-orange-100 text-gray-900 p-6">
      <div
        className={`bg-white flex flex-col w-full shadow-xl rounded-2xl p-10 relative transition-all duration-300 transform hover:scale-[1.02] ${
          step === 3 ? "max-w-lg min-h-[500px]" : "max-w-2xl min-h-[550px]"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-5">
          {stepTitles[step - 1]}
        </h2>

        {errors.length > 0 && (
          <div className="text-red-500 mb-4 text-center">
            {errors.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}

        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-5">
            {[...Array(3)].map((_, num) => (
              <div
                key={num}
                className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  step > num
                    ? "bg-orange-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {num + 1}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          {inputFields[step] &&
            inputFields[step].map((field) => (
              <input
                key={field}
                type={field.includes("password") ? "password" : "text"}
                name={field}
                placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 border mb-3 rounded-md focus:ring-2 focus:ring-green-400 transition-all"
                required
              />
            ))}

          <div className="flex justify-between mt-auto">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition-all duration-300 transform hover:scale-105"
              >
                Back
              </button>
            )}

            {step === 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Next
              </button>
            )}

            {step === 2 && (
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignup;
