//controlflow: if, else if, else, switch, for, while, do while
//if else
let a = 10;
if (a > 10) {
    console.log("a is greater than 10");
} else if (a === 10) {
    console.log("a is equal to 10");
} else {
    console.log("a is less than 10");
}
//switch
switch (a) {
    case 10:
        console.log("a is equal to 10");
        break;
    case 20:
        console.log("a is equal to 20");
        break;
    default:
        console.log("a is not equal to 10 or 20");
}
//for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
//while loop
let j = 0;
while (j < 5) {
    console.log("Iteration: " + j);
    j++;
}
//do while loop
let k = 0;
do {
    console.log("Iteration: " + k);
    k++;
} while (k < 5);
//for in loop
let obj = { name: "John", age: 30 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
//for of loop
for (let value of Object.values(obj)) {
    console.log("Value: " + value);
}
//break and continue
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log("Iteration: " + i);
}
//user input: prompt()