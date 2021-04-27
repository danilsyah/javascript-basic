const stock = {
     coffeeBeans: 250,
     water: 1000,
};

const checkStock = () => {
     return new Promise((resolve, reject) => {
          if (stock.coffeeBeans >= 16 && stock.water >= 250) {
               resolve("Stock cukup, bisa untuk membuat kopi");
          } else {
               reject("Stock tidak cukup");
          }
     });
};

const handleSuccess = (resolvedValue) => {
     console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
     console.log(rejectionReason);
};

checkStock().then(handleSuccess, handleFailure);

// menggunakan onRejected with Catch Method rejected handler
checkStock().then(handleSuccess).catch(handleFailure);
