const Express = require('express');
const UserClass = require('../models/user.js');
const userValidator = require('../validators/user.js');
const { validationResult } = require('express-validator');
const siteConfig = require('../../config/environment/config.js');
const User = new UserClass();

module.exports = {
  index: async(req, res, next) => {
    try {
      const users = await User.all(10);
      res.render('users/index', {
        title: 'Express',
        siteName: siteConfig.title,
        users: users
      })
    } catch(e) {
      next(e);
    }
  },

