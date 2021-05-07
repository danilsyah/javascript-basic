const _ = require('lodash')

const myArray = [1,2,3,4,5,10]
const sum = _.sum(myArray)
const max = _.max(myArray)
const total = _.size(myArray)

console.log(sum)
console.log(max)
console.log(total)

const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
.finally(() => {
    console.log("Welcome!");
})