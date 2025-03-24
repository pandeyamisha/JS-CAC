let score =13
let example = "13"
console.log(typeof score)
console.log(typeof(score)) 

console.log(typeof example)

let convertedValue = Number(example)
console.log(typeof convertedValue)

let id = "13abc"
let convertedId =Number(id) // although this will run successfull, i.e it will convert but the value post conversion will be NaN,so we can't rely too much on numbers n conversion here
console.log(typeof convertedId)
console.log(convertedId)

let a = undefined;
let convertedA = Number(a);
console.log("a",typeof a)
console.log(typeof convertedA);
console.log(convertedA)
// numbers can be converted easily ex- "33" =>33
// "33abc" => NaN
// true => 1, false =>0
// null => 0
// undefined =>NaN
//Similary conversions can be done for Boolean(), String() etc , but we should keep values post conversion in mind
