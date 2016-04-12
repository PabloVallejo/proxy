var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var http = require('http');

// Config.
app.set('views', 'public/views');
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Routes.
app.get('/', function(req, res) {
    res.render('index');
});

// Users.
app.get('/users', function(req, res) {

    // Sandbox URL with users list.
    var url = 'http://proxy.getsandbox.com/users';

    // Make request.
    http.get(url, function(response) {
        var body = '';

        // Build body.
        response.on('data', function(chunk) {
            body += chunk;
        });

        // Send response.
        response.on('end', function() {
            var users = JSON.parse(body);
            return res.json(users);
        });
    }).on('error', function(e){
          res.json({'message': 'Could not reach Sandbox'});
    });
});

// Respond to any GET request.
app.get('*', function(req, res) {
    res.status(404).end();
});


// Have the app listening on port 3000.
app.listen(port, function () {
    console.log('Listening on port 3000!');
});
