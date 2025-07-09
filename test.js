const assert = require('chai').assert;
const fibonacci = require('./fibonacci');

describe('Fibonacci function', function () {
    it('should return 0 for fibonacci(0)', function () {
        assert.equal(fibonacci(0), 0);
    });
});