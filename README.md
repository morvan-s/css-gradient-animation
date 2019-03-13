# CSS-gradient-animation (syncronised)

This project aims to create, implement and deliver CSS files containing keyframes colour animation for CSS global var.
This little project will allow to easily use colour animation shared between different elements (background, border, text..).
Performances aren't guaranteed and will be benchmarked.

## Explaination :

Just import the css gradient animation file in your website and use the css
variable as following :

```
:root {
  --gradientColor: black;
  -webkit-animation: GradientColor 5s linear infinite;
  -moz-animation: GradientColor 5s linear infinite;
  -o-animation: GradientColor 5s linear infinite;
  animation: GradientColor 5s linear infinite;
}

body{
  background: var(--gradientColor);
}

h1{
  color: var(--gradientColor);
  border: 3px dashed var(--gradientColor);
}
```

An that's all, you should have a syncronised animated colour all over your elements.

## Example below :
![](https://github.com/morvan-s/css-gradient-animation/blob/master/gradient_red_blue.gif)
