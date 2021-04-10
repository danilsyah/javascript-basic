// assignment operator / sama dengan (=)
let a = 10;
let b = a;
let c = 5;

c += b;

console.log(a);
console.log(b);
console.log(c);

let x = 10;
let y = 5;

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

// comparison operator / operator pembanding
/* 
    == : Membandingkan kedua nilai apakah sama. (tidak identik).
    != : Membandingkan kedua nilai apakah tidak sama. (tidak identik).
    ===	: Membandingkan kedua nilai apakah identik.
    !==	: Membandingkan kedua nilai apakah tidak identik.
    >	: Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
    >=	: Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
    <	: Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
    <=	: Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
*/

let n1 = 10;
let n2 = 12;
console.log(n1 < n2);
console.log(n1 > n2);

const aString = "10";
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString === aNumber);

// logical operator
/*
    &&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
    ||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
    !   Operator tidak (not). Digunakan untuk membalikkan suatu kondisi. 
*/
console.log("");
let bil1 = 10;
let bil2 = 12;

// AND Operator
console.log(bil1 < 15 && bil2 > 10);
console.log(bil1 > 15 && bil2 > 10);

// OR Operator
console.log(bil1 < 15 || bil2 > 10);
console.log(bil1 > 15 || bil2 > 10);

// NOT
console.log(!(bil1 < 15));
console.log(!(bil1 < 15 && bil2 > 10));
