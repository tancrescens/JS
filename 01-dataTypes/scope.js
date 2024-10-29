let prompt = require("prompt-sync")();
{
  // scope 1
  let x = parseInt(prompt("Enter a number: "));

  if (true) {
    // scope 2
    let x = parseInt(prompt("Enter a second number: ")); // This is a scope
    console.log("scope 2 x: ", x);
  }

  console.log("scope 1 x: ", x);
}
