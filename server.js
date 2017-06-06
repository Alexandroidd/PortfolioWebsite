'use strict'
const express		= require('express');
const app			= express();
const port			= process.env.PORT || 3000;

// app.use(bodyParser.urlenconded({extended: true}));




//Serve static files from Public//
app.use(express.static(__dirname + '/public'));





//Start Server//
app.listen(process.env.PORT || 3000, function(){
	console.log('Server starting on, ' + port);
});