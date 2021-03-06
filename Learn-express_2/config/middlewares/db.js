const mysql        = require("mysql");

class DB {
  constructor(host, name, user, pass) {
    this.host = host;
    this.name = name;
    this.user = user;
    this.pass = pass;
  }

  _set() {
    const con = mysql.createConnection({
      host: this.host,
      password: this.pass,
      database: this.name,
      multipleStatements: true
    })
    return con;
  }

  test() {
    const con = this._set();
    con.connect((err) => {
      if(err) throw err;
      console.log('Mysql Connected');
    })
  }

  // https://qiita.com/soarflat/items/1a9613e023200bbebcb3
  // 1. asyncは呼び出されるとPromiseを返す。
  // 2. asyncが値をreturnすると、Promiseは戻り値をresolveする。
  // 3. asyncが例外等をthrowすると、その値をrejectする。

  async query(sql, value = []) {
    const data = await new Promise((resolve, reject) => {
      let con = this._set();
      con.query(sql, value, (error, results, fields) => {
        // errorがあったらrejectする
        if(error) reject(error);
        // errorがなければresolveで値を運び、処理を継続
        resolve({
          error: error,
          results: results,
          fields: fields
        });
      });
    });
    // asyncで値をreturn
    return data.results;
  }
}

module.exports = DB;
