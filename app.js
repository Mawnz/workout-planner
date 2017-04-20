var express = require('express');
var app = express();

app.use(epxress.static(__dirname + '/app'));

app.listen(process.env.PORT || 3000);