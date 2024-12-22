let numbers = prompt("Enter a list of numbers (comma-separated):").split(',').map(Number);
let names = prompt("Enter a list of names (comma-separated):").split(',');

console.log("Original numbers array:", numbers);
console.log("Original names array:", names);

let mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);

let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted numbers in reverse order:", sortedNumbers);

let sortedNames = names.sort();
console.log("Sorted names alphabetically:", sortedNames);

Original numbers array: [24, 65, 21, 5, 9, 32, 42, 80, 57]
Original names array: ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"]
Merged array: [24, 65, 21, 5, 9, 32, 42, 80, 57, "Zenvo", "Erica", "Jordie", "Alicia", "Redon"]
Sorted numbers in reverse order: [80, 65, 57, 42, 32, 24, 21, 9, 5]
Sorted names alphabetically: ["Alicia", "Erica", "Jordie", "Redon", "Zenvo"]
