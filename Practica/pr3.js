/*
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
*/
/*
const str = "A man, a plan, a canal, Panama";

function deleteComas(str) {
    return str.split(',').join('')
};

console.log(deleteComas(str));
*/
/*
console.log((function helloWorld() {
    return 'Hello world!'
})());
*/

/*
function numbersOperetions(arr, command) {
    let result;

    if(command === 'sum') {
        result = arr.reduce((acc, value) => acc + value, 0);
    }else if(command === 'avg') {
        result = arr.reduce((acc, value) => acc + value, 0) / arr.length;
    } else {
        console.log('Невідома операція');
        return
    }

    return result
};

console.log(numbersOperetions([1, 2, 3, 4, 5], 'avg'));
*/

/*
function fullWhithBits(size) {
    
    let result = '' 

    for (let i = 0; i < size; i++) {
        result += i % 2 ? '0': '1'
    }

    //return '10'.repeat(Math.ceil(size / 2))
    //return ''.padStart(size, '10')
}

console.log(fullWhithBits(1));

console.log(''.padStart('17', '10'));
console.log('10'.repeat(Math.ceil('17' / 2)));
*/
/*

function realNumbers(n) {
   const countDivisibleBy = (divisor) => Math.floor(n / divisor)


    let divisibleBy2 = countDivisibleBy(2);
    let divisibleBy3 = countDivisibleBy(3);
    let divisibleBy5 = countDivisibleBy(5);
    let divisibleBy2and3 = countDivisibleBy(2*3);
    let divisibleBy2and5 = countDivisibleBy(2*5);
    let divisibleBy3and5 = countDivisibleBy(3*5);
    let divisibleBy2and3and5 = countDivisibleBy(2*3*5);

    return n - (divisibleBy2 + divisibleBy3 + divisibleBy5 - divisibleBy2and3 - divisibleBy2and5 - divisibleBy3and5 + divisibleBy2and3and5)
};

console.log(realNumbers(100));
*/

/*
const today = new Date()

let days = ['Понеділок', "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"]

console.log(days.at(today.getDay() - 1));
*/

// 'June 1, 2004 23:15:30 GMT+11:00'

/*const today = new Date()
const birthday = new Date('March 2, 2010 12:15:35 GMT+11:00')

const week = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
console.log(week.at(birthday.getDay() - 1));

const age = today.getFullYear() - birthday.getFullYear();
console.log(age);
*/
/*
function CalcAge(birthday) {
    const today = new Date();
    const myBirthday = new Date(birthday)
    const week = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

    const dayOfWeek  = myBirthday.getDay();
    console.log(week[dayOfWeek === 0 ? 6: dayOfWeek - 1]);

    let age = today.getFullYear() - myBirthday.getFullYear();
    const m = today.getMonth() - myBirthday.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < myBirthday.getDate())) {
        age --;
    }

    console.log(age);
}

CalcAge('March 2, 2010 12:15:35 GMT+11:00')

*/
/*
function intToDollar(n) {
    const usd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        useGrouping: false,
    });

    return usd.format(n)
}

console.log(intToDollar(4))
*/
/*
function formatMoney(amount){
    const usd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        useGrouping: false,
    });

    return usd.format(amount);
}
*/

    //return n == Number(n) ? '$' + Number(n): n > Number(n) ? '$' + n: n

    //return "$" + n.toFixed(2)

        /*
    if (n == Number(n)) {
        return '$' + Number(n)
    } else if(n > Number(n)) {
        return '$' + n
    }
    */


//console.log(intToDollar(0.947));
/*
/*
function objToString(obj) {
    result = [];
    for (let i = 0; i < Object.keys(obj).length; i++){
        result.push(`${Object.keys(obj)[i]} = ${Object.values(obj)[i]}`)
    }

    return result.join(',')
}

console.log(objToString({a: 1, b: '2'}));
*/

/*
function objToString(obj) {
    return Object.keys(obj) 
        .map(function(k) {return k + '=' + obj[k]})
        .join(',')  
}

console.log(objToString({a: 1, b: '2'}));
*/

/*

function fizzbuzz(arr) {
    return arr.map(i => i % 3 == 0 && i % 5 == 0 ? i = 'FizzBazz':
    i % 3 == 0 ? i = 'Fizz': 
    i % 5 == 0 ? i = 'Buzz': i)
};
*/
/*

function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;

console.log(fizzbuzz([3, 15, 7]));
*/


/*
function fizzbuzz(n) {
    let result = [];
    for(let i = 1; i <= n; i++){
      if(i % 3 === 0 && i % 5 === 0){
        result.push("FizzBuzz");
      } else if(i % 3 === 0){
        result.push("Fizz");
      } else if(i % 5 === 0){
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    return result;
}


console.log(fizzbuzz([3, 15, 7]));
*/

/*
function lastLength(str) {
    return str.trim().split(' ').reverse()[0].length
};


console.log(lastLength('Hello World '));
*/
const fs = require("fs")

/*
function sumCubes(n) {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        result += i**3
    };

    return `Куб числа ${n} = ${result}`
};

const input = fs.readFileSync("./input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
    console.log("Файл прочитаний");
});

//console.log(input);

fs.writeFile("./result.txt", sumCubes(Number(input)), "utf-8", (err, data) =>{
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
    console.log("Результат записаний");
});
*/


//function lastEvenNumbers(array, number) {
    /*
    result = []
    for (i of array.reverse()) {
        if (result.length == number) {
            break
        }
        
        if (i % 2 == 0) {
            result.push(i)
        }
    };

    return result.reverse()
    */

//    const evenNumbers = array.filter(num => num % 2 === 0).slice(-number)
//    return evenNumbers
//};

//console.log(lastEvenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));


/*
Pet project

Number 
FS
Object 
Array 
String
Data
*/





/*
var isValid = function(s) {
    const correspondense = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const count = target => s.split('').filter((elem) => elem == target).length
    
    for (let i of Object.entries(correspondense)) {
        if (count(i[0]) !== count(i[1])) {
            return false
        }
    };

    return true

};


console.log(isValid("(]"));


//console.log(i[0], count(i[0]), i[1], count(i[1]))
*/
/*

function factorial(n)
{
  if (n === 0){
    return 1
  } else if (n < 0 || n > 12) {
    throw new RangeError()
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return [result]
  };
};


console.log(factorial(5));
*/



//function divisibleRange(x, y, k) {
    /*
    const first = x % k === 0 ? x: x + (k-x % k);

    if (first > y) {
        return 0
    };

    const last = y - y % k
    return Math.floor((last - first) / k) + 1
*/
/*
    let divisibleByK = 0;

    for (let i = x; i !== y; i++) {
        if (i % k == 0) {
            divisibleByK += 1
        }
    };

    return divisibleByK
*/
//};

/*
function lengthLord(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].trim()
        arr[i].length <= i ? result.push(''): result.push(arr[i][i])
    }

    return result
};


console.log(lengthLord(['Hello', 'Cat', 'Dog', ' boh', 'fff']));
*/


/*
Complete the solution so that it returns true if it contains any
duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values 
are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/
