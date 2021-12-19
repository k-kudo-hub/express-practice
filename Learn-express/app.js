var express = require("express");
var mysql   = require("mysql");
var app = express();
require('dotenv').config

var server = app.listen(3000, () => {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

const db_name = process.env.MYSQL_DATABASE;
const db_pass = process.env.MYSQL_PASSWORD;
const db_host = process.env.MYSQL_HOSTNAME;
const db_user = process.env.MYSQL_USERNAME;
const con = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_pass,
  database: db_name
})

con.connect((err) => {
  if(err) throw err;
  console.log('Mysql Connected');
})

var imageList = [
  {
    id: "001",
    name: "001.png",
    type: "png",
    dataUrl: "https://localhost:3000/src/images/001.png"
  },
  {
    id: "002",
    name: "002.png",
    type: "png",
    dataUrl: "https://localhost:3000/src/images/002.png"
  }
]

app.get("/api/images/list", (req, res, next) => {
  res.json(imageList);
});

app.get("/api/images/:imageId", (req, res, next) => {
  const image = imageList.find(image => image.id === req.params.imageId);
  if(!image){
    return console.log("マッチする画像がありません。");
  }
  res.json(image);
})

app.set('view engine', 'ejs');

app.get("/", (req, res, next) => {
  res.render("index", {});
})
