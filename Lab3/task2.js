let a = 10, b = 3;
console.log("a:", a, "b:", b);

console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);

console.log("Multiplication (a * b):", a * b);

console.log("Division (a / b):", a / b);

console.log("Modulus (a % b):", a % b);

console.log("Exponentiation (a ** b):", a ** b);


console.log("a == b:", a == b);

console.log("a != b:", a != b);

console.log("a === b:", a === b);

console.log("a !== b:", a !== b);

console.log("a > b:", a > b);

console.log("a < b:", a < b);

console.log("a >= b:", a >= b);

console.log("a <= b:", a <= b);

console.log("Logical AND (a > 5 && b < 5):", (a > 5 && b < 5));

console.log("Logical OR (a < 5 || b < 5):", (a < 5 || b < 5));

console.log("Logical NOT (!(a > b)):", !(a > b));

let isMultiple = (a % b === 0) ? "a is a multiple of b" : "a is not a multiple of b";

console.log("Ternary Operation:", isMultiple);

let comparisonResult = (a > b) ? "a is greater than b" : (a < b ? "a is less than b" : "a is equal to b");

console.log("Comparison result:", comparisonResult);
