const user = {
     firstName: "Danil",
     lastName: "Syah Arihardjo",
     age: 27,
     isMarried: true,
     "jenis kelamin": "laki-laki",
};

let status;
if (user.isMarried) {
     status = "Menikah";
} else {
     status = "Bujang";
}

console.log(
     `Halo, nama saya ${user.firstName} ${user.lastName} saya seorang ${user["jenis kelamin"]}`
);
console.log(`Umur saya ${user.age} dan Saya ${status}`);

// mengubah nilai properti
user.age = 2.5;
user.firstName = "haykal";
user.lastName = "dafiansyah";
user["isMarried"] = false;

// menambahkan properti baru
user["hobi"] = ["coding", "movie", "sleeping"];

console.log(
     `nama ${user.firstName} ${user.lastName}, umur ${user.age} ${user.isMarried}`
);
console.log(user.hobi);
console.log(user);

//mengapus properti
delete user.lastName;
delete user.age;

console.log(user);
