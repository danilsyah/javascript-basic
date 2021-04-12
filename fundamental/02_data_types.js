// Undefined
let x;
console.log(typeof x);

// numbers
let y = 10;
let z = 3.15;
console.log(typeof y);
console.log(typeof z);

// operator aritmatika
let a = 12;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// increment = nilai bertambah
// decrement = nilai berkurang

let postfix = 5;
console.log(postfix++);
console.log(postfix);

let prefix = 5;
console.log(++prefix);

// BigInt
const bigNumber = 123456789012345678901234567890n;
const myInt = 1234343948394839483984394893;
const bigIntButSmall = 7n;

console.log(bigNumber);
console.log(myInt);
console.log(bigIntButSmall);

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

// strings

let greet = "Hello";
console.log(typeof greet);

const question = '"what do you think of JavaScript?" I asked';
console.log(question);

const answer = '"I think it \'s awesome! he answered confidently"';

let greet1 = "Hello";
let moreGreet = greet1 + greet1;
console.log(moreGreet);

const myName = "danil";
console.log(`Hello, my name is ${myName}`);

// boolean
let x1 = true;
let y1 = false;

console.log(typeof x1);
console.log(typeof y1);

const i = 10;
const j = 12;

let isGreater = i > j;
let isLess = i < j;

console.log(isGreater);
console.log(isLess);

// null
let someLaterData = null;
console.log(someLaterData);

// symbol
const id = Symbol("id");
const id1 = Symbol("id");
console.log(id);
console.log(id == id1); //false
