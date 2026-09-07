//FUNCTION

function sayMyName(){
    console.log("m");
    console.log("a");
    console.log("i");
    console.log("t");
    console.log("r");
    console.log("i");
}

sayMyName(); // this will call the function and execute the code inside the function
                       //parameters
// function addTwoNumbers(num1, num2){
                
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
                
    let result = num1 + num2;
    //console.log(result);
    //return result; // this will return the value of the result variable to the place where the function is called

    return num1 + num2; // this will return the value of the addition of num1 and num2 to the place where the function is called
    // we can declare like this also 
}
            //arguments
addTwoNumbers(3, 4); // this will call the function and execute the code inside the function
//addTwoNumbers(3,"4") 
//addTwoNumbers(3,"a")
//addTwoNumbers(3,null) // like these function gives the output as per the data type of the parameters passed in the function
                         (//username = "maitri")
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    // you can also write like this 
    // if(!username){
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} just logged in`; 
}

console.log(loginUserMessage("maitri"));