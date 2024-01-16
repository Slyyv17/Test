function calculateBMI() {
    let weightInput = document.getElementById("weight");
    let heightInput = document.getElementById("height");
    let result = document.getElementById("output");

    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        result.innerHTML = "Please enter a valid weight and height";
        return;
    }

    let bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi <= 18.25) {
        category = "Underweight";
    } else if (bmi <= 25) {
        category = "Normal Weight";
    } else if (bmi <= 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}

// 