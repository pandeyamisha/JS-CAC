// let score =13
// let example = "13"
// console.log(typeof score)
// console.log(typeof(score)) 

// console.log(typeof example)

// let convertedValue = Number(example)
// console.log(typeof convertedValue)

// let id = "13abc"
// let convertedId =Number(id) // although this will run successfull, i.e it will convert but the value post conversion will be NaN,so we can't rely too much on numbers n conversion here
// console.log(typeof convertedId)
// console.log(convertedId)

// let a = undefined;
// let convertedA = Number(a);
// console.log("a",typeof a)
// console.log(typeof convertedA);
// console.log(convertedA)
// numbers can be converted easily ex- "33" =>33
// "33abc" => NaN
// true => 1, false =>0
// null => 0
// undefined =>NaN
//Similary conversions can be done for Boolean(), String() etc , but we should keep values post conversion in mind
  

let n = null;
if(n){
    console.log("came inside true")
}
else{
    console.log("got false")
}
let a = null;
let conA = Number(null);
console.log("conA",conA) // this will result to 0
/*-------------------Operations----------------*/

//read from mdn docs
/*--------------comparison of data types-------------*/
//problem or inconsistencies comee when we start comaring different data types
console.log("2" > 1)
console.log(true>=1)

console.log(null > 0)
console.log(null== 0)
console.log(null >= 0)