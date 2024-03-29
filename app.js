var express = require('express');
var app = express();
var gimme = require('gimme-emoji');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/emoji', function(request, response) {
  response.send(gimme.anyEmoji().name);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
