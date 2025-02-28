//Array Methods
// forEach()
const numbers = [1, 2, 3, 4];
var res=[]
numbers.forEach((num => {
    res.push(num * 2)})); // Output: 2, 4, 6, 8
console.log(res);


const arr1 = [1, 2, 3,[100,200,300]];
const arr2 = [...arr1]; // Creates a shallow copy for nested array
arr2[3][0]=500;
console.log(arr1);


// map()
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]

// filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10


// shift() //Deletes the element from start

const names = ["Alice", "Bob", "Charlie"];
const one = names.shift();
console.log(one); // Output: "Alice"
console.log(names); // Output: ["Bob", "Charlie"]

// unshift() //Add element from start

names.unshift("David");
console.log(names); // Output: ["David", "Bob", "Charlie"]

// push() add element at end

names.push("Eve");
console.log(names); // Output: ["David", "Bob", "Charlie", "Eve"]

// pop() deletes the element from end and returns it
const last = names.pop();
console.log(last); // Output: "Eve"
console.log(names); // Output: ["David", "Bob", "Charlie"]

// find() Returns the first element that satisfies the condition.
let xyz = [5,6,8,4,7,9,8]
const found = xyz.find(num => num > 2);
console.log(found); // output: 5

// findIndex() Returns the index of the first element that satisfies the condition.
const index = xyz.findIndex(num => num > 2);
console.log(index); // Output: 2

//merging two arrays:
const mer1 = [1, 2];
const mer2 = [3, 4];

const merged = [...mer1, ...mer2];
console.log(merged); // [1, 2, 3, 4]


//Destructuring
const arr = [10, 20, 30];

const [first, second] = arr;
console.log(first); // 10
console.log(second); // 20

// Destructuring of objects

const person = { name1: "Bob", age: 30 };

const { name1, age } = person;
console.log(name1); // "Bob"
console.log(age); // 30




// getElementById - Selects an element by its id.

let element = document.getElementById("myElement");

// getElementsByClassName - Selects elements by class name (returns an HTMLCollection).

let className = document.getElementsByClassName("myClass");

// getElementsByTagName - Selects elements by tag name.

let tagName = document.getElementsByTagName("div");
console.log(tagName)

// querySelector - Selects the first matching element.

let querySelect = document.querySelector(".myClass");

// querySelectorAll - Selects all matching elements.

let queryAll = document.querySelectorAll(".myClass");

// Modifying DOM Elements

// Changing Inner Content

// innerText - Changes only visible text.

document.getElementById("demo").innerText = "Hello, World!";

// innerHTML - Changes HTML inside an element.

document.getElementById("demo").innerHTML = "<strong>Hello, World!</strong>";

// textContent - Similar to innerText but includes hidden text.

document.getElementById("demo").textContent = "Hello, World!";

// Changing Attributes

let img = document.getElementById("myImage");
img.src = "new-image.jpg";
img.alt = "New Image";

// Changing Styles

document.getElementById("box").style.backgroundColor = "blue";
document.getElementById("box").style.fontSize = "20px";

// Creating and Removing Elements

// Creating Elements

let newElement = document.createElement("p");
newElement.innerText = "This is a new paragraph.";
document.body.appendChild(newElement);

// Removing Elements

let rm = document.getElementById("removeMe");
element.remove();

// Event Handling in DOM

// Events allow interaction with elements.

// Example: Button Click Event

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});

// Example: Mouse Over Event

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});
