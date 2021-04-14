const ws = new WeakSet();
const obj1 = [];
const obj2 = { nama: 1234 };

ws.add(obj1);
ws.add(obj2);

ws.has(obj1);
ws.has(obj2);

console.log(ws.has(obj1));
ws.delete(obj1);
console.log(ws.has(obj1));
