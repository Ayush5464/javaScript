// let fruits = ["apple", "banana", "orange", "mango"];
// fruits.push("grapes");
// fruits.push("kiwi");
// fruits.pop();
// fruits.unshift("strawbarry");
// console.log(fruits);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = arr.join();
// console.log(arr2); //it make array into a strin
// console.log(arr);

//slice , splice(it manupulate the original array), concat, indexOf
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1, "A");
// console.log(arr1.slice(1, 3));
// console.log(arr1, "B"); // it will return a new array from index 1 to 3 (not including 3)
// console.log(arr1.splice(1, 3));
// console.log(arr1, "C"); // it will remove the elements from index 1 to 3 (not including 3) and return the removed elements
let fruits = ["apple", "bannana", "orange", "pineapple"];
let vegitable = ["tommato", "bringle", "coliflawer", "cabage"];
// fruits.push(vegitable);
// let a = fruits.concat(vegitable);
// console.log(a);
let food = [...fruits, ...vegitable]; //... the triple dots is a spread method to add the two arrays
console.log(food);
