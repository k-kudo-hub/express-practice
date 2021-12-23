const DB = require("../../public/javascripts/db.js");
const { dbConfig } = require("../../config/environment/config.js");
const db = new DB(dbConfig.host, dbConfig.name, dbConfig.user, dbConfig.pass);

class User {
  constructor(name = '', email = '', sex = '', paid = '') {
    this.name = name;
    this.email = email;
    this.sex = sex;
    this.paid = paid;
  }

  all(limit = null) {
    let sql = 'SELECT * FROM `users`';
    if(limit) sql += ` LIMIT ${ Number(limit) }`;
    const users = db.query(sql);
    return users;
  }

  find(user_id) {
    if(!user_id) throw new Error('User id is not defined.');
    const sql = 'SELECT * FROM `users` WHERE id = ?';
    const id  = Number(user_id);
    return db.query(sql, [id]);
  }

  update(user_id, name, email, sex) {
    const sql = 'UPDATE `users` SET name = ?, email = ?, sex = ? WHERE id = ?';
    const id  = Number(user_id);
    return db.query(sql, [name, email, sex, id]);
  }

  delete(user_id) {
    if(!user_id) throw new Error('User id is not defined.');
    const sql = 'DELETE FROM `users` WHERE id = ?';
    const id  = Number(user_id);
    return db.query(sql, [id]);
  }
}

module.exports = User;
