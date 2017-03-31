let BBPromise = require('bluebird');
let bodyParser = require('body-parser');
let express = require('express');
let nunjucks = require('nunjucks');

// Server config
let app = express();
let port = process.env.PORT || 8080;

// Nunjucks config
nunjucks.configure('templates', {
  autoescape: true,
  watch: true,
  express: app
});

// application middleware
// 3 arguments: request handler
app.use(function(request, response, next) {
  console.log('A request went by', request.path);
  next();     // go to the next middleware
});

// 4 arguments: error request handler
app.use(function(error, request, response, next) {
  console.error('Something bad happened', request.path, error);
  next(error);
});

// Tell server what to do when it GETs '/'
app.get('/', function(request, response){  
  response.render('index.html', {
    message: 'This is my message'
  });
});

app.listen(port, () => console.log('Listening to port 8080'));
