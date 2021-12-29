const express   = require('express');
const router    = express.Router();
const userValidator = require('../app/validators/user.js');
const userController = require('../app/controllers/userController.js');

/* GET users listing. */
router.get('/', userController.index);
router.get('/:id', userController.show);
router.get('/:id/edit', userController.edit);
router.post('/:id/update', userValidator, userController.update);
router.get('/:id/delete', userController.delete);

module.exports = router;
