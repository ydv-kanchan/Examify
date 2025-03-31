const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.get("/teacher", async (req, res) => {
  const { token } = req.query;
  console.log(req.query.token);

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const checkUserSql = "SELECT * FROM teachers WHERE email = ?";
    db.query(checkUserSql, [decoded.email], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      if (result.length === 0) {
        return res.status(400).json({ message: "Invalid token or user does not exist" });
      }

      const user = result[0];

      if (user.is_verified) {
        return res.status(400).json({ message: "Email is already verified" });
      }

      const updateSql = "UPDATE teachers SET is_verified = true WHERE email = ?";
      db.query(updateSql, [decoded.email], (err) => {
        if (err) {
          console.error("Error updating verification status:", err);
          return res.status(500).json({ error: "Database error" });
        }

        res.status(200).json({ message: "Email verified successfully. You can now log in." });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid or expired token" });
  }
});


router.get("/student", async (req, res) => {
  const { token } = req.query;
  console.log(req.query.token);

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const checkUserSql = "SELECT * FROM students WHERE email = ?";
    db.query(checkUserSql, [decoded.email], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      if (result.length === 0) {
        return res.status(400).json({ message: "Invalid token or user does not exist" });
      }

      const user = result[0];

      if (user.is_verified) {
        return res.status(400).json({ message: "Email is already verified" });
      }

      const updateSql = "UPDATE students SET is_verified = true WHERE email = ?";
      db.query(updateSql, [decoded.email], (err) => {
        if (err) {
          console.error("Error updating verification status:", err);
          return res.status(500).json({ error: "Database error" });
        }

        res.status(200).json({ message: "Email verified successfully. You can now log in." });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid or expired token" });
  }
});



module.exports = router;
