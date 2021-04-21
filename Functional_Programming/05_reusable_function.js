// Array Map
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
     return `${name}!`;
});

console.log(newArray);

// array filter
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
     Boolean(item)
);
console.log(truthyArray);

// array filter
// penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.

const student = [
     {
          name: "Harry",
          score: 60,
     },
     {
          name: "James",
          score: 88,
     },
     {
          name: "Ron",
          score: 72,
     },
     {
          name: "Danil",
          score: 95,
     },
];

const beasiswa = student.filter((student) => student.score > 85);
console.log(beasiswa);

// array forEach
const names = ["harry", "ron", "jeff", "thomas"];

names.forEach((name) => {
     if (name == "ron") {
          console.log("test");
     }
     console.log(`Hello, ${name}!`);
});
