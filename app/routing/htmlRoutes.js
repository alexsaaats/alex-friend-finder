var express = require("express");
var router = express.Router();


//Homepage
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


/*
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});
*/


module.exports = router;