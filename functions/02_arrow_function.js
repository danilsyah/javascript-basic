// function expression with arrow function
const sayHello = (greet, name) => {
     console.log(`${greet}, my name is  ${name}!`);
};

const sayName = (name, age) => {
     console.log(`Nama saya ${name}, my age ${age} `);
};

const jumlah = (bil1, bil2) => {
     return bil1 + bil2;
};

// jika hanya 1 parameter
const sayName1 = (name) => {
     console.log(`Nama saya ${name}`);
};

// tanpa parameter
const sayHello2 = () => {
     console.log("Hallo selamat pagi !");
};

// jika proses hanya 1 baris bisa hilangkan kurung kurawalnya
const sayName2 = (name) => console.log(`Nama saya ${name}`);
const multiply = (a, b) => a * b;

sayHello("hello gaesss", "danil");
sayName("haykal", 2.5);
sayName1("fika");
sayHello2();
sayName2("Naruto");
console.log("Hasil " + jumlah(2, 5));
console.log(multiply(5, 3));
