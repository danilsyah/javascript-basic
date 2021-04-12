const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites);

const others = ["cake", "pie", "donut"];
const allFavorites = [...favorites, ...others];

console.log(allFavorites);
