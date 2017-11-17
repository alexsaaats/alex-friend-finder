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
var PORT = process.env.PORT || 3000;

//Start server listening
app.listen(PORT, () => console.log('Friend finder app listening on port 3000.'));

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
app.get("/api/friends", function(req, res) {
  console.log("/api/friends called");
  res.json(friendlist);
});

// Save profile data to friends array
/* app.post("/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var testquote = "World of quotes";
  console.log(testquote);
});
*/

app.post('/api/friends', function(req, res){
  var obj = {};
  console.log('body: ' + JSON.stringify(req.body));
  res.send(req.body);

  //function getscores() {
  //  for(i=0, i < friendslist.length, i++) {
  //  }
  //}

});

  //characters.push(newcharacter);




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



