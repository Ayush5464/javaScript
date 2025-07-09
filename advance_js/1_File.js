// // // // () =>{}
// // // let revers = () => {
// // //   let number = "123456";
// // //   let rev = number.split("").reverse().join("");
// // //   console.log(rev);
// // // };

// // // revers();

// // // let arr1 = [1, 2, 3, 4, 5];
// // // let arr2 = [6, 7, 8, 9, 10];

// // // let result = [...arr1, ...arr2];
// // // console.log(result);

// // let a = [1, 2, 3, 4];

// // let b;
// // b = a;

// // console.log(a);

// // let name = Promise(() => {
// //   let number = 10;
// // });

// function promiss() {
//   return new Promise((res, rej) => {
//     let flag = false;
//     if (flag == true) {
//       res("task1");
//     } else {
//       rej("error is occured");
//     }
//   });
// }

// function promiss2() {
//   return new Promise((resolve) => {
//     resolve("done2");
//   });
// }

// // promiss()
// //   .then((value) => {
// //     console.log(value);
// //     return promiss2();
// //   })
// //   .then((value) => {
// //     console.log(value);
// //     console.log("done");
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// async function dothings() {
//   try {
//     const promisss = await promiss();
//     console.log(promisss);
//     const promiss22 = await promiss2();
//     console.log(promiss22);
//   } catch (error) {
//     console.log(error);
//   }
// }

// dothings();

// try {
//   let a = "affa";
//   let b = a - 33;
//   console.log(b);

//   throw new Error("galat hai");
// } catch (error) {
//   console.error(error);
// }

