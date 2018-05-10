var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 4000;

var app = express();

// TODO: maybe add this back?
// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

require("./routes/html-routes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
