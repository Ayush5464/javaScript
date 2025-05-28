// for (let i = 1; i <= 10; i++) {
//   console.log("Hello World ");
// }
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// let a = 10;
// while (a <= 100) {
//   console.log(a);
//   a += 10;
// }

// let i =105;
// while (i >= 7) {
//     console.log(i);
//     i -= 7;
// }
// let i = 4;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }
// let i = 10;
// let sum = 0;
// while (i <= 50) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
//   i++;
// }
// console.log(sum);
let guess = prompt("Enter the number of your choice");
let number = 10;
while (guess != number) {
  if (guess < number) {
    alert("Too low");
  } else {
    alert("too high");
  }
  guess = prompt(" try again  enter number of your choice");
}
alert("you got the number");
