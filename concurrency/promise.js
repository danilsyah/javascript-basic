/**
 * Nah, Promise memiliki perilaku yang sama dengan analogi di atas. Promise memiliki tiga kondisi, yaitu:
 * Pending (Janji sedang dalam proses)
 * Fulfilled (Janji terpenuhi)
 * Rejected (Janji gagal terpenuhi)
 */

const executorFunction = (resolve, reject) => {
     const isCoffeMakerReady = true;
     if (isCoffeMakerReady) {
          resolve("Kopi berhasil dibuat");
     } else {
          reject("Mesin kopi tidak bisa digunakan");
     }
};

const makeCoffee = () => {
     return new Promise(executorFunction); //constructing promise object
};
const coffePromise = makeCoffee();
console.log(coffePromise);
