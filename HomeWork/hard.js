// Cтворити обьект який буде навпаки чим obj тобото{  "Vasy": name , 24: age }
const obj = {
    name: "Vasy",
    age: 24,
    num: 1
};

const key = Object.keys(obj)
const value = Object.values(obj)


let resault = new Object()

for (let i = 0; i < key.length; i++) {
    resault[value[i]] = key[i];
}



console.log(resault);
