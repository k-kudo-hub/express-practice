var express = require("express");
var app = express();

var server = app.listen(3000, () => {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

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
