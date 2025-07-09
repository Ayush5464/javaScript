// 1. Write a function to add two numbers and return the result
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 20)); // OUTPUT: 30

// 2. Write a function to reverse a given string
function reverse(name) {
  return name.split("").reverse().join("");
}
console.log(reverse("ayush")); // OUTPUT: hsuyA

//3. Create a function that returns the square of a number.
function square(num) {
  return num * num;
}
console.log(square(5)); // OUTPUT: 25
// 4. Write a function to check whether a number is even or odd.
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isEvenOrOdd(10)); // OUTPUT: Even
console.log(isEvenOrOdd(15)); // OUTPUT: Odd

//5. Write a function to count the number of vowels in a string.
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello World")); // OUTPUT: 3

// 6. Write a function to return the factorial of a number.
function factorial(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5)); // OUTPUT: 120

//7. Write a function to convert a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(40)); // OUTPUT: 104

// 8. Write a program that checks whether a number is positive, negative, or zero.
function checknumber(num) {
  if (num < 0) {
    console.log("number is negative " + num);
  } else if (num > 0) {
    console.log("number is positive " + num);
  } else {
    console.log("number is zero " + num);
  }
}

checknumber(6); //OUTPUT: number is positive 6
checknumber(-2); //OUTPUT: number is negative -2
checknumber(0); //OUTPUT: number is zero 0

// 9. Write a function that takes age as input and returns "Adult" if age >= 18, otherwise "Minor"
function checkAge(age) {
  if (age >= 18) {
    console.log("You are Adult ");
  } else {
    console.log("You are minor");
  }
}
// let value = prompt("Enter your age");
checkAge(17); // OUTPUT: You are minor
checkAge(20); // OUTPUT: You are Adult

//10. Write a program to check whether a year is a leap year.
function LeapYear(year) {
  if (year % 4 == 0) {
    return year + " is a leap year";
  } else {
    return year + " is not a leap year";
  }
}
console.log(LeapYear(2016)); // OUTPUT: 2016 is a leap year
console.log(LeapYear(2021)); // OUTPUT: 2021 is not a leap year

// 11. Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 12. Print the multiplication table of 5 using a loop.
for (let i = 1; i <= 10; i++) {
  console.log(5 + " x " + i + " = " + 5 * i);
}
// OUTPUT:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

//13. Write a function that returns the sum of all numbers in an array.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // OUTPUT: 15

// 14. Write a program to find the maximum number in an array.
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([5, 6, 8, 7, 2, 4, 10])); // OUTPUT: 10

// 15. Print even numbers between 1 and 20 using a while loop.
let i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

//16. Write a function that filters out all odd numbers from an array.
function filterNumbers(arr) {
  let filterd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filterd.push(arr[i]);
    }
  }
  return filterd;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterNumbers(arr)); // OUTPUT: [1, 3, 5, 7, 9]

//17. Write a function that returns the names from an array of user objects.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
function getNames(users) {
  let names = [];
  for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
  }
  return names;
}
console.log(getNames(users)); // OUTPUT: [ 'Alice', 'Bob' ]

//18. Create an array of numbers to double every element using for loop.
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled); // OUTPUT: [2, 4, 6, 8, 10]

//20. Write a function that returns another function which adds a specific number to its argument.
function Adder(x) {
  return function (y) {
    return x + y;
  };
}
const addFive = Adder(5);
console.log(addFive(10)); // OUTPUT: 15

