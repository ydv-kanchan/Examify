const { body, validationResult } = require('express-validator');

const validateLogin = [
    // Validate email field
    body('email').isEmail().withMessage('Invalid email format'),
    
    // Validate password field
    body('password').notEmpty().withMessage('Password is required'),

    // Handle validation results
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
       

        next();
        
    }
];

module.exports = validateLogin;