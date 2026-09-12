//IIFE Immediately Invoked function Expressions (IIFE)

(function chai() {
    // its call names IIFE
    console.log(`Db connected`);
    // this function is invoke but it doesnot know how to end
}) (); //so we use to put ; in the line
//chai()

//() // first parenthesses we write function defination here
//() // and the second patenthesses Exection call

//{
//iife the function who called immediately and
// when have problem of global scope polutions sometimes so used to remove this global scope variables or declaration  polution
//}

    // gets as a arguments
(  (name) => {
    // its unname IIEF   LIKE write arrow function
    console.log(`DB connected two ${name}`);
}) ('maitri') // who excute this funcion i give parameters


//we can write two IIFE in one file like this upper one