for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    //  using ctrl D we can change variables of loop at a same time
}

//console.log(element); // thi sgives error because elemnt cant run outside scope 

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
  for (let j = 0; j <=10; j++) {
    console.log(`Inner loop value ${i} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
  }
}

let myArray= ["flash", "batman", "superman"]
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`betected 5`);
//     break
//   }
//   console.log(`value of i is ${index}`); 
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`betected 5`);
    continue
  }
  console.log(`value of i is ${index}`); 
}