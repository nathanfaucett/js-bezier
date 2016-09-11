bezier [![Build Status](https://travis-ci.org/nathanfaucett/js-bezier.svg?branch=master)](https://travis-ci.org/nathanfaucett/js-bezier)
======
bezier curves


```javascript
var bezier = require("@nathanfaucett/bezier");


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    p0 = [0, 0],
    p1 = [0, 512],
    p2 = [512, 512],
    p3 = [512, 0],
    v0 = [0, 0],
    v1 = [0, 0],
    t = 0;

ctx.beginPath();

bezier.cubic(v1, t, p0, p1, p2, p3);

for (t = 0; t < 1.01; t += 0.05) {
    v0[0] = v1[0];
    v0[1] = v1[1];
    bezier.cubic(v1, t, p0, p1, p2, p3);
    ctx.moveTo(v0[0], v0[1]);
    ctx.lineTo(v1[0], v1[1]);
}

ctx.stroke();
```
