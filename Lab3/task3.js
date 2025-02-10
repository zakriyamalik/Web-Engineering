let sentence = "The quick brown fox jumps over the lazy dog near the river";
 
console.log("Original Sentence:", sentence);

let firstFive = sentence.substring(0, 5);
let lastFive = sentence.substring(sentence.length - 5);

console.log("First five characters:", firstFive);
console.log("Last five characters:", lastFive);

let words = sentence.split(" ");
words[2] = "red";

let modifiedSentence = words.join(" ");

console.log("Modified sentence (third word replaced):", modifiedSentence);

console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());

let reversed = "";
for (let i = sentence.length - 1; i >= 0; i--) {
    reversed += sentence[i];
}

console.log("Reversed sentence:", reversed);

let countA = 0;
for (let char of sentence) {
    if (char.toLowerCase() === 'a') {
        countA++;
    }
}

console.log("Number of occurrences of 'a':", countA);

let firstSpaceIndex = sentence.indexOf(" ");

let secondSpaceIndex = sentence.indexOf(" ", firstSpaceIndex + 1);

let secondWord = sentence.substring(firstSpaceIndex + 1, secondSpaceIndex);

console.log("Second word:", secondWord);
