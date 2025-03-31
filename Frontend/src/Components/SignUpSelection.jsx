import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const SignUpSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleProceed = () => {
    if (selectedRole === "teacher") {
      navigate("/signup/teacher");
    } else if (selectedRole === "student") {
      navigate("/signup/student");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-white to-gray-100 text-gray-900 p-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Join Our Examination System
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Select your role to get started.
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center items-center">
        <div
          className={`flex flex-col items-center bg-white shadow-lg p-6 md:p-10 rounded-xl w-72 md:w-80 cursor-pointer border transform transition-all duration-300 ${
            selectedRole === "teacher"
              ? "scale-105 shadow-xl border-blue-400"
              : "hover:scale-105 border-gray-200"
          }`}
          onClick={() => handleSelection("teacher")}
        >
          <FaChalkboardTeacher className="text-5xl md:text-6xl mb-4 text-blue-500" />
          <h3 className="text-xl md:text-2xl font-bold">I am a Teacher</h3>
          <p className="text-gray-600 mt-2 text-center">
            Create exams, manage student performance, and track progress.
          </p>
        </div>

        <div
          className={`flex flex-col items-center bg-white shadow-lg p-6 md:p-10 rounded-xl w-72 md:w-80 cursor-pointer border transform transition-all duration-300 ${
            selectedRole === "student"
              ? "scale-105 shadow-xl border-green-400"
              : "hover:scale-105 border-gray-200"
          }`}
          onClick={() => handleSelection("student")}
        >
          <FaUserGraduate className="text-5xl md:text-6xl mb-4 text-green-500" />
          <h3 className="text-xl md:text-2xl font-bold">I am a Student</h3>
          <p className="text-gray-600 mt-2 text-center">
            Take exams, review results, and improve your learning.
          </p>
        </div>
      </div>
      {selectedRole && (
        <button
          onClick={handleProceed}
          className="mt-6 px-8 py-3 bg-blue-400 text-white text-lg font-semibold uppercase tracking-wide rounded-full shadow-lg transform transition-all duration-300 hover:bg-blue-300 hover:scale-105"
        >
          Continue as {selectedRole === "teacher" ? "Teacher" : "Student"} →
        </button>
      )}

      <p
        className="mt-6 text-gray-500 cursor-pointer hover:text-gray-700 transition-all duration-300"
        onClick={() => navigate("/signin")}
      >
        Already have an account? <span className="font-semibold">Sign In</span>
      </p>
    </div>
  );
};

export default SignUpSelection;