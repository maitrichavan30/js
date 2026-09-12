const user = {
    username: "maitri",
    price: 999,

    welcomeMessage: function() {
        // when you want to refer current context of the code you use [this]
        console.log(`${this.username}, welcome to website`);
        console.log(this); // it means this talk to current context (current value ya current variables)
    }
}
user.welcomeMessage()//method
user.username = "sam" //change the context now
user.welcomeMessage() // output gives sam, welcome to websites

// console.log(this);// in this your in the node enviroment so your
// this refers to the empty objects like this {}

// [[[[[the most of the global object is window object ]]]]]

// in arrow functionn there is no this keyword

function one() {
    let username = "maitri"
    console.log(this.username); //gives undefine
    // our this is wor only in ths objects not in this type of functions

}
one()

const chai = function() {
    let username = "maitri"
    console.log(this.username);
}
chai() // gives undefine

const chai1 = () => {
    let username = "maitri"
    console.log(this.username);
    console.log(this);
}
//chai() // gives undefined

// arrow functions start here

const addTwo0 = (num1,num2) => {
    return num1 + num2
}

const addTwo1 = (num1,num2) => num1 + num2 //one single line arrow function

const addTwo2 = (num1,num2) => (num1 + num2) // when using() not need to use returh

const addTwo = (num1,num2) => ({username: "mitri"}) // when you call object you shoudle raped it into the ()

console.log(addTwo(3,4));

// const myArray = [ 2, 5, 6, 7, 8]

// myArray.forEach(function {})
