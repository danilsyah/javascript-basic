const wm1 = new WeakMap();
let object1 = {};

wm1.set(object1, 37);
console.log(wm1.get(object1));

object1 = null;
console.log(wm1.get(object1));

console.log("");

let visitsCountMap = new WeakMap();

function countUser(obj) {
     let count = visitsCountMap.get(obj) || 0;
     visitsCountMap.set(obj, count + 1);
}

let obj1 = {};

countUser(obj1);
console.log(visitsCountMap.get(obj1));

countUser(obj1);
console.log(visitsCountMap.get(obj1));
