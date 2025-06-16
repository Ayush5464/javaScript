// function decleration
// function expression
// annonymous function:
// immidate invoked function
// arrow function:
//callback function:
//clouser:private variable

// function myname(){
//     console.log("a");
//     console.log("y");
//     console.log("u");
//     console.log("s");
//     console.log("h");

// }

// myname()

function addition(a, b) {
  console.log(a + b);
}
// addition(1, "6");

// functions with objects

function calculatePrice(...num1) {
  // console.log(num);
  return num1;
}
// console.log(calculatePrice(200, 100, 200));

// const user = {
//   name: "ayush",
//   age: 21,

//   massage: function () {
//     console.log(`welcome to mySite`);
//   },
// };

// user.massage();

// this key word

// const user = {
//   name: "ayush",
//   age: 21,

//   massage: function () {
//     console.log(`${this.name} , welcome to mySite`);
//     console.log(this);
//   },
// };

// user.massage();
// user.name = "nikhil";
// user.massage();

//arrow Functions

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const add = (num1, num2) => num1 + num2; //implecit method
// const add = (num1, num2) => (num1 + num2);
// const add = (num1, num2) => ({
//   username: "ayush"
// });

// console.log(add(10, 20));

//IIFE
// const user = ((name) => { // named iife
//   console.log(`hello ${name}`);
// })("ayush")

// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// console.log(a);

// let arr="hello"
// arr.s
// console.log(arr);

// function rev(arr) {
//   return arr.split("").reverse( ).join();
// }
// console.log(rev("hello"));

// closure <------------very important topic------------------>

// function practice() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log("number is " + count);
//   }
//   // count = 5;
//   return inner;
// }
// let c = practice();
// c();
// c();
// c();
// c();

// function createCounter() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }
// let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createMultiplyer(x) {
//   return function inner(num) {
//     return num * x;
//   };
// }
// let double = createMultiplyer(2);
// let triple = createMultiplyer(3);

// console.log(double(5));
// console.log(triple(4));
