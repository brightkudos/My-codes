function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

function combination(n, r) {
    if (r > n) {
        return factorial(r)/(factorial(n) * factorial(r-n));
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Get user input
const n = 5;
const r = 4;

// Calculate and display the result
let result = combination(n, r);
console.log(`The combination C(${n}, ${r}) is: ${result}`);

