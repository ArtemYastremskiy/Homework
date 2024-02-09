// Задачі
// Ось для вас декілька простих задач на зазначені теми:


/*
**1. .isInteger()**

Дано низку чисел: `3.14, 5, -3, 0.5, 8`. Визначте, які з них є цілими числами.
*/

const numbers = [3.14, 5, -3, 0.5, 8]

/*
let integers = []

for (let num of numbers) {
    if (Number.isInteger(num)) {
        integers.push(num);
    };
};
*/


let integers = numbers.filter((i) => i.isInteger)
console.log(integers, '\n');

/*
**2. .isSafeInteger()**

Дано числа: `9007199254740991` і `9007199254740993`. Визначте, яке з них є безпечним цілим числом у JavaScript.
*/

console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isSafeInteger(9007199254740993), '\n');

/*
**3. .toExponential()**

Перетворіть число `12345.6789` в експоненційну форму з трьома знаками після коми.
*/

console.log(12345.6789.toExponential(3), '\n');


/*
**4. .toPrecision()**

Дано число `0.00789`. Перетворіть його у строкове представлення з трьома значущими знаками.
*/

console.log(0.00789.toPrecision(1));

//Надіюсь, ці задачі вам сподобалися!
