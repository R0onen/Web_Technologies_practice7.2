function calculateBMI(weight, height) {
    // Calculate BMI
    let bmi = weight / (height * height);

    // Determine the category and return the appropriate message
    if (bmi < 18.5) {
        return `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
    }
}

let result = calculateBMI(weight, height);
document.getElementById("bmiResult").innerHTML = result;
