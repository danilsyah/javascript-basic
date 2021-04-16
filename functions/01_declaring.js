// mendeklarasikan function tanpa parameter
function greeting() {
     console.log("Good Morning!");
}

greeting();

// deklarasi function dengan parameter
function greeting2(name, language) {
     if (language === "English") {
          console.log(`Good Morning ${name}`);
     } else if (language === "French") {
          console.log(`Bonjour ${name}`);
     } else {
          console.log(`Selamat pagi ${name}`);
     }
}

// pemanggilan fungsi
greeting2("Danil", "Indonesia");

// function dengan nilai kembali
function multiple(a, b) {
     return a * b;
}

let result = multiple(10, 3);
console.log(result);

// expression function
const greeting3 = function (name, language) {
     if (language === "English") {
          return "Good Morning " + name + "!";
     } else if (language === "French") {
          return "Bonjour" + name + "!";
     } else {
          return "Selamat Pagi" + name + "!";
     }
};

console.log(greeting3("haykal", "English"));
