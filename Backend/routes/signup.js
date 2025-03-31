const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const validateSignup = require("../middleware/validateSignup");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post("/students", validateSignup("student"), async (req, res) => {
  console.log("Received Data (Student):", req.body);

  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      email,
      phone,
      password,
      confirmPassword,
      studentId,
      classGrade,
      course,
      section,
      department,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const checkUserSql = "SELECT * FROM students WHERE email = ? OR student_id = ?";
    db.query(checkUserSql, [email, studentId], async (err, result) => {
      if (err) {
        console.error("Error checking student:", err);
        return res.status(500).json({ error: "Database error" });
      }
      if (result.length > 0) {
        return res.status(400).json({
          message: result[0].email === email ? "Email is already taken" : "Student ID is already taken",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: "1d",
      });
      const verificationUrl = `http://localhost:3000/api/verify/student?token=${verificationToken}`;

      const insertSql = `INSERT INTO students (first_name, last_name, date_of_birth, gender, email, phone, password, student_id, class_grade, course, section, department, is_verified)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, false)`;

      db.query(
        insertSql,
        [
          firstName,
          lastName,
          dateOfBirth,
          gender,
          email,
          phone,
          hashedPassword,
          studentId,
          classGrade,
          course,
          section,
          department,
        ],
        async (err) => {
          if (err) {
            console.error("Error inserting student:", err);
            return res.status(500).json({ error: "Database error" });
          }

          await transporter.sendMail({
            from: `"EasyMart" <${process.env.EMAIL}>`,
            to: email,
            subject: "Verify your email",
            html: `<p>Hi ${firstName},</p>
                   <p>Welcome to our platform! 🎉</p>
                   <p>Please confirm your email:</p>
                   <a href="${verificationUrl}">Verify Email</a>`,
          });

          res.status(201).json({
            message: "Student signup successful. Please verify your email.",
          });
        }
      );
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/teachers", validateSignup("teacher"), async (req, res) => {
  console.log("Received Data (Teacher):", req.body);

  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phone,
      teacherId,
      qualification,
      specialization,
      institution,
      designation,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const checkUserSql = "SELECT * FROM teachers WHERE email = ? OR teacher_id = ?";
    db.query(checkUserSql, [email, teacherId], async (err, result) => {
      if (err) {
        console.error("Error checking teacher:", err);
        return res.status(500).json({ error: "Database error" });
      }
      if (result.length > 0) {
        return res.status(400).json({
          message: result[0].email === email ? "Email is already taken" : "Teacher ID is already taken",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: "1d",
      });
      const verificationUrl = `http://localhost:3000/api/verify/teacher?token=${verificationToken}`;

      const insertSql = `INSERT INTO teachers (first_name, last_name, email, password, phone, teacher_id, qualification, specialization, institution, designation, is_verified)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, false)`;

      db.query(
        insertSql,
        [
          firstName,
          lastName,
          email,
          hashedPassword,
          phone,
          teacherId,
          qualification,
          specialization,
          institution,
          designation,
        ],
        async (err) => {
          if (err) {
            console.error("Error inserting teacher:", err);
            return res.status(500).json({ error: "Database error" });
          }

          await transporter.sendMail({
            from: `"EasyMart" <${process.env.EMAIL}>`,
            to: email,
            subject: "Verify your email",
            html: `<p>Hi ${firstName},</p>
                   <p>Welcome to our platform! 🎉</p>
                   <p>Please confirm your email:</p>
                   <a href="${verificationUrl}">Verify Email</a>`,
          });

          res.status(201).json({
            message: "Teacher signup successful. Please verify your email.",
          });
        }
      );
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
