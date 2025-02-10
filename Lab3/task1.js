var varVariable = "Hello, world!";
let letVariable = 42;
const constVariable = true;

console.log("varVariable:", varVariable, "Type:", typeof varVariable);

console.log("letVariable:", letVariable, "Type:", typeof letVariable);
console.log("constVariable:", constVariable, "Type:", typeof constVariable);

letVariable = 100;
console.log("Updated letVariable:", letVariable);

console.log("Attempting to modify constVariable results in an error because const variables cannot be reassigned.");
let student = { name: "Alice", age: 20, isEnrolled: true };

console.log("Student Name:", student.name);

console.log("Student Age:", student.age);

console.log("Student Enrollment Status:", student.isEnrolled);
let numbers = [10, 20, 30, 40, 50];

console.log("Array Length:", numbers.length);

console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

[numbers[0], numbers[numbers.length - 1]] = [numbers[numbers.length - 1], numbers[0]];
console.log("Array after swapping first and last elements:", numbers);
