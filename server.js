
//Install express server
const express = require('express');
const path = require('path');

const fs = require('fs');

console.log(fs.readdirSync(__dirname + '/dist/'));

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/nebular-starter'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/nebular-starter/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);