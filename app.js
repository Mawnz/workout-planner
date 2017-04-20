var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/app/partials');
app.engine('html', require('ejs').renderFile)

app.get('/', function(request, response) {
  response.render('app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});