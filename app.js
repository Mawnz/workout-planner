var port = Number(process.env.PORT || 8000)

var express = require('epxress');
var app = express();

app.use(epxress.static(__dirname + '/app'));

var server = app.listen(port, function(){
	console.log('Listening on port %d', server.address.port());
});