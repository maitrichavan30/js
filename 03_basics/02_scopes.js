//{
    //t his curly bracket called scope
//}

//var c = 300

let a = 300
if(true) {
    let a = 10    // |
    const b = 20  // | //block scope
    //var c = 30    // | 

    console.log("INNER: ", a);
    

}

console.log(a); //but in a and b there is undefine outout because let and const does not ru outsode scope 
//console.log(b);
//console.log(c); in c its give output and run because we use var 


//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
    
//}
// when we use forloop and we change the name index  
// we dont want too spread a full mash up in other code we only want to run 
// the related code into only for loop so that's why where scope is important

function one() {
    const username = "maitri"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website); this gives error because we can't accsess the website outside their scope{} 

    two()
}

one()

if(true) {
    const username = "maitri"
    if (username === "maitri"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); error
}

//console.log(username); error

// +++++++++++++++++++ interesting +++++++++++++++++++++

//addOne(5) // you can call here also 
console.log(addOne(5));
function addOne(num){
     return num + 1
}

addOne(5)

// in js variables are too power full they can hold anything 
// just like JSON VALUE , FUNTION ANYTHING 

//addTwo(5) // cant access addtwo here because here we do using variable or expresion not function
     //expresion just like variable
const addTwo = function(num){
    return num + 2
}

addTwo(5)

// in addone we only declare function but 
//in addtwo we hold the function as with declaretion 
// so that's why gives error in second addtwo 