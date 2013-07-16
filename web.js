var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var fs = require('fs')
  //fs.readFileSync("index.html"), "utf-8");
  response.send(fs.readFileSync("index.html").toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
