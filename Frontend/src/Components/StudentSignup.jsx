import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    classGrade: "",
    course: "",
    section: "",
    department: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await fetch(
        "http://localhost:3000/api/signup/students",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setErrors([data.message || "Signup failed. Please try again."]);
        return;
      }

      alert("Signup successful! A verification email has been sent.");
      navigate("/");
    } catch (error) {
      setErrors(["Something went wrong. Please try again."]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          {step === 1 ? "Student Information" : "Course Details"}
        </h2>

        {errors.length > 0 && (
          <div className="text-red-500 mb-4 text-center">
            {errors.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              {[
                "firstName",
                "lastName",
                "gender",
                "email",
                "phone",
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
                  className="w-full p-3 border mb-3 rounded-md"
                  required
                />
              ))}
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full p-3 border mb-3 rounded-md"
                required
              />
            </>
          )}

          {step === 2 && (
            <>
              {[
                "studentId",
                "classGrade",
                "course",
                "section",
                "department",
              ].map((field, index) => (
                <input
                  key={index}
                  type="text"
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border mb-3 rounded-md"
                  required
                />
              ))}
            </>
          )}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-2 px-6 rounded-md"
              >
                Back
              </button>
            )}

            {step < 2 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-6 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded-md"
              >
                Finish
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup;
