const hello = () => {
     console.log("hello!");
};
const say = (someFunction) => {
     someFunction();
};

const sayHello = () => {
     return () => {
          console.log("Hello!");
     };
};

hello();
say(hello);
sayHello()();

// =================================================================

const names = ["harry", "ron", "jeff", "thomas"];
const arrayMap = (array, fn) => {
     const newArray = [];

     for (let i = 0; i < array.length; i++) {
          newArray.push(fn(array[i]));
     }

     return newArray;
};

const newNames = arrayMap(names, (nama) => `${nama}!`);
console.log({ names, newNames });
console.log(newNames);
