// impure function contoh 1
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
     return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4));
PI = 5;
console.log(hitungLuasLingkaran(4));
// ==============================================================
// pure function contoh 1
const hitungLuasLingkaran1 = (jariJari) => {
     return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran1(4));
console.log(hitungLuasLingkaran1(4));
console.log(hitungLuasLingkaran1(8));
console.log(hitungLuasLingkaran1(8));

// contoh impure function contoh 2
const createPersonWithAge = (age, person) => {
     person.age = age;
     return person;
};

const person = {
     name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);
console.log({ person, newPerson });

// ubah ke pure function contoh 2
const createPersonWithAge1 = (age, person) => {
     return { ...person, age };
};

const person1 = {
     name: "danil",
};

const newPerson1 = createPersonWithAge1(18, person1);
console.log({
     person1,
     newPerson1,
});
