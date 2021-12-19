const express = require("express");
const mysql   = require("mysql");
const app = express();
require('dotenv').config

const server = app.listen(3000, () => {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

const dbConfig = {
  host: process.env.MYSQL_HOSTNAME,
  name: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME, 
  pass: process.env.MYSQL_PASSWORD,
}

const con = mysql.createConnection({
  host: dbConfig.host,
  database: dbConfig.name,
  user: dbConfig.user,
  password: dbConfig.pass,
})

con.connect((err) => {
  if(err) throw err;
  console.log('Mysql Connected');
})

const imageList = [
  {
    id: "001",
    name: "001.png",
    type: "png",
    dataUrl: "https://localhost:3000/public/images/001.png"
  },
  {
    id: "002",
    name: "002.png",
    type: "png",
    dataUrl: "https://localhost:3000/public/images/002.png"
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
