function multiple(num) {
     total = num * num; //variable global karena tidak menggunakan keyword let, const atau var
     return total;
}

let total = 9;
let number = multiple(20);

console.log(total); // 400

/*
    Perlu di perhatikan jika lupa menuliskan keyword let, const atau var pada script
    ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
*/
