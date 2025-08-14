document.addEventListener('DOMContentLoaded', () => {
    // const calculateBtn = document.getElementById('calculate-btn'); // REMOVE THIS LINE
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiValueSpan = document.getElementById('bmi-value');
    // FIX IS HERE: Use document.getElementById()
    const bmiStatusSpan = document.getElementById('bmi-status'); 

    // Function to calculate and update BMI display
    const updateBmiDisplay = () => {
        const heightCm = parseFloat(heightInput.value);
        const weightKg = parseFloat(weightInput.value);

        if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
            bmiValueSpan.textContent = '--';
            bmiStatusSpan.textContent = 'Invalid Input';
            bmiStatusSpan.className = 'bmi-status-text'; // Resets class in case of error
            return;
        }

        const heightM = heightCm / 100;
        const bmi = weightKg / (heightM * heightM);
        bmiValueSpan.textContent = bmi.toFixed(1); // Rounded to one decimal place for display

        let statusText = '';
        let statusClass = '';

        if (bmi < 18.5) {
            statusText = 'Underweight BMI';
            statusClass = 'status-underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            statusText = 'Normal BMI';
            statusClass = 'status-normal';
        } else if (bmi >= 25 && bmi < 30) {
            statusText = 'Overweight BMI';
            statusClass = 'status-overweight';
        } else { // bmi >= 30
            statusText = 'Obese BMI';
            statusClass = 'status-obese';
        }

        bmiStatusSpan.textContent = statusText;
        bmiStatusSpan.className = `bmi-status-text ${statusClass}`; // Apply the correct status class
    };

    // Attach event listeners for input changes to height and weight fields
    heightInput.addEventListener('input', updateBmiDisplay);
    weightInput.addEventListener('input', updateBmiDisplay);

    // Initial calculation and display when the page loads
    updateBmiDisplay();
});