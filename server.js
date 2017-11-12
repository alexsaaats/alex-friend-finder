// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendlist = require('./app/data/friends.js');

//var htmlroutes = require("./app/routes/htmlRoutes.js")
// var apiroutes = require("./app/routes/apiRoutes.js")


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

//Start server listening
app.listen(3000, () => console.log('Friend finder app listening on port 3000.'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//ACTIONS AND APP

/* 
//TEST: 
app.get('/', function (req, res) {
  res.send('Hello World! CONFIRM 2')
})

*/

// Routes
// =============================================================

//Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
  console.log("homepage loaded");
});

//Route to the user survey
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  console.log("/survey called");
});

// Get 
app.get("/all", function(req, res) {
  console.log("/all called");
  res.json(friendlist);
});

/*

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

*/

// Create New Characters - takes in JSON input
app.post("/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var testquote = "World of quotes";
  console.log(testquote);
});



