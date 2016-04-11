var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// Config.
app.set('views', 'public/views');
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Routes.
app.get('/', function(req, res) {
    res.render('index');
});

// Respond to any GET request.
app.get('*', function(req, res) {
    res.status(404).end();
});


// Have the app listening on port 3000.
app.listen(port, function () {
    console.log('Listening on port 3000!');
});
