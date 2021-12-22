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
      database: this.name,
      user: this.user,
      password: this.pass,
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

  // READ! 動いているが理解していない!
  // TODO: Promiseの基本を理解したい

  // https://qiita.com/soarflat/items/1a9613e023200bbebcb3
  // 1. asyncは呼び出されるとPromiseを返す。
  // 2. asyncが値をreturnすると、Promiseは戻り値をresolveする。
  // 3. asyncが例外等をthrowすると、その値をrejectする。

  async query(sql) {
    const data = await new Promise((resolve, reject) => {
      // このletは怪しい?非同期的に処理されるリスク?
      let con = this._set();
      con.query(sql, (error, results, fields) => {
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
