const coffeStock = {
    arabica : 100,
    robusta: 150,
    liberica: 200
}

const membuatCoffee = [
    'Menyalakan mesin kopi',
    'Menggiling biji kopi',
    'Memanaskan air',
    'Mencampurkan air dan kopi',
    'Menuangkan kopi ke dalam gelas',
    'Menuangkan susu ke dalam gelas',
    'Kopi Anda sudah siap!',
]

const isCoffeeMachineReady = false;

// multiple export dengan memanfaatkan object literal
export {coffeStock, membuatCoffee, isCoffeeMachineReady};
// console.log(module)

