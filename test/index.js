var tape = require("tape"),
    bezier = require("..");


tape("bezier(out, points, t)", function(assert) {
    var v = [0, 0],
        points = [
            [0, 0],
            [0.1, 0.25],
            [0.2, 0.5],
            [0.6, 0.5],
            [0.8, 0.25],
            [1, 0]
        ];
    assert.deepEquals(bezier(v, points, 0.25), [0.15771484375, 0.2783203125]);
    assert.deepEquals(bezier(v, points, 0.5), [0.421875, 0.390625]);
    assert.deepEquals(bezier(v, points, 0.75), [0.73095703125, 0.2783203125]);
    assert.end();
});

tape("bezier.linear(out, p0, p1, t)", function(assert) {
    var v = [0, 0];
    assert.deepEquals(bezier.linear(v, [0, 0], [1, 1], 0.25), [0.25, 0.25]);
    assert.deepEquals(bezier.linear(v, [0, 0], [1, 1], 0.5), [0.5, 0.5]);
    assert.deepEquals(bezier.linear(v, [0, 0], [1, 1], 0.75), [0.75, 0.75]);
    assert.end();
});

tape("bezier.quadratic(out, p0, p1, p2, t)", function(assert) {
    var v = [0, 0];
    assert.deepEquals(bezier.quadratic(v, [0, 0], [0, 1], [1, 0], 0.25), [0.0625, 0.375]);
    assert.deepEquals(bezier.quadratic(v, [0, 0], [0, 1], [1, 0], 0.5), [0.25, 0.5]);
    assert.deepEquals(bezier.quadratic(v, [0, 0], [0, 1], [1, 0], 0.75), [0.5625, 0.375]);
    assert.end();
});

tape("bezier.cubic(out, p0, p1, p2, p3, t)", function(assert) {
    var v = [0, 0];
    assert.deepEquals(bezier.cubic(v, [0, 0], [0, 0.5], [1, 0.5], [1, 0], 0.25), [0.15625, 0.28125]);
    assert.deepEquals(bezier.cubic(v, [0, 0], [0, 0.5], [1, 0.5], [1, 0], 0.5), [0.5, 0.375]);
    assert.deepEquals(bezier.cubic(v, [0, 0], [0, 0.5], [1, 0.5], [1, 0], 0.75), [0.84375, 0.28125]);
    assert.end();
});