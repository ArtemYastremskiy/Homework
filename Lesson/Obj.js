// OBJ(obj) = Object
// typeof - Визначає тип даних
// Object != Object => Object(Object) === Object(Object)
// ... => Розархіватор даних
// const mass = [1,[2,3,[4],[8,[9,10,10,[]]]]] - Глубокий масив
// JSON.parse(JSON.stringify(people)) == {...people}

// const newr = [1, 2, 4];

// console.log(typeof newr);

// const n = new Number(15).toString();
// console.log(typeof n);
// ___________________
// const newr = [1, 2, 4];
// console.log(newr);
// newr[2] = 5
// console.log(newr);

// const newr = [1, 2, 4]; //  [1, 2, 4]
// const b = newr; // b = [1, 2, 4]
// b[2] = 5; // [1, 2, 5]
// console.log(newr); //

// const s = 'Vasy'
// const s1 = new String('Vasy')
// console.log(s === s1);

// const obj = new Object();
// console.log(typeof obj);
// const obj1 = {};
// console.log(typeof obj1);
// console.log(obj === obj1);

// const newr = [1, 2, 4]; //  [1, 2, 4]
// const b = newr; // b = [1, 2, 4]
// b[2] = 5; // [1, 2, 5]
// // console.log(newr); //
// console.log(b === newr);

// const newr = [1, 2, 4];
// const b = {};
// console.log(typeof newr === typeof b);

// const people = {
//     name: "Vasy",
//     fastName: "Pupkin",
//     age: 23,
//     hobies: [1, 2, 3, 4],
//     friends: {
//         name: "Kira",
//         age: 17,
//     },
// };

// console.log(people); // 
// console.log(JSON.parse(JSON.stringify(people)));
// console.log({...people});

// const mass = [1,[2,3,[4],[8,[9,10,10,[]]]]]


// const Karina = {...people};
// Karina.name = "Karina";
// console.log(Karina);

// const Karina = JSON.parse(JSON.stringify(people));
// Karina.name = "Karina";
// console.log(Karina);

// const arr = [{
//     name: 'Age'
// }]
// const b = []

// console.log(arr); // [ { name: 'Age' } ]
// console.log(b); // []
// console.log(typeof b); // object
// console.log(typeof arr); // object