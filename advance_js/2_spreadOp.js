// SPREAD OPEARTOR: ...array, no need to take any other variable, it'll update in original array but must be declared before.

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [10, 20, 30, 40]
// let arr3 = [...arr1, 6, 7, 8, 9, 10, ...arr2]
// console.log(arr3)

// Rest parameter:

function showDetails(name, age, ...hobbies) {
    console.log(name, age, hobbies)
}
showDetails("John Doe", 30, "Playing Cricket", "Reading Books", "Coding")

function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }
    console.log(result)
}
sum(10, 20)
sum(10, 203, 30)
sum(10, 60, 340, 450, 600)