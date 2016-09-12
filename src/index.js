var vec2 = require("@nathanfaucett/vec2");


module.exports = bezier;


function bezier(out, points, t) {
    var n;

    if (t <= 0) {
        return vec2.copy(out, points[0]);
    } else if (t >= 1) {
        return vec2.copy(out, points[points.length - 1]);
    } else {
        n = points.length;

        switch (n) {
            case 0:
                return vec2.set(out, 0, 0);
            case 1:
                return vec2.copy(out, points[0]);
            case 2:
                return linear(out, points[0], points[1], t);
            case 3:
                return quadratic(out, points[0], points[1], points[2], t);
            case 4:
                return cubic(out, points[0], points[1], points[2], points[3], t);
            default:
                return vec2.copy(out, casteljau(points, n - 1, 0, t));
        }
    }
}


bezier.casteljau = casteljau;
bezier.linear = linear;
bezier.quadratic = quadratic;
bezier.cubic = cubic;


function casteljau(points, i, j, t) {
    var p0, p1;

    if (i === 0) {
        return points[j];
    } else {
        p0 = casteljau(points, i - 1, j, t);
        p1 = casteljau(points, i - 1, j + 1, t);

        return vec2.create(
            (1 - t) * p0[0] + t * p1[0],
            (1 - t) * p0[1] + t * p1[1]
        );
    }
}

function linear(out, p0, p1, t) {
    if (t <= 0) {
        return vec2.copy(out, p0);
    } else if (t >= 1) {
        return vec2.copy(out, p1);
    } else {
        return vec2.lerp(out, p0, p1, t);
    }
}

function quadratic(out, p0, p1, p2, t) {
    var one_min_t, one_t_sq, t_sq;

    if (t <= 0) {
        return vec2.copy(out, p0);
    } else if (t >= 1) {
        return vec2.copy(out, p2);
    } else {
        one_min_t = 1.0 - t;
        one_t_sq = one_min_t * one_min_t;
        t_sq = t * t;

        out[0] = one_t_sq * p0[0] + 2.0 * one_min_t * t * p1[0] + t_sq * p2[0];
        out[1] = one_t_sq * p0[1] + 2.0 * one_min_t * t * p1[1] + t_sq * p2[1];

        return out;
    }
}

function cubic(out, p0, p1, p2, p3, t) {
    var one_min_t, one_t_sq, one_t_cb, t_sq, t_cb;

    if (t <= 0) {
        return vec2.copy(out, p0);
    } else if (t >= 1) {
        return vec2.copy(out, p3);
    } else {
        one_min_t = 1.0 - t;
        one_t_sq = one_min_t * one_min_t;
        one_t_cb = one_t_sq * one_min_t;
        t_sq = t * t;
        t_cb = t_sq * t;

        out[0] = one_t_cb * p0[0] + 3 * one_t_sq * t * p1[0] + 3 * one_min_t * t_sq * p2[0] + t_cb * p3[0];
        out[1] = one_t_cb * p0[1] + 3 * one_t_sq * t * p1[1] + 3 * one_min_t * t_sq * p2[1] + t_cb * p3[1];

        return out;
    }
}