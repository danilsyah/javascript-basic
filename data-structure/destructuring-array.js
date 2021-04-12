const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

const [, , makananKetiga] = favorites;
console.log(makananKetiga);

let myFood = "Ice Cream";
let herFood = "noodles";

[myFood, herFood] = favorites;
console.log(myFood);
console.log(herFood);

// menukar nilai variabel / swap value

let a = 1;
let b = 2;

console.log("Sebelum Swap : ");
console.log("Nilai a: " + a);
console.log("Nilai b:" + b);

[a, b] = [b, a];
console.log("Sebelum Swap : ");
console.log("Nilai a: " + a);
console.log("Nilai b:" + b);

// default values
const languages = ["english"];
const [myLang, other = "sunda"] = languages;

console.log(myLang);
console.log(other);
