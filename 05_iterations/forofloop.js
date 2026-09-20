// for of loop

["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num,);   
}

// for of loop using string 

const greetings = "hello world"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//Maps

// map is object holds key value pairs and remamber the order of keys
// and its know as for unique value and make sure the oder of the insertion
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of America")
map.set('FR' , "Franch")
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' , value);
}
// when we want to use array we use for of loop 