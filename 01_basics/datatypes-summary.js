// #primitive

// 7 types of primitive data types in JavaScript(call by value)
// 1 string
// 2 number
// 3 boolean
// 4 null
// 5 undefined
// 6 bigint
// 7 symbol

const score = 100
const scoreValue = 100.30

const isLoggedIn = false
const outsideTemp = null // output :  typeof null is object
let userEmail; //undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) //false
 
const bigNumber = 34567890123456789012345678901234567890n //output : typeof bigNumber is bigint or undefined

// # non primitive
// reference data types(call by reference) (non primitive)

//Array
//objects
//function

//array
const heros = ["shaktiman", "naagraj", "doga"]

//objects
let myObj = {
    name: "maitri",
    age: 22,
}

const myFunction = function() {
      console.log("hello world ");
}


console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);

// Stack (Primitives) , Heap (Non-Primitives)

//stack - gives copy
let myYoutubename = "maitrichavandotcom"

let anotherName = myYoutubename
anotherName = "maitriandcode"

console.log(myYoutubename);
console.log(anotherName);

//heap - gives reference means give orignal 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "maitri@google.com"

console.log(userOne.email);
console.log(userTwo.email);


