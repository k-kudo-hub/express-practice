const express   = require('express');
const router    = express.Router();
const userValidator = require('../app/validators/user.js');
const { validationResult } = require('express-validator');
const UserClass = require("../app/models/user.js");
const userController = require('../app/controllers/userController.js');
const User      = new UserClass();

/* GET users listing. */
router.get('/', userController.index);
router.get('/:id/edit', (req, res, next) => {
  (async () => {
    const user = await User.find(req.params.id);
    res.render('users/edit', {
      title: 'Profile Edit',
      user: user,
      errors: null
    });
  })().catch(next);
});

router.get('/:id', userController.show);
router.post('/:id/update', userValidator, userController.update)

router.get('/:id/delete', (req, res, next) => {
  (async () => {
    await User.delete(req.params.id);
    res.render('users/delete', {
      title: 'Profile Deleted',
      message: 'The user has been deleted successfully.'
    });
  })().catch(next);
})

module.exports = router;
