// const express = require("express");

// const app = express();
// const appData = require("./data.json");
// const seller = appData.seller;
// const goods = appData.goods;
// const ratings = appData.ratings;

// const router = express.Router();

// router.all("*", function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", " 3.2.1");
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
// router.get("/seller", function(req, res) {
//   res.json({
//     errno: 0,
//     data: seller
//   });
// });

// router.get("/goods", function(req, res) {
//   res.json({
//     errno: 0,
//     data: goods
//   });
// });

// router.get("/ratings", function(req, res) {
//   res.json({
//     errno: 0,
//     data: ratings
//   });
// });

// app.use("/api", router);

// app.use(express.static("./dist"));

// const port = process.env.PORT || 8000;

// module.exports = app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Listening at http://localhost:" + port + "\n");
// });

var express = require("express");
var fs = require("fs");
var https = require("https");
var app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

https.createServer({
  key: fs.readFileSync("elema-ssl.key"),
  cert: fs.readFileSync("elema-ssl.pem")
}, app)
  .listen(8000, function () {
    console.log("Example app listening on port 3000! Go to https://localhost:3000/");
  });
