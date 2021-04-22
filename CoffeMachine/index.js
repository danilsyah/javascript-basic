// import multiple menggunakan destructuring object
import {coffeStock as stock, membuatCoffee, isCoffeeMachineReady} from './state.js'
import priceCoffees from './test.js'

console.log(membuatCoffee)
console.log(stock)
console.log(isCoffeeMachineReady)
console.log(priceCoffees)

const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams){
        console.log("Kopi berhasil dibuat!")
    }else{
        console.log("Biji kopi habis")
    }
}

const statusMachine = (status) =>{
    if (status){
        console.log('mesin siap di pakai')
    }else{
        console.log('mesin sedang rusak')
    }
}

makeCoffee("robusta",80)
statusMachine(isCoffeeMachineReady)