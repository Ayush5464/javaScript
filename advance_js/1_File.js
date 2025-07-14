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

let arr = [12, 8, 35, 4, 7, 15, 26, 2, 90, 27];

let result = arr.filter((value) => {
  return value % 2 == 0;
});

// console.log(result);

let team = [
  { name: "bob", position: "developer" },
  { name: "jon", position: "hr" },
  { name: "alice", position: "manager" },
  { name: "joe", position: "developer" },
];

let Post = team.filter((value) => {
  return value.position == "developer";
});

console.log(Post);

const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 27 },
  { name: "Charlie", age: 22 },
  { name: "Dave", age: 30 },
];

let data = users.filter((value) => {
  return value.age >= 25;
});

console.log(data);

const books = [
  { title: "Book One", author: { name: "Author A" } },
  { title: "Book Two", author: { name: "Author B" } },
  { title: "Book Three", author: { name: "Author A" } },
  { title: "Book Four", author: { name: "Author C" } },
];

let [
  { title: title1, author: author1 },
  { title: title2, author: author2 },
  { title: title3, author: author3 },
  { title: title4, author: author4 },
] = books;

console.log(title1, author1);

let res = books.filter((value) => {
  return value.author.name == "Author A";
});
console.log(res);
