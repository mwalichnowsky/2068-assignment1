// Link to express and instantiate a new express object.
var express = require('express');
var app = express();

// Set up the GET route handler for the root page.
app.get('/', function(req, res, next)
{
    res.end('Hello World');
});

// Listen for events
app.listen(3000);
console.log('Express is running on port 3000');