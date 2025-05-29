//singleton: when we create a object in a literals it did not creat sinfleton but if the objct is create with constuctor it creat singleton
//object.js :it is a constuctor method
// objcet literals: the curaly braces is a object{}

const my_name = Symbol("mykey");

const jsuser = {
  name: "ayush",
  [my_name]: "newkey",
  age: 21,
  add: "Noida",
  email: "ayush@gmail.com",
};

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser[my_name]);
// console.log(jsuser);

// jsuser.greeting = function () {
//   console.log("Hello Js");
// };
// jsuser.greetingtwo = function () {
//   console.log(`hello js ${this.name}`);
// };
// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());

// const app = new Object(); //it is a singleton object
// console.log(app);

const appData = {
  email: "abce@gmail.com",
  fullname: {
    username: {
      firstName: "ayush",
      lastname: "gupta",
    },
  },
};
// console.log(appData.fullname.username);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
const obj4 = { 7: "d", 8: "e", 9: "f" };
// const obj5 = { 4: "d", 5: "e", 6: "f" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);
//
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(Object.keys(appData));
// console.log(Object.values(appData));
// console.log(Object.entries(appData));

const course = {
  corursename: "javascript",
  fees: "999",
  Teacher: "ayush",
};
// const { Teacher: me } = course; // this is a destucturing
// console.log(me);
