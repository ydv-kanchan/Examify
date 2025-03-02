const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const validateLogin = require("../middleware/validateLogin");
const comparePassword = require("../middleware/comparePassword");
const db = require("../config/db");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;


router.post("/", validateLogin, async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUserSql = "SELECT * FROM customers WHERE email = ?";
    db.query(findUserSql, [email], async (err, result) => {
      if (err) {
        console.error("Error fetching user:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const user = result[0];

      if (!user.is_verified) {
        return res.status(400).json({ message: "Please verify your email before logging in." });
      }

      const isMatch = await  comparePassword(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

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
