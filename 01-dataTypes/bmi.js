const prompt = require("prompt-sync")();

// BMI calculator
let weight = prompt("Please enter your weight: ");
// weight = parseFloat(weight);
let height = prompt("Please enter your height(m): ");
// height = parseFloat(height);
console.log(typeof weight);
console.log(typeof height);

let bmi = weight / (height * height);
console.log("Your bmi is", bmi);
