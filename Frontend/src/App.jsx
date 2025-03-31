import { Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import SignUp_Login from "./Components/Signup_Login";
import SignUpSelection from "./Components/SignUpSelection";
import StudentSignup from "./Components/StudentSignup";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp_Login />} />
        <Route path="/signup-selection" element={<SignUpSelection />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/teacher" element={<TeacherSignup />} />{" "}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
import TeacherSignup from "./Components/TeacherSignup";

export default App;
