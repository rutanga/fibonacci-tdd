
// Pair: Phionah Mumararungu and Nakintu Martha

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Now we need the recursive/iterative approach
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;