var express = require('express');
var app = express();


//set up server
app.use(express.static(__dirname + '/app'));


app.listen(process.env.PORT || 3000);