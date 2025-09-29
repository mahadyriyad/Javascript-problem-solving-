const prompt = require('prompt-sync')({ sigint: true });

const height = parseFloat(prompt("Enter height (in meters): "));
const weight = parseFloat(prompt("Enter weight (in kg): "));

const bmi = weight / (height * height);
console.log("BMI: " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 25.0) {
    console.log("Normal weight");
} else if (bmi >= 25.0 && bmi < 30.0) {
    console.log("Overweight");
} else {
    console.log("Obese");
}
