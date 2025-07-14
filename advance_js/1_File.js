// // // // // () =>{}
// // // // let revers = () => {
// // // //   let number = "123456";
// // // //   let rev = number.split("").reverse().join("");
// // // //   console.log(rev);
// // // // };

// // // // revers();

// // // // let arr1 = [1, 2, 3, 4, 5];
// // // // let arr2 = [6, 7, 8, 9, 10];

// // // // let result = [...arr1, ...arr2];
// // // // console.log(result);

// // // let a = [1, 2, 3, 4];

// // // let b;
// // // b = a;

// // // console.log(a);

// // // let name = Promise(() => {
// // //   let number = 10;
// // // });

// // function promiss() {
// //   return new Promise((res, rej) => {
// //     let flag = false;
// //     if (flag == true) {
// //       res("task1");
// //     } else {
// //       rej("error is occured");
// //     }
// //   });
// // }

// // function promiss2() {
// //   return new Promise((resolve) => {
// //     resolve("done2");
// //   });
// // }

// // // promiss()
// // //   .then((value) => {
// // //     console.log(value);
// // //     return promiss2();
// // //   })
// // //   .then((value) => {
// // //     console.log(value);
// // //     console.log("done");
// // //   })
// // //   .catch((error) => {
// // //     console.log(error);
// // //   });

// // async function dothings() {
// //   try {
// //     const promisss = await promiss();
// //     console.log(promisss);
// //     const promiss22 = await promiss2();
// //     console.log(promiss22);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // dothings();

// // try {
// //   let a = "affa";
// //   let b = a - 33;
// //   console.log(b);

// //   throw new Error("galat hai");
// // } catch (error) {
// //   console.error(error);
// // }

// let arr = [12, 8, 35, 4, 7, 15, 26, 2, 90, 27];

// let result = arr.filter((value) => {
//   return value % 2 == 0;
// });

// // console.log(result);

// let team = [
//   { name: "bob", position: "developer" },
//   { name: "jon", position: "hr" },
//   { name: "alice", position: "manager" },
//   { name: "joe", position: "developer" },
// ];

// let Post = team.filter((value) => {
//   return value.position == "developer";
// });

// console.log(Post);

// const users = [
//   { name: "Alice", age: 24 },
//   { name: "Bob", age: 27 },
//   { name: "Charlie", age: 22 },
//   { name: "Dave", age: 30 },
// ];

// let data = users.filter((value) => {
//   return value.age >= 25;
// });

// console.log(data);

// const books = [
//   { title: "Book One", author: { name: "Author A" } },
//   { title: "Book Two", author: { name: "Author B" } },
//   { title: "Book Three", author: { name: "Author A" } },
//   { title: "Book Four", author: { name: "Author C" } },
// ];

// let [
//   { title: title1, author: author1 },
//   { title: title2, author: author2 },
//   { title: title3, author: author3 },
//   { title: title4, author: author4 },
// ] = books;

// console.log(title1, author1);

// let res = books.filter((value) => {
//   return value.author.name == "Author A";
// });
// console.log(res);

const users = [
  {
    id: 1,
    name: { first: "Alice", last: "wong" },
    scores: [80, 90, 70],
  },
  {
    id: 2,
    name: { first: "bob", last: "lee" },
    scores: [60, 50, 45],
  },
  {
    id: 3,
    name: { first: "carol", last: "chan" },
    scores: [85, 88, 92],
  },
];

// let res = users.filter(({ scores }) => {
//   let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
//   return avg > 75;
// });
// let name = res.map((value) => {
//   console.log(value.name.first, value.name.last);
// });

const employees = [
  {
    name: "ankita",
    salary: 50000,
    location: {
      city: "Mumbai",
    },
  },
  {
    name: "Ravi",
    salary: 80000,
    location: {
      city: "Delhi",
    },
  },
  {
    name: "Ramesh",
    salary: 45000,
    location: {
      city: "Chennai",
    },
  },
];

// let data = employees.filter((value) => {
//   return value.salary > 60000;
// });

// let res = data.map((value) => {
//   console.log(`${value.name}, ${value.location.city}`);
// });
// console.log(data);

const people = [
  {
    name: "John",
    hobbies: ["reading", "gamming"],
    active: true,
  },
  {
    name: "mike",
    hobbies: ["sports", "chess"],
    active: false,
  },
  {
    name: "emma",
    hobbies: ["cooking", "reading"],
    active: true,
  },
];

// let data = people.filter((value) => {
//   return value.active == true;
// });
// let hobbies = data.map((value) => {
//   console.log(value.hobbies);
// });
// console.log(data);

// let SwapAndSum = (a, b) => {
//   let temp;
//   temp = a;
//   a = b;
//   b = temp;
//   console.log(`${a} ${b} sum of the number ${a + b}`);
// };
// SwapAndSum(10, 5);

// // Given an array of objects representing books, filter out the books written by a
// // specific author and destructure the titles of those books.
const books = [
  { title: "Book One", author: { name: "Author A" } },
  { title: "Book Two", author: { name: "Author B" } },
  { title: "Book Three", author: { name: "Author A" } },
  { title: "Book Four", author: { name: "Author C" } },
];

let authorbooks = books.filter((value) => {
  return value.author.name == "Author A";
});

let title = authorbooks.map((value) => {
  return value.title;
});

let [title1, title2] = title;
// console.log(title1, title2);

const data = [
  { id: 1, info: { status: "inactive", value: 100 } },
  { id: 2, info: { status: "active", value: 200 } },
  { id: 3, info: { status: "inactive", value: 150 } },
  { id: 4, info: { status: "active", value: 300 } },
];

let result = data.filter((value) => {
  return value.info.status == "active";
});
// console.log(result);

const strings = ["apple", "banana", "cherry", "date", "elderberry"];

let letter = strings.filter((value) => {
  for (const element of value) {
    if (element == "a") {
      return value;
    }
  }
});
let [letter1, letter2] = letter;
// console.log(letter1, letter2);

const items = [
  { id: 1, categories: ["A", "B"] },
  { id: 2, categories: ["A", "B", "C"] },
  { id: 3, categories: ["A"] },
];

let twoCategories = items.filter((value) => {
  return value.categories.length >= 2;
});
console.log(twoCategories);
