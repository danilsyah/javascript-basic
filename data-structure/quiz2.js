const evenNumber = [];

for (let i = 1; i <= 100; i++) {
     if (i % 2 == 0) {
          // sisa bagi 2 = 0 , maka genap
          evenNumber.push(i);
     }
}

console.log(evenNumber);
