const state = {
     stock: {
          coffeeBeans: 250,
          water: 1000,
     },
     isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (!state.isCoffeeMachineBusy) {
                    resolve("Mesin kopi siap digunakan");
               } else {
                    reject("Maaf, mesin sedang sibuk.");
               }
          }, 1000); //1 detik
     });
};

const checkStock = () => {
     return new Promise((resolve, reject) => {
          state.isCoffeeMachineBusy = true;
          setTimeout(() => {
               if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                    resolve("Stock cukup, Bisa Membuat Kopi");
               } else {
                    reject("Stock tidak cukup");
               }
          }, 1500); //1.5 detik
     });
};

const boilWater = () => {
     return new Promise((resolve, reject) => {
          console.log("Memanaskan Air....");
          setTimeout(() => {
               resolve("Air panas sudah siap!");
          }, 2000);
     });
};

const grindCoffeeBeans = () => {
     return new Promise((resolve, reject) => {
          console.log("Menggiling biji kopi...");
          setTimeout(() => {
               resolve("Kopi sudah siap!");
          }, 1000);
     });
};

const brewCoffee = () => {
     console.log("Membuat kopi anda...");
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Kopi sudah siap!");
          }, 2000); // 2 detik
     });
};

function makeEspresso() {
     checkAvailability()
          .then((value) => {
               console.log(value);
               return checkStock();
          })
          .then((value) => {
               console.log(value);
               const promises = [boilWater(), grindCoffeeBeans()];
               return Promise.all(promises);
          })
          .then((value) => {
               console.log(value);
               return brewCoffee();
          })
          .then((value) => {
               console.log(value);
               state.isCoffeeMachineBusy = false;
          })
          .catch((rejectedReason) => {
               console.log(rejectedReason);
               state.isCoffeeMachineBusy = false;
          });
}

makeEspresso();
