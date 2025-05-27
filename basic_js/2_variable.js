// VARIABLE: is a container which store value
// variable name should not be starts with numeric character, doesn't accept any special character, only accept $ _, doesn't accept space b/w variable name.
// must be meaningful & camelcasing () fullName, emailId
// HOW TO DECLARED VARIABLE?
// var - before ES6, global scope, allow redeclaration
// let - after ES6, local/function/block scope, does not allow redeclaration
// const - after ES6, local/function/block scope, does not allow redeclaration, value will be Constant

// var number; // variable declaration,
// number = 100; // value assign/expression = assignment operator,
// console.log(number);

// {
//     var num1 = 30;

// }
// console.log(num1)

// let number;
// number = 100;
// console.log(number);

// {
//     let num1 = 30;
// }
// console.log(num1); // num1 is not defined

// let num2;
// console.log(num2); // undefined
// {
//     num2 = 30;
// }

// let num3;
// {
//     num3 = 30;
// }
// console.log(num3); // 30 , globally declaration

// var num = 50;
// var num = 60;
// console.log(num); // 60

// let num1 = 50;
// let num1 = 60;

// { let num1 = 50; console.log(num1) }
// { let num1 = 60; console.log(num1) }

// let num = 50;
// // update num
// num = 70;
// console.log(num)

// Const - constant
const num = 50;
num = 80;
console.log(num); // TypeError: assignment to a constant variable




