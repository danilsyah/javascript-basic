const profile = {
     firstName: "Danil",
     lastName: "Syah",
     age: 27,
};

// nama variabel harus sama dengan nama properti
// const { firstName, lastName, age } = profile;
// console.log(firstName, lastName, age);

// const { lastName } = profile;
// console.log(lastName);

// let firstName = "haykal";
// let age = 2.5;

// menginisialisasi nilai baru melalui object destruction
// ({ firstName, age } = profile);

// console.log(firstName, age);

// default value
const { firstName, age, isMale = true } = profile;

console.log(firstName);
console.log(isMale);

// mengganti nama variabel local properti
const { firstName: namaDepan, lastName: namaBelakang, age: umur } = profile;
console.log(`${namaDepan} ${namaBelakang} umur : ${umur}`);
