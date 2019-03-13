// ----------------------------------------------------------------------------------------------------
// Generator for the css-gradient-animation project
// https://github.com/morvan-s/css-gradient-animation/tree/master
// ----------------------------------------------------------------------------------------------------
use strict;
let fs = require('fs');
let tools = require('./tools');

let a = '#164264';
let b = '#164264';
let file = `gradient_${a}_${b}.css`;

a = tools.hexToRgb(a);
b = tools.hexToRgb(b);


if(a !== null && b !== null){
  let data = 'New File Contents';
  let precision = 1;
  let cssContent = '';
  let cssAnimationEvolution = '';

  for (var i = 0; i <= 100; i += precision) {
    tools.colorGradient(a,b,i/100);
  }

  fs.writeFile(file, data, function(err, data) {
    if (err) console.log(err);
    console.log('Success : Gradient animation file written. ',file);
  });
} else {
  console.log('Error : Wrong parameters');
}
