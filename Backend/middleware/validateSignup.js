const { body, validationResult } = require("express-validator");

const commonValidations = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords must match"),
  body("phone").notEmpty().withMessage("Phone number is required"),
];

const teacherValidations = [
  body("teacherId").notEmpty().withMessage("Teacher ID is required"),
  body("qualification").notEmpty().withMessage("Qualification is required"),
  body("specialization").notEmpty().withMessage("Specialization is required"),
  body("institution").notEmpty().withMessage("Institution name is required"),
  body("designation").notEmpty().withMessage("Designation is required"),
];

const studentValidations = [
  body("studentId").notEmpty().withMessage("Student ID is required"),
  body("dateOfBirth").notEmpty().withMessage("Date of birth is required"),
  body("gender").notEmpty().withMessage("Gender is required"),
  body("classGrade").notEmpty().withMessage("Class grade is required"),
  body("course").notEmpty().withMessage("Course is required"),
  body("section").notEmpty().withMessage("Section is required"),
  body("department").notEmpty().withMessage("Department is required"),
];

const validateSignup = (role) => {
  return [
    ...commonValidations,
    ...(role === "teacher" ? teacherValidations : []),
    ...(role === "student" ? studentValidations : []),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
};

module.exports = validateSignup;
