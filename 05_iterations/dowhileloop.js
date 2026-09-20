// while loop
let index = 0;

while (index <= 10) {
    console.log(`value  of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "batman", "superman"]

let arr = 0;
while (arr < myArray.length) {
    console.log(`value of ${myArray[arr]}`);
    arr = arr + 1;
}


// Do while loop

let score = 1
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);

let score1 = 11
do { // here the code is run one time then stop the condition
    console.log(`score is ${score}`);
    score1++;
} while (score <= 10);