const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan");

if (isRaining) {
     console.log("Hari ini hujan, bawa payung");
} else {
     console.log("ahh ga bawa payung karena cuaca cerah");
}
console.log("Berangkat Kegiatan");
console.log("============================");

let x = 50;

if (x > 70) {
     console.log(x);
} else {
     console.log("nilai kurang dari 70");
}

console.log("============================");

let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
     greeting = "Good Morning";
} else if (language === "French") {
     greeting = "Bonjour";
} else if (language === "Japanese") {
     greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);
console.log("=============================");
// ternary operator
// condition ? true expression : false expression

const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

// falsy
/* 
Number 0
BigInt 0n
String kosong seperti “” atau ‘’
null
undefined
NaN, atau Not a Number
*/

let name = "";
if (name) {
     console.log(`Halo, ${name}`);
} else {
     console.log("Nama masih kosong");
}

let nilai = null;
if (nilai) {
     console.log("ada nilainya");
} else {
     console.log("tidak ada nilainya", nilai);
}
