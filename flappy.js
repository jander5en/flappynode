
var express = require('express');

var exp = express();
var server = exp.listen(5050);

exp.use(express.static('public'));

console.log("testing");
