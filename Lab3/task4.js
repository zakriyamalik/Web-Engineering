let originalArray = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

let arrayCopy = originalArray.slice();

console.log("Original Array:", originalArray);

let slicedArray = originalArray.slice(2, 7);

console.log("Sliced Array (indices 2 to 6):", slicedArray);

originalArray.splice(2, 2, "kiwi", "lemon", "mango");

console.log("Array after splice (remove 3rd and 4th elements, add three new elements):", originalArray);

console.log("Original Array Copy:", arrayCopy);

console.log("Modified Array:", originalArray);

originalArray.splice(-2, 2);

console.log("Array after removing the last two elements:", originalArray);

originalArray.splice(1, 0, "blueberry");

console.log("Array after inserting 'blueberry' at the second position:", originalArray);

let reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--)
{
    reversedArray.push(originalArray[i]);

}

console.log("Reversed Array:", reversedArray);

let len = originalArray.length;

let middle;

if (len % 2 === 1) 
{
    middle = originalArray[Math.floor(len / 2)];
}

else
 {
    middle = originalArray.slice(len / 2 - 1, len / 2 + 1);
}

console.log("Middle element(s):", middle);
