const express   = require('express');
const router    = express.Router();
const UserClass = require("../app/models/user.js");
const User      = new UserClass();

/* GET users listing. */
router.get('/', (req, res, next) => {
  (async () => {
    const users = await User.all(10);
    res.render('users/index', {
      title: 'User',
      users: users
    });
  })().catch(next);
});

router.get('/:id', (req, res, next) => {
  (async () => {
    const user = await User.find(req.params.id);
    res.render('users/show', {
      title: 'Profile',
      user: user
    });
  })().catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  (async () => {
    const user = await User.find(req.params.id);
    res.render('users/edit', {
      title: 'Profile Edit',
      user: user,
    });
  })().catch(next);
});

router.post('/:id/update', (req, res, next) => {
  (async () => {
    const params = req.body;
    await User.update(req.params.id, params.name, params.email, params.sex);
    res.render('users/update', {
      title: 'Profile Updated',
    })
  })().catch(next);
})

router.get('/:id/delete', (req, res, next) => {
  (async () => {
    await User.delete(req.params.id);
    res.render('users/delete', {
      title: 'Profile Deleted',
      message: 'The user has been deleted successfully.'
    })
  })().catch(next);
})

module.exports = router;
