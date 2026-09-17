const userEmail = []

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//when you assume the value is true in the given string and give true iutput without any comapresion its called truthy value

// and when string is empty then the output is don't have user email it's get know automatically that's it's false 

// when [] this in the variable the output is "GOT USER EMAIL"


//Falsy values
//there are all falsy values list
//false, 0, -0, BigInt 0n, "", null, undefined, NaN, 

//truthy values

//"0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObj =  {}

if(Object.keys(emptyObj).length === 0){    
    console.log("object is empty");
}
// in crome

// false == 0
// true

// flase == ''
// true

// 0 == ''
// true

// Nullish coalescing Operator )// : null undefined
// it is normally use for null and undedined 
let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = null ?? null
let val4 = undefined ?? 15
let val5 = null ?? 10 ?? 20

console.log(val3);

// teriary operator

// condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log("less then 80") : console.log("more than 80");
icePrice <= 80 ? console.log("less then 80") : console.log("more than 80");
