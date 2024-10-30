{
  let prompt = require("prompt-sync")();

  // scope 1
  let x = 1;
  console.log("scope 1 x: ", x);

  if (true) {
    // scope 2
    let x = 2;
    console.log("scope 2 x: ", x);
  }
}

// functions
function hello() {
  let x = 3;
  console.log("hello function: ", x);
}
console.log(hello);
