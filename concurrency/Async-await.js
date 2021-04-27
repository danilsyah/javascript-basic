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
                    reject("Maaf, mesin sedang sibuk");
               }
          }, 1000);
     });
};

const checkStock = () => {
     return new Promise((resolve, reject) => {
          state.isCoffeeMachineBusy = true;
          setTimeout(() => {
               if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                    resolve("Stock cukup, bisa membuat kopi");
               } else {
                    reject("Stock, tidak cukup");
               }
          }, 1500);
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
     console.log("Membuatkan kopi anda...");
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Kopi sudah siap");
          }, 2000);
     });
};

async function makeEspresso() {
     try {
          await checkAvailability();
          await checkStock();
          await Promise.all([boilWater(), grindCoffeeBeans()]);
          const coffee = await brewCoffee();
          console.log(coffee);
     } catch (rejectedReason) {
          console.log(rejectedReason);
     }
}

const getCoffee = () => {
     return new Promise((resolve, reject) => {
          const seeds = 100;
          setTimeout(() => {
               if (seeds >= 100) {
                    resolve("Kopi didapatkan");
               } else {
                    reject("Biji kopi habis!");
               }
          }, 1000);
     });
};

async function makeCoffee() {
     try {
          const coffee = await getCoffee();
          console.log(coffee);
     } catch (rejectedReason) {
          console.log(rejectedReason);
     }
}

makeCoffee();

makeEspresso();
