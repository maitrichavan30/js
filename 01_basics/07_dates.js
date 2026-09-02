//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2026, 2,30)
//let myCreatedDate = new Date(2026, 2,30, 5,3)
let myCreatedDate = new Date("09-2-2026")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`

newDate.toLocaleString('default', { 
    weekday: "long"
})