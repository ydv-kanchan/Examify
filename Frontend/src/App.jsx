import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import AboutUs from "./Components/AboutUs";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
