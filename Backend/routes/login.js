const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const validateLogin = require("../middleware/validateLogin");
const comparePassword = require("../middleware/comparePassword");
const db = require("../config/db");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// Teacher login route
router.post("/teacher", validateLogin, async (req, res) => {
  const { email, password } = req.body;
  console.log("Teacher Login Attempt:", email);

  try {
    const checkUserSql = "SELECT * FROM teachers WHERE email = ?";
    db.query(checkUserSql, [email], async (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error" });
      }
      if (result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const teacher = result[0];

      if (!teacher.is_verified) {
        return res
          .status(400)
          .json({ message: "Please verify your email before logging in." });
      }

      const isMatch = await comparePassword(password, teacher.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = jwt.sign({ id: teacher.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({
        message: "Login successful",
        token: token,
      });
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

// Student login route
router.post("/student", validateLogin, async (req, res) => {
  const { email, password } = req.body;
  console.log("Student Login Attempt:", email);

  try {
    const checkUserSql = "SELECT * FROM students WHERE email = ?";
    db.query(checkUserSql, [email], async (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error" });
      }
      if (result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const student = result[0];

      if (!student.is_verified) {
        return res
          .status(400)
          .json({ message: "Please verify your email before logging in." });
      }

      const isMatch = await comparePassword(password, student.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = jwt.sign({ id: student.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({
        message: "Login successful",
        token: token,
      });
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

module.exports = router;
