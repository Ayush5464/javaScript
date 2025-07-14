// ARRAY METHODS: 

// FILTER(): always returns a new array, will filter elements using a parameter in callback function based on conditions

// let arr = [12, 8, 35, 4, 7, 15, 26, 2, 90, 27]
// // let res = [12, 25, 15, 26, 90, 27]

// let result = arr.filter(function (value) {
//     return value > 10
// })
// console.log(result)

// // filter out even numbers using filter and arrow function, destructure 1st,3rd even number
// let arr1 = [12, 8, 35, 4, 7, 15, 26, 2, 90, 27]
// // // [12,8,4,26,2,90]

// let evenNum = arr1.filter(val => val % 2 == 0);
// console.log(evenNum)
// let [first, , third] = evenNum;
// console.log(first, third)

let team = [
    { name: "Bob", position: "developer" },
    { name: "John", position: "HR" },
    { name: "Alice", position: "manager" },
    { name: "Joe", position: "developer" }
]
// filter out those employees whose position is developer

let dev = team.filter(pos => pos.position == "developer")
console.log(dev)