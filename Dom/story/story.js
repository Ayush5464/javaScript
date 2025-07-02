let arr = [
  {
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1671541242938-400e56937ba7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://media.istockphoto.com/id/1410862492/photo/closeup-face-of-young-attractive-girl-looking-at-camera-isolated-on-orange-color-background.webp?a=1&s=612x612&w=0&k=20&c=y8Bok78HOLJdYP9q-HKFVy0ORBSCf8EMHlcI3lxTtHo=",
    story:
      "https://plus.unsplash.com/premium_photo-1670297116166-101ad52af1b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1669951867704-a78fd21fbbd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1673038752584-0f1468d65137?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1668485967268-f757c5799b1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1669951581968-73b5b71face3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1669951582229-1f9412917624?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
];

let stories = document.querySelector(".stories");
let fullscreen = document.querySelector(".fullScreen");
let clutter = "";
arr.forEach(function (e, idx) {
  clutter += `<div class="story">
          <img id="${idx}" src="${e.dp}" alt="" />
        </div>`;
});

stories.innerHTML = clutter;
stories.addEventListener("click", function (e) {
  fullscreen.style.display = "block";
  fullscreen.style.backgroundImage = `url(${arr[e.target.id].story})`;

  setTimeout(function () {
    fullscreen.style.display = "none";
  }, 3000);
});
