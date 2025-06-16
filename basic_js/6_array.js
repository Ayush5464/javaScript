// let fruits = ["apple", "banana", "orange", "mango"];
// fruits.push("grapes");
// fruits.push("kiwi");
// fruits.pop();
// fruits.unshift("strawbarry");
// fruits.shift()
// console.log(fruits);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = arr.join();
// console.log(arr2); //it make array into a string
// console.log(arr);

//slice , splice(it manupulate the original array), concat, indexOf
let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1, "A");
// console.log(arr1.slice(1, 3));
// console.log(arr1, "B"); // it will return a new array from index 1 to 3 (not including 3)
// console.log(arr1.splice(1, 3));
// console.log(arr1.splice(2, 0, "4"));
// console.log(arr1, "C"); // it will remove the elements from index 1 to 3 (not including 3) and return the removed elements
let fruits = ["apple", "bannana", "orange", "pineapple"];
// fruits.unshift("strawbarry");
// console.log(fruits);
let vegitable = ["tommato", "bringle", "coliflawer", ["cabage"]];
// vegitable.splice();
// console.log(vegitable[0]);
// fruits.push(vegitable);
// let a = fruits.concat(vegitable);
// console.log(a);
// let food = [...fruits, ...vegitable]; //... the triple dots is a spread method to add the two arrays
// console.log(food);

// console.log(Array.isArray("Ayush"));
// console.log(Array.from("Ayush")); // it convert a any thing into an array
// console.log(Array.from({ name: "Ayush" })); // important (for this we have to gave the instructions to which one we want to convert to array its is kye or name)

// let arr3 = [1, 2, 3, 4, 5];
// let show = [];
// for (let i = 0; i < arr3.length; i++) {
//   show.push(arr3[i] * 2);
// }
// console.log(show);

// let arr3 = [5, 20, 4, 17, 19, 30, 24, 80, 35, 44];
// let res = [];
// for (i = 0; i < arr3.length; i++) {
//   if (arr3[i] % 2 == 0) {
//     res.push(arr3[i]);
//   }
// }
// console.log(res);
// let arr3 = [5, 20, 4, 17, 19, 30, 24, 80, 35, 44];
// let res = arr3[arr3.length - 1];

// console.log(res);
//.concat
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [8, 9, 10, 11, 12, 13];
// let con = arr.concat(arr2);
// console.log(con);
