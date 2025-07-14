let pross = new Promise((resolve, reject) => {
  let value = 10 * Math.random();
  setTimeout(() => {
    if (value > 7) {
      return resolve("you make it ");
    } else {
      return reject("You fail");
    }
  }, 100);
});

pross
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.error(rej);
  });
