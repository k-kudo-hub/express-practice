const mysql = require("mysql");

class DB {
  constructor(host, name, user, pass) {
    this.host = host,
    this.name = name,
    this.user = user,
    this.pass = pass
  }

  connect() {
    const con = mysql.createConnection({
      host: this.host,
      database: this.name,
      user: this.user,
      password: this.pass,
    })
    con.connect((err) => {
      if(err) throw err;
      console.log('Mysql Connected');
    })
  }
}

module.exports = DB;
