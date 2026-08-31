const name = "maitri"
const repoCount = 10

//console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gateName = new String("maitri-ch-com")

console.log(gateName[0]); //object
console.log(gateName.__proto__);

console.log(gateName.length);
console.log(gateName.toUpperCase());
console.log(gateName.charAt(4));
console.log(gateName.indexOf('t'));
console.log(gateName.toLowerCase());

const newString = gateName.substring(0, 5)
console.log(newString);

const anotherString = gateName.slice(-8, 4)
console.log(anotherString);

const newString2 = "   maitri   "
console.log(newString2);
console.log(newString2.trim());

const url = "https://maitri.com/maitri%20chavandotcom"

console.log(url.replace('%20', '-'));

console.log(url.includes('didi'));

console.log(gateName.split('-'));