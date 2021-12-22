const express        = require('express');
const router         = express.Router();
const DB             = require("../public/javascripts/db.js");
const { siteConfig, dbConfig } = require("../config/environment/config.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  (async () => {
    const db    = new DB(dbConfig.host, dbConfig.name, dbConfig.user, dbConfig.pass);
    const sql   = "SELECT * FROM `users` LIMIT 10";
    const users = await db.query(sql);
    res.render('index', {
      title: 'Express',
      siteName: siteConfig.title,
      users: users
    });
  })().catch(next);
});

module.exports = router;
