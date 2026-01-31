// VARIABLES (can change)
let firstName = "Tanner";
let age = 22;

// CONSTANTS (cannot change)
const school = "BYU-Idaho";
const course = "WDD 131";

// Modify variable
age = age + 1;

// Output to the page
const output = document.querySelector("#output");

output.textContent =
  "Name: " + firstName +
  " | Age: " + age +
  " | School: " + school +
  " | Course: " + course;

// Console examples (from video)
console.log(firstName);
console.log(age);
console.log(school);
console.log(course);
