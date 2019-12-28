'use strict';

// express package calls http messages
const express = require('express');
// creating a server/app with express we call invoke express()
const app = express();

// send statics websites from this folder
app.use(express.static('/public'));

// ROUTES are the addresss/locations that respond to a request
app.get('/homepage', function(request, response){
  response.sendFile(__dirname + 'index.html');
});

const PORT = process.env.PORT  || 3000;

// if I want the app to exist and run I'll tell it to listen
app.listen(PORT, function() {
  console.log('GOOD JOB!');
});