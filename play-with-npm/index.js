const _ = require('lodash')

const myArray = [1,2,3,4,5,10]
const sum = _.sum(myArray)
const max = _.max(myArray)
const total = _.size(myArray)

console.log(sum)
console.log(max)
console.log(total)