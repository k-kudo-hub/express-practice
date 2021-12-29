const Express = require('express');
const UserClass = require('../models/user.js');
const { validationResult } = require('express-validator');
const siteConfig = require('../../config/environment/config.js');
const User = new UserClass();

const userController = {
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

  show: async(req, res, next) => {
    try {
      const id   = Number(req.params.id);
      const user = await User.find(id);
      res.render('users/show', {
        title: 'Profile',
        user: user
      });
    } catch (e) {
      next(e);
    }
  },

  edit: async(req, res, next) => {
    try {
      const id = Number(req.params.id);
      const user = await User.find(id);
      res.render('users/edit', {
        title: 'Profile Edit',
        user: user,
        errors: null
      });
    } catch (error) {
      next(e);
    }
  },

  update: async(req, res, next) => {
    const results = validationResult(req);
    if(results.errors.length > 0) {
      (async () => {
        const user = await User.find(req.params.id);
        res.render('users/edit', {
          title: 'Profile Edit',
          user: user,
          errors: results.errors
        });
      })().catch(next);
    } else {
      (async () => {
        const params = req.body;
        await User.update(req.params.id, params.name, params.email, params.sex);
        res.render('users/update', {
          title: 'Profile Updated',
        });
      })().catch(next);
    }
  },

  delete: async(req, res, next) => {
    try {
      const id = Number(req.params.id);
      await User.destroy(id);
      res.render('users/delete', {
        title: 'Profile Deleted',
        message: 'The user has been deleted successfully.'
      });
    } catch (e) {
      next(e);
    }
  }
}
module.exports = userController;
