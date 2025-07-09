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

    it('should return 2 for fibonacci(3)', function () {
        assert.equal(fibonacci(3), 2);
    });

    it('should return 3 for fibonacci(4)', function () {
        assert.equal(fibonacci(4), 3);
    });

    it('should return 5 for fibonacci(5)', function () {
        assert.equal(fibonacci(5), 5);
    });

    it('should return 8 for fibonacci(6)', function () {
        assert.equal(fibonacci(6), 8);
    });

    it('should return 13 for fibonacci(7)', function () {
        assert.equal(fibonacci(7), 13);
    });
});