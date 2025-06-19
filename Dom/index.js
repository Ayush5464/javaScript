// let a = document.querySelector("h1");
// // a.innerHTML = "my name is ayush";

// // a.style.color = "green";
// // a.style.backgroundColor = "black";
// // a.addEventListener("click", function () {
// //   a.innerHTML = "yoo boiii whats upp";
// //   a.style.color = "blue";
// //   a.style.backgroundColor = "#000";
// // // });
// // let bulb = document.querySelector("#bulb");
// // let btn = document.querySelector("button");

// // let flag = 0;

// // btn.addEventListener("click", function () {
// //   if (flag == 0) {
// //     bulb.style.backgroundColor = "yellow";
// //     console.log("on");

// //     flag = 1;
// //   } else {
// //     bulb.style.backgroundColor = "gray";
// //     console.log("off");
// //     flag = 0;
// //   }
// // });

// // let h = document.querySelectorAll("h1");
// // h.forEach(function (e) {
// //   console.log(e);
// // });

// let addfriend = document.querySelector("#add");
// let removefriend = document.querySelector("#remove");
// let stat = document.querySelector("h4");
// addfriend.addEventListener("click", function () {
//   stat.innerHTML = "Friends";
//   stat.style.color = "lightgreen";
//   addfriend.style.display = "none";
//   removefriend.style.display = "block";
// });
// removefriend.addEventListener("click", function () {
//   stat.innerHTML = "Stranger";
//   stat.style.color = "lightblue";
//   addfriend.style.display = "block";
//   removefriend.style.display = "none";
// });

// let con = document.querySelector(".container");
// let like = document.querySelector("i");
// let likebtn = document.querySelector("#like");
// let tap = 0;
// con.addEventListener("dblclick", function () {
//   if (tap == 0) {
//     like.style.transform = "translate(-50%, -50%) scale(1)";
//     like.style.opacity = "0.9";
//     likebtn.style.color = "red";
//     setTimeout(function () {
//       like.style.transform = "translate(-50%, -50%) scale(0)";
//       like.style.opacity = "0";
//     }, 1000);
//     tap = 1;
//   } else {
//     like.style.transform = "translate(-50%, -50%) scale(0)";
//     like.style.opacity = "0";
//     likebtn.style.color = "gray";
//     tap = 0;
//   }
// });

// likebtn.addEventListener("click", function () {
//   if (tap == 0) {
//     like.style.transform = "translate(-50%, -50%) scale(1)";
//     like.style.opacity = "0.9";
//     likebtn.style.color = "red";
//     setTimeout(function () {
//       like.style.transform = "translate(-50%, -50%) scale(0)";
//       like.style.opacity = "0";
//     }, 1000);
//     tap = 1;
//   } else {
//     like.style.transform = "translate(-50%, -50%) scale(0)";
//     like.style.opacity = "0";
//     likebtn.style.color = "gray";
//     tap = 0;
//   }
// });
// let main = document.querySelector("#main");
// let cursor = document.querySelector(".cursour");
// main.addEventListener("mousemove", function (e) {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });
