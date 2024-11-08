// Prompt the user for input
const number = 16;

// Function to calculate factorial
function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers.";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Display the result
const result = factorial(number);
console.log("The factorial of " + number + " is: " + result);
console.log("The factorial of " + number + " is: " + result);
