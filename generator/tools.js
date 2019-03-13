module.exports = {
  colorGradient : function (color1, color2, percentage) {
      var percentage2 = 1 - p1;
      var rgb = [Math.round(color1.r * p1 + color2.r * percentage2),
          Math.round(color1.g * p1 + color2.g * percentage2),
          Math.round(color1.b * p1 + color2.b * percentage2)];
      return rgb;
  },
  // See this stackoverflow comment : https://stackoverflow.com/a/5624139/9672414
  hexToRgb : function (hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
  },
};
