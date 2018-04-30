// LOAD DATA


var friendsData = require("../data/friends");


// ROUTING
module.exports = function(app) {

  // URL where all the JSON data is shown
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  //User submits get posted to the server
  app.post("/api/friends", function(req, res) {

      friendsArray.push(req.body);
      res.json(true);

  });
};