// let a = 10;
// let b = 20;
// if (a > b) {
//   console.log("a is greater than b");
// } else if (a < b) {
//   console.log("a is less than b");
// } else {
//   console.log("a is equal to b");
// }

// let c = 10;

// if (c >= 18) {
//   console.log("C is eligible to vote");
// } else if (c < 18) {
//   console.log("C is not eligible to vote");
// } else {
//   console.log("Both are not eligible to vote");
// }

// let e = 10;
// if (e % 2 == 0) {
//   console.log("e is even");
// } else {
//   console.log("e is odd");
// }

// let f = 10;
// if (f > 0) {
//   console.log("f is positive");
// } else if (f < 0) {
//   console.log("f is negative");
// } else {
//   console.log("f is zero");
// }

// let l = 50;
// let h = 50;
// if (l == h) {
//   console.log("it is a square");
// } else {
//   console.log("it is rectangle");
// // }
// let num1 = 50;
// let num2 = 70;
// let num3 = 30;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is the largest number");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("num2 is the largest number");
// } else {
//   console.log("num3 is the largest number");
// }
// let a = 50;
// let b = 70;
// let c = 20;
// if (a > b && a > c) {
//   if (b > c) {
//     console.log("b is second largest number");
//   } else{
//     console.log("c is second largest number");
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     console.log("a is second largest number");
//   } else{
//     console.log("c is second largest number");
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     console.log("a is second largest number");
//   } else{
//     console.log("b is second largest number");
//   }
// }

// let num1 = 0;
// let num2 = -1;
// let num3 = 4;
// if (num1 > num2 && num1 > num3) {
//   if (num2 > num1 && num2 > num3) {
//     alert(num1 + "," + num2 + "," + num3);
//   } else {
//     alert(num1 + ", " + num3 + ", " + num2);
//   }
// } else if (num2 > num1 && num2 > num3) {
//   if (num1 > num3) {
//     alert(num2 + ", " + num1 + ", " + num3);
//   } else {
//     alert(num2 + ", " + num3 + ", " + num1);
//   }
// } else if (num3 > num1 && num3 > num2) {
//   if (num1 > num2) {
//     alert(num3 + ", " + num1 + ", " + num2);
//   } else {
//     alert(num3 + ", " + num2 + ", " + num1);
//   }
// } else {
//   alert("all are equal");
// }

// let num1 = 3;
// let num2 = -7;
// let num3 = 2;
// let c = num1 * num2 * num3;
// if (c > 0) {
//   alert("the sign is +");
// } else {
//   alert("the sign is -");
// }
// let a;
// a = prompt(alert("enter a year"));
// if ((a % 4 == 0  && a%100!=0 )|| a%400==0) {
//   alert("this is a leep year", a);
// } else {
//   alert("this is not a leep year", a);
// }
// let a;
// a = prompt("enter a marks");
// if (a >= 90 && a <= 100) {
//   alert("A grade", a);
// } else if (a >= 75 && a <= 89) {
//   alert("B grade");
// } else if (a >= 55 && a <= 74) {
//   alert("C grade");
// } else if (a <= 54 && a <= 54) {
//   alert("D grade");
// } else {
//   alert("enter a valid number");
// }

// let b;
// b = console.log("enter a alphabet");
// if (b == "a" || b == "e" || b == "i" || b == "o" || b == "u") {
//   console.log("this is a vovel", b);
// } else {
//   console.log("this is a Consonet", b);
// }
// let name = "John";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(3));

// let a;
// a = 45;
// if (a % 3 == 0 && a % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (a % 5 == 0) {
//   console.log("Buzz");
// } else if (a % 3 == 0) {
//   console.log("Fizz");
// } else {
//   console.log("enter a correct number");
// }

// switch(){
//     case ():
//         console.log()
// }

// let a = 5;
// let result = a % 2 == 0 ? "number is even" : "number is odd";
// console.log(result);

// let a;
// a = parseInt(prompt("enter a number between 1 to 7"));
// switch (a) {
//   case 1:
//     console.log("monday", a);
//     break;
//   case 2:
//     console.log("tuesday", a);
//     break;
//   case 3:
//     console.log("wednesday", a);
//     break;
//   case 4:
//     console.log("thursday", a);
//     break;
//   case 5:
//     console.log("friday", a);
//     break;
//   case 6:
//     console.log("saturday", a);
//     break;
//   case 7:
//     console.log("sunday", a);
//     break;
//   default:
//     console.log("enter a valid number between 1 to 7", a);
//     break;
// }

// let a = parseInt(prompt("Enter first number:"));
// let operator = prompt("Enter an operator (+, -, *, /):");
// let b = parseInt(prompt("Enter second number:"));
// switch (operator) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
// };
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 0; j++) {
    console.log("*");
  }
}
