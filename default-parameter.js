

function addNumber(num1, num2 = 0) {
    const total = num1 + num2;
    return total;
}
const result = addNumber(15);
console.log(result);

// 
function fullName(first, last = 'halder') {
    const name = first + ' ' + last;
    return name;
}

const name = fullName('soju');
console.log(name);