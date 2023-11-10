// ************************************************** 
// Task
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
// Note: There is no newline in the end (after the pattern ends)
// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:
// 1
// 1*2
// 1**3
// pattern(10): should return the following:
// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10


/*
function pattern(n) {
    let output = "";
    for (let i = 1; i <= n; i++) {
      // Add the starting "1"
      output += "1";
      
      // Add the appropriate number of asterisks
      for (let j = 1; j < i; j++) {
        output += "*";
      }
      
      // Add the line number if it is not the first line
      if (i > 1) {
        output += i;
      }
      
      // Add a newline if it is not the last line
      if (i < n) {
        output += "\n";
      }
    }
    return output;
  }


console.log(pattern(10));
*/
/*
// Task 2
const Password1 = 'GobGh2uBYr3v&bd8!n84bGFT@!'
const Password2 = 'Gobgh2ubyR3v&bd8!n84BGfT@!'

console.log(Password1.toLowerCase() == Password2.toLowerCase());
*/

// Task 3
// DESCRIPTION:
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Input coordinates fit in range  −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.


/*
function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2))
}

let pointA = {x: 1, y: 2};
let pointB = {x: 4, y: 6};

let distance = distanceBetweenPoints(pointA, pointB);

console.log(distance);
*/

// Task 4
/*
const arr = [1,2,5,9, ' Hello ', 1] // Отримай суму всіх чисел в масиву

function sum(arr) {
    for (let i of arr) {
        if (typeof i != 'number') {
            delete arr[arr.indexOf(i)]
        }
    }

    return arr.reduce((acc, num) => acc+num)
}

console.log(sum(arr));
*/


const sum = arr.reduce((accumulator, currentValue) => {
    // Перевіряємо, чи є елемент числом за допомогою функції `typeof`
    if (typeof currentValue === 'number') {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
