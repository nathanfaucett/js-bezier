var clamp = require("@nathanfaucett/clamp");


var bezier = exports;


function linear(out, t, p0, p1) {
    var p0x = p0[0],
        p0y = p0[1];

    t = clamp(t, 0.0, 1.0);

    out[0] = p0x + t * (p1[0] - p0x);
    out[1] = p0y + t * (p1[1] - p0y);

    return out;
}

function quadratic(out, t, p0, p1, p2) {
    var one_min_t, one_t_sq, t_sq;

    t = clamp(t, 0.0, 1.0);

    one_min_t = 1.0 - t;
    one_t_sq = one_min_t * one_min_t;
    t_sq = t * t;

    out[0] = one_t_sq * p0[0] + 2.0 * one_min_t * t * p1[0] + t_sq * p2[0];
    out[1] = one_t_sq * p0[1] + 2.0 * one_min_t * t * p1[1] + t_sq * p2[1];

    return out;
}

function cubic(out, t, p0, p1, p2, p3) {
    var one_min_t, one_t_sq, one_t_cb, t_sq, t_cb;

    t = clamp(t, 0.0, 1.0);

    one_min_t = 1.0 - t;
    one_t_sq = one_min_t * one_min_t;
    one_t_cb = one_t_sq * one_min_t;
    t_sq = t * t;
    t_cb = t_sq * t;

    out[0] = one_t_cb * p0[0] + 3 * one_t_sq * t * p1[0] + 3 * one_min_t * t_sq * p2[0] + t_cb * p3[0];
    out[1] = one_t_cb * p0[1] + 3 * one_t_sq * t * p1[1] + 3 * one_min_t * t_sq * p2[1] + t_cb * p3[1];

    return out;
}

bezier.linear = linear;
bezier.quadratic = quadratic;
bezier.cubic = cubic;