var environment = require("@nathanfaucett/environment"),
    eventListener = require("@nathanfaucett/event_listener"),
    bezier = require("../../..");


eventListener.on(environment.window, "load", function() {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        p0 = [0, 0],
        p1 = [128, 256],
        p2 = [256, 512],
        p3 = [384, 256],
        p4 = [512, 0],
        p = [p0, p1, p2, p3, p4],
        v0 = [0, 0],
        v1 = [0, 0],
        t = 0;

    ctx.beginPath();

    bezier(v1, p, t);

    for (t = 0; t < 1; t += 0.1) {
        v0[0] = v1[0];
        v0[1] = v1[1];
        bezier(v1, p, t);
        ctx.moveTo(v0[0], v0[1]);
        ctx.lineTo(v1[0], v1[1]);
    }

    ctx.stroke();
});
