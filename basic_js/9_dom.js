// let title = document.getElementById("title");
// title.style.backgroundColor = "orange";
// title.style.padding = "20px";
// title.style.borderRadius = "20px";
// title.innerText

// let parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// let stopColourChange = document.getElementById('stop').addEventListener('click' stopChange())

const changeColour = function () {
  let hex = "123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
   colour += hex[Math.floor(Math.random() * 16)];
  }
  return colour;
};
let interval;
let startColourChange = function () {
  function backgroundColor() {
    document.body.style.backgroundColor = changeColour();
  }
  interval = setInterval(backgroundColor, 2000);
};
let stopColourChange = function () {
  clearInterval(interval);
};
document.querySelector("#start").addEventListener("click", startColourChange);
document.querySelector("#stop").addEventListener("click", stopColourChange);
//

// console.log(changeColour())