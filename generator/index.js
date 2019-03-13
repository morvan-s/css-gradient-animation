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
  let precision = 1;
  let cssAnimationEvolution = '';
  for (var i = 0; i <= 100; i += precision) {
    let percent = i/100;
    cssAnimationEvolution += '  ' + percent + '%{--gradientColor:'
        + tools.colorGradient(a,b,percent) + ';}\n';
  }

  compatibilityKeyframes = ['@-webkit-keyframes GradientColor {',
    '@-moz-keyframes GradientColor {',
    '@-o-keyframes GradientColor {',
    '@keyframes GradientColor {'];

  let cssContent = compatibilityKeyframes.reduce((acc, current, id) => {
    if(id == 0) acc = '';
    acc += '\n' + cssAnimationEvolution + '}\n';
  });

  fs.writeFile(file, cssContent, function(err, data) {
    if (err) console.log(err);
    console.log('Success : Gradient animation file written. ',file);
  });
} else {
  console.log('Error : Wrong parameters');
}
