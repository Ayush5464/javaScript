// Destructuring: array,object
// Array: in array destructuring we can store each element in individual variable
// let book = ["Advanced Javascript", 500, 300, ["Js_Publication", 2015]];
// // console.log(book[0])

// let [book_name, pages, price, [publication_name, publication_year]] = book;
// console.log(publication_name, price)


// let colors = ['red', 'green', 'yellow', 'blue'];
// let [first, ...restElm] = colors;
// console.log(restElm)

// let colors = ['red', 'green', 'yellow', 'blue'];
// let [first, , third, fourth] = colors;
// console.log(first, fourth) 

// function book() {
//     return ["Advanced Javascript", 500, 300]
// }
// let [book_title, book_price, book_pages] = book();
// console.log(book_pages)

// Object Destructuring: initially variable name must be key(property-name)

let book = {
    book_name: "Advanced Javascript",
    book_price: 400,
    book_pages: 600,
    publication: {
        publication_year: 2015,
        publication_name: "JS Publication"
    }
}
let { book_name: book_title, book_price: price, book_pages, publication: { publication_year, publication_name } } = book;
console.log(book_title, price)