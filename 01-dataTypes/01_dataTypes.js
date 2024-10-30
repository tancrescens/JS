const prompt = require("prompt-sync")();

// DATA TYPES:
// 1. Changing by value vs Changing by reference;
let originalPrimitive = 1;
let newPrimitive = originalPrimitive;

let OriginalNonPrimitive = { key1: "value1" };
let newNonPrimitive = OriginalNonPrimitive;

//changing the values
originalPrimitive = originalPrimitive + 1;
console.log("original primitive: ", originalPrimitive);
console.log("new primitive: ", newPrimitive);

OriginalNonPrimitive.key3 = "value3";
console.log("original non-primitive: ", OriginalNonPrimitive);
console.log("new non-primitive: ", newNonPrimitive);

// =====================================================================
// 2. Comparison behavior
// ==
let isTrue = 1 == "1";
console.log(isTrue);

// ===
let isTrue2 = 1 === "1";
console.log(isTrue2);
// !=

// !==
let intake = prompt("enter 2 of string type: ");
let newIntake = parseInt(intake);
console.log(newIntake === 2);

// >

// <

// >=

// <=

// ====
