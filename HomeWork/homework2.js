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

let allBooks = ["Гаррі Поттер і філософський камінь", "Відьмак", "Властелин Кілець", "1984"]

let journal = ["Іван: Гаррі Поттер і філософський камінь", "Олена: Відьмак", "Марія: 1984"]


// Завдання:
// Додати нову книгу до списку книг у бібліотеці.
allBooks.push("Портрет Дориана Грея")


// Знайти назву книги, яку взяв п'ятий читач.
console.log(journal.at(5));

