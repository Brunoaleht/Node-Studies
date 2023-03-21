const _ =require('lodash')

const a = [1, 2, 3, 4, 5]
const b = [2, 3, 4, 6, 7]

const dif = _.difference(a, b)
const difb = _.difference(b, a)

console.log(dif)
console.log(difb)