let myArray = ["danil", 36.6, 27, true, "Programming"];
console.log(myArray);

// mengakses nilai array
console.log(myArray[1]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length);

// menambahkan data ke array di element terakhir
myArray.push("JavaScript");
console.log(myArray);

// menghapus data array di element terakhir
myArray.pop();
console.log(myArray);

// mengeluarkan data element pertama dari array
myArray.shift();
console.log(myArray);

// menambahkan element di awal array
myArray.unshift("Apple");
myArray.unshift("Banana");
console.log(myArray);

// menghapus data tetapi element nya tidak di hapus pada array
delete myArray[1];
console.log(myArray);

// menghapus data dan element pada array
myArray.splice(1, 2); //menghapus dari index 1 sebanyak 2 elemen
console.log(myArray);
