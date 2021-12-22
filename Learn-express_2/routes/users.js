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

});

module.exports = router;
