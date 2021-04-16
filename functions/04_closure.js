function init() {
     var name = "Danil syah"; // variable lokal di salam scope fungsi init
     function greet() {
          //inner function, merupakan contoh closure
          console.log(`Haloo, ${name}`); // memanggil variabel yang dideklarasikan di parent function
     }

     greet();
}

init();

// closure memungkinkan membuat fungsi dan variabel seolah menjadi private, contoh nya :
// program counter dibuat dengan closure

let add = () => {
     let counter = 0;
     return () => {
          return ++counter;
     };
};

let addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
