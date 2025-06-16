let a = document.querySelector("h1");
// a.innerHTML = "my name is ayush";

// a.style.color = "green";
// a.style.backgroundColor = "black";
// a.addEventListener("click", function () {
//   a.innerHTML = "yoo boiii whats upp";
//   a.style.color = "blue";
//   a.style.backgroundColor = "#000";
// });
let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    console.log("on");

    flag = 1;
  } else {
    bulb.style.backgroundColor = "gray";
    console.log("off");
    flag = 0;
  }
});

let h = document.querySelectorAll("h1");
h.forEach(function (e) {
  console.log(e);
});
