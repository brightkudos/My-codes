const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const average = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

console.log("The average is:", average);
