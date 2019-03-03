var fs = require("fs");
const express = require("express");
const app = express();
var https = require("https");
var privateKey = fs.readFileSync("./elema-ssl.key", "utf8");
var certificate = fs.readFileSync("elema-ssl.pem", "utf8");

var credentials = { key: privateKey, cert: certificate };

const appData = require("./data.json");
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;

const router = express.Router();

router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
router.get("/seller", function(req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});

router.get("/goods", function(req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});

router.get("/ratings", function(req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use("/api", router);

app.use(express.static("./dist"));

const port = process.env.PORT || 8000;

module.exports = https.createServer(credentials, app).listen(port);
