const marvel_heros = ["Iron Man", "Captain America", "Thor"];
const dc_heros = ["Batman", "Superman", "Wonder Woman"];

//not suitable syntax 

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);


const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4,5, [7, 8]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("maitri"));
console.log(Array.from("maitri"));
console.log(Array.from({name: "maitri"})); //intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));