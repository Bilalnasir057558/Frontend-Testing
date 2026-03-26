const assert = require('assert');
const addTwoAndSeven = require('./calculator');

test('addTwoAndSeven is a function', () => {
    assert.strictEqual(typeof addTwoAndSeven, 'function');
});

test('addTwoAndSeven returns 9', () => {
    assert.strictEqual(addTwoAndSeven(), 9);
});

