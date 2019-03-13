"use strict";
var fs = require('fs');
var tools = require('./tools');
let credits =
`/*-----------------------------------------------------------------------------
-- Css-gradient-animation project
-- Git : https://github.com/morvan-s/css-gradient-animation/tree/master
-- Author : Stiven Morvan
------------------------------------------------------------------------------*/
`;

let color1 = '#3f5efb';
let color2 = '#fa3636';

let file = `generated_gradient/gradient_${color1}_${color2}.css`;
color1 = tools.hexToRgb(color1);
color2 = tools.hexToRgb(color2);

if(color1 !== null && color2 !== null){
  let precision = 1;
  let cssAnimationEvolution = '';
  for (var i = 0; i < 50; i += precision)
    cssAnimationEvolution += '  ' + i + '%{--gradientColor:'
        + tools.colorGradient(color1,color2,i*2/100) + ';}\n';
  for (var i = 50; i <= 100; i += precision)
    cssAnimationEvolution += '  ' + i + '%{--gradientColor:'
        + tools.colorGradient(color2,color1,(i-50)*2/100) + ';}\n';

  let compatibilityKeyframes = ['@-webkit-keyframes GradientColor {',
    '@-moz-keyframes GradientColor {',
    '@-o-keyframes GradientColor {',
    '@keyframes GradientColor {'];

  let cssContent = credits;
  cssContent += compatibilityKeyframes.reduce((acc, current, id) => {
    if(id === 1) acc += '\n' + cssAnimationEvolution + '}\n';
    acc += '\n' + current + '\n' + cssAnimationEvolution + '}\n';
    return acc;
  });

  fs.writeFile(file, cssContent, function(err, data) {
    if (err) console.log(err);
    console.log('Success : Gradient animation file has been written. ',file);
  });
} else {
  console.log('Error : Wrong parameters');
}
