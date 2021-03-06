const express        = require('express');
const router         = express.Router();
const { siteConfig } = require("../config/environment/config.js");
const userValidator  = require('../app/validators/user.js');
const UserClass      = require("../app/models/user.js");
const User           = new UserClass();

/* GET home page. */
router.get('/', userValidator, (req, res, next) => {
  (async () => {
    const users = await User.all(10);
    res.render('index', {
      title: 'Express',
      siteName: siteConfig.title,
      users: users
    });
  })().catch(next);
});

module.exports = router;
