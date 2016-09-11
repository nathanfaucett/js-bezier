var tape = require("tape"),
    bezier = require("..");


tape("bezier.linear(out, t, p0, p1)", function(assert) {
    var v = [0, 0];
    assert.deepEquals(bezier.linear(v, 0.25, [0, 0], [1, 1]), [0.25, 0.25]);
    assert.deepEquals(bezier.linear(v, 0.5, [0, 0], [1, 1]), [0.5, 0.5]);
    assert.deepEquals(bezier.linear(v, 0.75, [0, 0], [1, 1]), [0.75, 0.75]);
    assert.end();
});

tape("bezier.quadratic(out, t, p0, p1, p2)", function(assert) {
    var v = [0, 0];
    assert.deepEquals(bezier.quadratic(v, 0.25, [0, 0], [0, 1], [1, 0]), [0.0625, 0.375]);
    assert.deepEquals(bezier.quadratic(v, 0.5, [0, 0], [0, 1], [1, 0]), [0.25, 0.5]);
    assert.deepEquals(bezier.quadratic(v, 0.75, [0, 0], [0, 1], [1, 0]), [0.5625, 0.375]);
    assert.end();
});

tape("bezier.cubic(out, t, p0, p1, p2, p3)", function(assert) {
    var v = [0, 0];
    assert.deepEquals(bezier.cubic(v, 0.25, [0, 0], [0, 0.5], [1, 0.5], [1, 0]), [0.15625, 0.28125]);
    assert.deepEquals(bezier.cubic(v, 0.5, [0, 0], [0, 0.5], [1, 0.5], [1, 0]), [0.5, 0.375]);
    assert.deepEquals(bezier.cubic(v, 0.75, [0, 0], [0, 0.5], [1, 0.5], [1, 0]), [0.84375, 0.28125]);
    assert.end();
});