
const add = (num1, num2) => num1 + num2;
const sum = add(12, 13);
console.log(sum);

const add2 = (num1, num2, num3) => (num1 + num2) * num3;
const sum2 = add2(12, 13, 2);
console.log(sum2);

const getName = () => 'Dipankar Halder';
const name1 = getName();
console.log(name1);

// multi line arrow 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = sum * y;
    return diff;
}
const output = doMath(12, 5);
console.log(output);
