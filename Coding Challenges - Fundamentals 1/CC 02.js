
// Mark Data
const MarkWeight = 78;
const MarkHeight = 1.69;
const MarkBMI = calculateBMI(78, 1.69, "Mark");

// John Data
const JohnWeight = 92;
const JohnHeight = 1.95;
const JohnBMI = calculateBMI(92, 1.95, "John");


// BMI calculations
function calculateBMI(weight, height, name) {
    let BMI = weight / height ** 2
    console.log(`${name}'s value is ${BMI}`)
    return BMI
}

// Higher BMI condition
let markHigherBMI;

if(MarkBMI > JohnBMI) {
    markHigherBMI = `Mark has a higher BMI. He has a value of ${MarkBMI}, John's was ${JohnBMI}`;
}   else {
    markHigherBMI = `John has a higher BMI. He has a value of ${JohnBMI}, Mark's was ${MarkBMI}`;
}

console.log(markHigherBMI);