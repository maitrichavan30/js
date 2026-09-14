//if
const isUserloggedIn = true 
const temperature = 41

if(temperature < 50){
    console.log("less then 50");
}
console.log("temperature is greater than 50"); // this  will excuted for surely because it has no bountry or limit 



if(temperature < 50){
    console.log("less then 50");
}else {
console.log("temperature is greater than 50"); // here we have conditional checking 
 // it means only execute the any one 
}


if(2 == "2"){
   console.log("excuted");
}

if(2 === "2"){
    console.log("excuted");
}
console.log("not equal");

if(2 != 3){
    console.log("excuted");
}
//<, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100) {
  const  power = "fly" // in const gives error because const is only perform in scope not outside
  //var power = "fly" //using var both fly print in the scope and out side the scope  because var scope is completly global
  //let power = "fly" // in this also give error 
  console.log(`user power: ${power}`); 
}
  //console.log(`user power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");

//Nasted if else
// if (balance < 500){
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");  
// }

const userLoggedIn = true 
const debitCard = true
const loggesInFromGoogle = false
const loggedFromEmail = true
        //&& its called and
if (userLoggedIn && debitCard && 2==2){ // in this case both condition should be true if any one was wronge we can't go in the code then
    console.log("allowed to buy course"); 
}

if (loggesInFromGoogle || loggedFromEmail ){ // if only one condition is true the code is excuted
    console.log("user Logged in");   
}