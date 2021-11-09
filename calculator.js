const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/", function(req, res) {
      res.send("<h1>HELLO WORLD</h1>");
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});

