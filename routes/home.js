var path = require('path');
var express = require('express');
var route = express.Router();

route.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../web/index.html'));
})

module.exports = route;