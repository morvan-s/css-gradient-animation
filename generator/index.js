let credits = `
// -----------------------------------------------------------------------------
// Generator for the css-gradient-animation project
// Git : https://github.com/morvan-s/css-gradient-animation/tree/master
// Author : Stiven Morvan
// -----------------------------------------------------------------------------
`;

"use strict";
let fs = require('fs');
let tools = require('./tools');

let a = '#3f5efb';
let b = '#fa3636';
let file = `generated_gradient/gradient_${a}_${b}.css`;

a = tools.hexToRgb(a);
b = tools.hexToRgb(b);


if(a !== null && b !== null){
  let precision = 1;
  let cssAnimationEvolution = '';
  for (var i = 0; i <= 100; i += precision) {
    cssAnimationEvolution += '  ' + i + '%{--gradientColor:'
        + tools.colorGradient(a,b,i/100) + ';}\n';
  }

  let compatibilityKeyframes = ['@-webkit-keyframes GradientColor {',
    '@-moz-keyframes GradientColor {',
    '@-o-keyframes GradientColor {',
    '@keyframes GradientColor {'];

  let cssContent = compatibilityKeyframes.reduce((acc, current, id) => {
    if(id === 1) acc += '\n' + cssAnimationEvolution + '}\n';
    acc += '\n' + current + '\n' + cssAnimationEvolution + '}\n';
    return acc;
  });

  fs.writeFile(file, cssContent, function(err, data) {
    if (err) console.log(err);
    console.log('Success : Gradient animation file written. ',file);
  });
} else {
  console.log('Error : Wrong parameters');
}
