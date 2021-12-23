const express = require('express');
const router  = express.Router();
const DB    = require("../public/javascripts/db.js");
const { dbConfig } = require("../config/environment/config.js");
const db    = new DB(dbConfig.host, dbConfig.name, dbConfig.user, dbConfig.pass);

/* GET users listing. */
router.get('/', function(req, res, next) {
  (async () => {
    const sql = "SELECT * FROM `users` LIMIT 10";
    const users = await db.query(sql);
    await console.log(users);
    res.render('users/index', {
      title: 'User',
      users: users
    });
  })().catch(next);
});

router.get('/:id', function(req, res, next) {
  (async () => {
    const id   = Number(req.params.id);
    const sql  = 'SELECT * FROM `users` WHERE id = ?';
    const user = await db.query(sql, [id]);
    await console.log(user);
    res.render('users/show', {
      title: 'Profile',
      user: user
    });
  })().catch(next);
});

router.get('/:id/edit', function(req, res, next) {
  (async () => {
    const id   = Number(req.params.id);
    const sql  = 'SELECT * FROM `users` WHERE id = ?';
    const user = await db.query(sql, [id]);
    await console.log(user);
    res.render('users/edit', {
      title: 'Profile Edit',
      user: user,
    });
  })().catch(next);
});
module.exports = router;
