var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(__dirname + '/dist/interview-demo'));

app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/dist/interview-demo/index.html'));
});

app.listen(process.env.PORT || 8080);