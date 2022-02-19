const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 34, 102);
// console.log(max);
const maxInArray = Math.max(...numbers)
console.log(maxInArray);

// create new array 
const numbers2 = [...numbers, 88];
console.log(numbers2);