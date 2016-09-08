var express = require('express');
var app = express();
var path = require('path');

// send our index.html file to the user for the home page
app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/public'));

 // start the server
app.listen(8080);
console.log('8080 is the magic port!')