
// Pair: Phionah Mumararungu and Nakintu Martha

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Now we need the recursive/iterative approach
    return fibonacci(n - 1) + fibonacci(n - 2);
}


// Iterative approach (when we need to refactor our code)
// let a = 0, b = 1;
// for (let i = 2; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
// }
// return b;

module.exports = fibonacci;