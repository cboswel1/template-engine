
//List needed Dependencies 

const express = require("express");
const fs = require("fs");


//Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( express.static(__dirname + "/public" ));


//requiring in api and html from routing
require("./routing/api")(app); 
require("./routing/html")(app);



app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
  });