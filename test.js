// Pair: Phionah Mumararungu and Nakintu Martha

const assert = require('chai').assert;
const fibonacci = require('./fibonacci');

describe('Fibonacci function', function () {
    it('should return 0 for fibonacci(0)', function () {
        assert.equal(fibonacci(0), 0);
    });

    it('should return 1 for fibonacci(1)', function () {
        assert.equal(fibonacci(1), 1);
    });

    it('should return 1 for fibonacci(2)', function () {
        assert.equal(fibonacci(2), 1);
    });
});