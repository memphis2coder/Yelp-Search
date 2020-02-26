const express = require('express');
const app = express();
const path = require('path');

// set up path to css, js, and images
app.use('/static', express.static(path.join(__dirname)))

// set the home route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

// start up the server on port 3000
app.listen(3000, function(req, res) {
    console.log('Server has started on port 3000!')
});