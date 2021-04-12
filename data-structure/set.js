const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);
console.log(numberSet.size);

// menambahkan data
numberSet.add(5);
numberSet.add(7);

console.log(numberSet);

// menghapus data
numberSet.delete(7);
console.log(numberSet);
