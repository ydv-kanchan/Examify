import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp_Login from "./Components/Signup_Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp_Login />} />
      </Routes>
    </Router>
  );
}

export default App;
