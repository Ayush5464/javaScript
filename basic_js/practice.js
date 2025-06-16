const userData = [
  {
    id: 1,
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice.j@example.com",
    age: 29,
    city: "New York",
    join_date: "2021-04-15",
    is_active: true,
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Smith",
    email: "bob.smith@example.com",
    age: 34,
    city: "Los Angeles",
    join_date: "2020-06-01",
    is_active: false,
  },
  {
    id: 3,
    first_name: "Charlie",
    last_name: "Davis",
    email: "charlie.d@example.com",
    age: 27,
    city: "Chicago",
    join_date: "2022-01-22",
    is_active: true,
  },
  {
    id: 4,
    first_name: "Dana",
    last_name: "Lee",
    email: "dana.lee@example.com",
    age: 41,
    city: "Miami",
    join_date: "2019-11-10",
    is_active: true,
  },
  {
    id: 5,
    first_name: "Ethan",
    last_name: "Martinez",
    email: "ethan.m@example.com",
    age: 22,
    city: "Houston",
    join_date: "2023-03-08",
    is_active: true,
  },
  {
    id: 6,
    first_name: "Fiona",
    last_name: "Wang",
    email: "fiona.w@example.com",
    age: 36,
    city: "Seattle",
    join_date: "2021-08-25",
    is_active: false,
  },
  {
    id: 7,
    first_name: "George",
    last_name: "Kim",
    email: "george.k@example.com",
    age: 30,
    city: "Boston",
    join_date: "2020-12-13",
    is_active: true,
  },
  {
    id: 8,
    first_name: "Hannah",
    last_name: "Patel",
    email: "hannah.p@example.com",
    age: 25,
    city: "Denver",
    join_date: "2022-07-19",
    is_active: true,
  },
  {
    id: 9,
    first_name: "Ivan",
    last_name: "Brown",
    email: "ivan.b@example.com",
    age: 38,
    city: "Phoenix",
    join_date: "2018-05-03",
    is_active: false,
  },
  {
    id: 10,
    first_name: "Julia",
    last_name: "Thompson",
    email: "julia.t@example.com",
    age: 31,
    city: "San Francisco",
    join_date: "2023-09-27",
    is_active: true,
  },
];

// const featching = userData.filter((data) => {
//   return data.is_active == true && data.age >= 30;
// });
// console.log(featching);
// const newData = userData.map((data) => {
//   const name = data.first_name;
//   // console.log(name);
//   return name;
// });
// const newData = userData.map(data => ({
//   fullname: data.first_name + " "+ data.last_name,
//   userage: data.age,
// }));
// const newData = userData.map((data) => {
//   let showname = data.first_name;
//   let showage = data.age;
//   console.log("age  " + showage + "  name  " + showname);
// });
// const newData = userData.map((data) => {
//   let show = () => {
//     Name: data.first_name;
//     Age: data.age;
//     City: data.city;
//   };
//   console.log(`name and age of users ${show(Name, Age)}`);
// });
// const newData = userData.map((data) => {
//   const show = (name, age, city) => {
//     return `Name: ${name}, Age: ${age}, City: ${city}`;
//   };

//   const result = show(data.first_name, data.age);
//   console.log(`User Info: ${result}`);

//   return result; // optional, in case you want to keep this in newData
// });
// console.log(newData);

// const newData = userData.map((data) => ({
//   fullname: data.first_name + " " + data.last_name,
//   userage: data.age,
// }));
// console.log(`fullname ${newData.fullname}, age ${newData.userage}`);

// let student = {
//   name: "aman",
//   age: 21,
//   rollNo: 2021,
// };

// for (let key in student) {
//   console.log(key + ": " + student[key]);
// }

let student = {
  name: "aman",
  age: 21,
  rollNo: 2021,
};
Object.entries(student).forEach(function ([key, value]) {
  console.log(key + ":" + value);
});
