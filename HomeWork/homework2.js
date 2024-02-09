/*
1) вивчит методи списків 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
new Array, []
of  => (1, 2, 3) > [1, 2, 3], ('1', '2', '3') > [1, 2, 3]
from  => ('foo', (x) => x.toUpperCase()) > ['F', 'O', 'O']
at => arr.at(index) > index value. Example: [1, 2, 3].at(2) => 3
concat => arr1.concat(arr2, arr3, arr4, [...]) => arr1 + 2 + 3 + 4
every => arr.every(test) > is check passed (every el-s), (bool). Example: [9674, 528].every((x) => x % 2 === 0) > true
fill => arr.fill(value, start, end) Eample: [1, 2, 3, 4, 5, 6, 7, 8, 9].fill(3, 4, 7) > [1, 2, 3, 4, 3, 3, 3, 3, 8, 9]
filter => arr.filter(test)) Example: [34, 896, 401, 77, 29, 111, 995, 4].filter(num => num > 100)
some => arr.every(test) > is check passed (1+ el-s) (bool). Example: [9674, 528].every((x) => x % 2 === 0) > true
find => arr.every(test) > VALUE of 1-st element, passsed the test. Example: [9674, 528].every((x) => x % 2 === 0) > true
findIndex => arr.every(test) >  INDEX of 1-st element, passsed the test. Example: [9674, 528].every((x) => x % 2 === 0) > true
flat => 
forEach => 
map => 
reduce => 
reduceRight => 
includes => 
indexOf => 
isArray => 
join => 
lastIndexOf => 
keys => 
reverse => 
pop => 
push => 
shift => 
unshift => 
slice => 
splice => 
sort => 
toString => 
values => 
entries => 
keys => 
*/

const { log } = require("console");


/*
Task 1 
text = 'Hello my name Mer old 19, my sister Lisa 24 old' => 19, 24 => 19 + 24 => 43'
console.log(result) // 43
*/


/*
const inputString = 'Hello my name Mer old 19, my sister Lisa 24 old'

let numbers = 
*/


/*
Task 2
Задача: Управління бібліотекою
Ви - адміністратор бібліотеки. У вашій бібліотеці є ряд книг, і ви хочете вести записи про те, які книги взяли читачі.

Вхідні дані:
Список книг у бібліотеці: кожна книга описана як рядок, що містить назву книги.
Журнал взяття книг: список рядків, де кожен рядок представляє читача та книгу, яку він взяв.
Завдання:
Додати нову книгу до списку книг у бібліотеці.
Знайти назву книги, яку взяв п'ятий читач.
Створити новий список книг, які ще не були взяті читачами.
З'єднайте списки книг двох різних бібліотек.
Приклад:
Вхідні дані:
Список книг:
"Гаррі Поттер і філософський камінь"
"Відьмак"
"Властелин Кілець"
"1984"
Журнал взяття книг:
"Іван: Гаррі Поттер і філософський камінь"
"Олена: Відьмак"
"Марія: 1984"
Тепер спробуйте реалізувати рішення для цієї задачі, використовуючи вказані методи.
*/

// Вхідні дані:

//let allBooks = ["Гаррі Поттер і філософський камінь", "Відьмак", "Властелин Кілець", "1984"]

////let journal = ["Іван: Гаррі Поттер і філософський камінь", "Олена: Відьмак", "Марія: 1984"]


// Завдання:
// Додати нову книгу до списку книг у бібліотеці.
//allBooks.push("Портрет Дориана Грея")


// Знайти назву книги, яку взяв п'ятий читач.
//console.log(journal.at(5));


/*The point is that a natural number N (1 <= N <= 10^9) is given. 
You need to write a function which finds the number of 
natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].*/

/*
function realNumbers(n) {
	//const c = (n / 30 >> 0)
	let sum = 0

	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
			sum++;
		}
	}

	return sum
	
	
	// [2, 3, 5].map(i => (n + (n % i)) / i) 
	// (n / 2 / 3 * 2 / 5 * 4)
};


console.log(realNumbers(1));

*/
/*
const countNumbersNotDivisibleBy235 = n => Array.from({length: n}, (_, i) => i+1).filter(num => num % 2 != 0 && num % 3 != 0 && num % 5 != 0).length

console.log(countNumbersNotDivisibleBy235(40));
*/


/*
const chai = require("chai");
const assert = chai.assert;

describe("Basic Tests:", function() {

  it("tests", function() {
    let arr = [
      [5, 1], 
      [10, 2], 
      [20, 6],
      [30, 8],
      [40, 10],
      [55, 15],
      [66, 17],
      [75, 20],
      [100, 26]
    ];
    for(let [n, expected] of arr){
      let actual = realNumbers(n);
      assert.strictEqual(actual, expected, `n = ${n} `);
    }
  });

});*/


/*
function is_prime(num)
{

	if (num <= 3)
  
	{
  
		return num > 1;
  
	}
  
	else if (num % 2 == 0 || num % 3 == 0)
  
	{
  
		return false
  
	}
  
	else
  
	{
  
		for (let i = 5; i * i <= num; i += 6)
  
		{
  
		  if (num % i == 0 || num % (i + 2) == 0)
  
		  {
  
			  return false
  
		  }
  
		}
  
		return true
  
	}
  
  }
*/
// console.log(is_prime(89));
/*
Let's take the number 5 as an example:

1 - doesn't divide integer by 2, 3, and 5
2 - divides integer by 2
3 - divides integer by 3
4 - divides integer by 2
5 - divides integer by 5
Answer: 1

because only one number doesn't divide integer by any of 2, 3, 5
*/

/*
DESCRIPTION:
Write a function that takes a string and an an integer n as parameters
 and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']*/


longWords = (str, n) => str.split(' ').filter(i => i.length > n);
console.log(longWords("The quick brown fox jumps over the lazy dog", 4));


/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Test Cases", function() {
  it("basic example", function() {
     assert.deepEqual(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps']);
  });
});
*/
