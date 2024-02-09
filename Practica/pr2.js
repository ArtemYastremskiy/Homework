/*
const may = ['Jehn','Ger', 54, 'Vasy', 67, -1]

let filtered = []

for (i of may) {
    if (typeof i == 'number' && i > 0) {
        filtered.push(i);
    }
}

filtered = filtered.reduce((acc, elem) => acc + elem)

console.log(filtered);
*/

const { match } = require("assert");
const { log } = require("console");
const { stream } = require("undici-types");

//may.forEach((i) => if (typeof i == "number") && i filtered.push(i))
/*
const may = ['Jehn','Ger', 54, 'Vasy', 67, -1];

let sum = 0;

may.forEach(item => {
    if (typeof item === "number" && item > 0) {
        sum += item;
    }
});


console.log(sum);
*/

/*
const may = ['Jehn','Ger', 54, 'Vasy', 67, -1];
let result = "";

may.forEach(i => {
    if (typeof i === 'string') {
        result += i + ' ';
    }
});

result = result.trim()

console.log(result);
console.log(result.length);
*/

/*
const n = 'Hello 7 by vsi 9';
let filtered = [];


for (let i of n) {
    if (Number(i)) {
        filtered.push(+i);
    }
};


let result = filtered.reduce((acc, num) => acc + num);
console.log(result);



//console.log(result);
console.log(name);
const name = 'Vasia';
*/

/*
const n = 'hElLo WoRlD'

console.log(n.slice(0, 1).toLocaleUpperCase() + n.slice(1).toLocaleLowerCase());
*/
/*
const arr = ['hello', 'By', 'world', 'Day']

console.log(arr[Math.floor(Math.random() * arr.length)]);
//console.log(Math.random() * arr.length);
*/

/*
function reverseWords(str) {
    return str
        .split(' ')
        .map(i => i.split('').reverse().join(''))
        .join(' ');
};

console.log(reverseWords('Hello world'));
*/


const str = "A man, a plan, a canal, Panama";

function isPalindrime(str) {
    let cleaned = '';

    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }

    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrime(str));
