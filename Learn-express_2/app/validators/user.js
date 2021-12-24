const { check } = require('express-validator');

const userValidator = [
  
  check('name').not().isEmpty().withMessage('Enter your name.'),
  check('name').isLength({ max: 20 }).withMessage('Enter the name within 20 characters.'),
  check('email').not().isEmpty().withMessage('Enter your email.'),
  check('email').isEmail().withMessage('Must be a valid email.'),
  check('sex').not().isEmpty().withMessage('Select your gender.')
]

module.exports = userValidator;
