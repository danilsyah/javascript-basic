// gaya penulisan kode imperatif
const names = ["Harry", "Ron", "Jeff", "Thomas"];
const newNameWithExcMark = [];

for (let i = 0; i < names.length; i++) {
     newNameWithExcMark.push(`${names[i]}!`);
}

console.log(newNameWithExcMark);

// ===============================================================================

// gaya penulisan deklaratif
const names1 = ["danil", "fika", "haykal", "Thomas"];
const newNamesWithExcMark1 = names1.map((name) => `${name}!`);
console.log(newNamesWithExcMark1);
