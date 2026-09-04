//singleton 

// object literals

//object.create //its called constructor method 

const mySym = Symbol("key1") // symbol is a unique identifier


const JsUser = {
    name: "maitri", // key : value
    "full name" : "maitri chavan ",
    [mySym]: "mykey",
    age: 19,
    location: "vadodara",
    email: "maitrichavan30@gmail.com",
    isLoggedIn: false,
    LastlogginDays: ["Monday", "Tuesday", "Wednesday"]
}

//accessing object

console.log(JsUser.email) // dot notation [1 ist type to access object]
console.log(JsUser["email"]) // bracket notation  [2nd type to access object]

//console.log(JsUser.full name) //  this will give error because of in object we consider its string so we have to use bracket notation for that
console.log(JsUser["full name"]) // this will work fine because we are using bracket notation

console.log(JsUser[mySym]) 

// functions inside object are called methods
// treat function like varibles

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

JsUser.email = "maitri30@gmail.com"// we can change the value of the object
//Object.freeze(JsUser) // this will freeze the object and we cannot change the values of the object
JsUser.email = "maitri@microsoft.com"
console.log(JsUser) // this will give the old value because we freezed the object

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// in output we get undefined The reason of undefined is because the greeting function is not returning anything it is just priniting thats why the return type is undefined