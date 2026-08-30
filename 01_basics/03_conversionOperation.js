let score = "33c4"
console.log(typeof score);
console.log(typeof (score));

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber);
console.log(valueIntNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// undefined => NaN

let isLoggedIn = 0 

let booleanIsLoggin = Boolean(isLoggedIn);
console.log(booleanIsLoggin);

//1 => true; 0 => false
// "" => false;
// "maitri" => true

let somestring = 33;

let stringValue = String(somestring);
console.log(stringValue);
console.log(typeof stringValue);

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2) // 2^2

let str1 = "Hello"
let str2 = " maitri"

let str3 = str1 + str2
console.log(str3);

//string + number => string
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(1 + 2 + 3 + "4" + 5 + 6) // 64

console.log(+true)
console.log(+"") 

let gameCounter = 100
gameCounter++; //postfix
console.log(gameCounter);

let gameCounter2 = 100
++gameCounter2; //prefix
console.log(gameCounter2);