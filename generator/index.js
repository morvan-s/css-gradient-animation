// ----------------------------------------------------------------------------------------------------
// Generator for the css-gradient-animation project
// https://github.com/morvan-s/css-gradient-animation/tree/master
// ----------------------------------------------------------------------------------------------------
use strict;
var fs = require('fs');
var tools = require('./tools');

let a = '#164264';
let b = '#164264';
let file = `gradient_${a}_${b}.css`;

a = tools.hexToRgb(a);
b = tools.hexToRgb(b);


if(a !== null && b !== null){
  var data = 'New File Contents';


  fs.writeFile(file, data, function(err, data) {
    if (err) console.log(err);
    console.log('Success : Gradient animation file written. ',file);
  });
} else {
  console.log('Error : Wrong parameters');
}
