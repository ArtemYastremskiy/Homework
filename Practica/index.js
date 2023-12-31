// n перевірити що ця змінна створена  if
// const n = false;
// if(!n){
//     console.log('Такого не має');
// }else{
//     console.log('Така є');
// }

// n перевірити що ця змінна створена  try

// //const n = 1
// try {
//     console.log(n);
// } catch (error) {
//     console.log('Сталась помилка');
// }

// Отримати суму hobbies у Lisa та Rose та повернути результат 
// Lisa => 66
// Rose => 15

// const obj = {
//     name: "Lisa",
//     age: 25,
//     hobbies: [1, 9, 1, 6, 2, 5, 2, 7, 9, 1, 10, 4],
//     friend: {
//         name: "Rose",
//         age: 25,
//         hobbies: []//[1, 9, 1, 6, 2, 4],
//     },
// };



// function sum(obj) {
//     try {
//         let sum1 = `Lisa: ${obj.hobbies.reduce((acc, num) => acc + num)}`
//         let sum2 = `Rose: ${obj.friend.hobbies.reduce((acc, num) => acc + num)}`

//         return `${sum1}\n${sum2}`
//     }catch (error){
//         return "Помилка"
//     }

// }

// console.log(sum(obj));

// console.log(`Lisa: ${obj.hobbies.reduce((acc, num) => acc + num)}`);
// console.log(`Rose: ${obj.friend.hobbies.reduce((acc, num) => acc + num)}`);


//*********************************************************************************** */
// Завдання: Створити об'єкт "Автомобіль" та реалізувати декілька методів для нього.

// Опис:

// Створіть об'єкт автомобіль з такими властивостями:

// марка (наприклад, "Toyota")
// модель (наприклад, "Corolla")
// рік (наприклад, 2020)
// кілометраж (наприклад, 5000)
// включений (булева змінна, яка показує, чи заведений автомобіль)
// Додайте до об'єкту такі методи:

// завести: якщо автомобіль не заведений, то змінює включений на true, інакше виводить повідомлення "Автомобіль вже заведений".
// вимкнути: якщо автомобіль заведений, то змінює включений на false, інакше виводить повідомлення "Автомобіль вже вимкнений".
// проїхати: приймає кількість кілометрів як аргумент і додає їх до кілометраж. Якщо автомобіль вимкнений, виводить повідомлення "Заведіть автомобіль, щоб проїхати".



const auto = {
    mark: "Toyota",
    model: "Corolla",
    year: "2020",
    kilometers: 5000,
    isTurnedOn: true,

    start: function() {
        if(this.isTurnedOn) {
            return "Автомобіль вже заведений"
        } else {
            this.isTurnedOn = true
        }
    },

    finish: function() {
        if (!this.isTurnedOn) {
            return "Автомобіль вже вимкнений"
        }else {
            this.isTurnedOn = false
        }
    },
    
    ride: function(distance) {
        this.kilometers += distance
    }
}
