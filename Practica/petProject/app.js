const { log } = require("console");
const users = require("./bd");

const fs = require("fs");
const search = require("js-levenshtein");
const levenshtein = require("js-levenshtein");


//enter any data, that we know about user
let searchRequest = {
    "id": 0,
    "username": "Alex",
    "phone": "380042570127",
    "email": "alex@example.com",
}


let coincidences = {}
let total = {}

function main() {
    for (u of users) {
        coincidences[u] = []
        total[u] = []
        for (param of Object.entries(u)){
            //console.log(param[1], searchRequest[param[0]]);
            let distance = levenshtein(param[1], searchRequest[param[0]])
            console.log();
            /*   
            for (let request of Object.keys(searchRequest)) {
                let distance = levenshtein(param, request)
                if (distance) {
                    total += distance
                }*/
            }
            //console.log(u, param, '\n');
        }
        return total
};



console.log(main());


/*
const data = fs.readFileSync("C:/Users/Admin/Documents/GitHub/Homework/Practica/petProject/bd.json", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
*/
