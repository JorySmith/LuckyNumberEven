
// Get the values
// Starts or controller function
function getValues() {
    // Get values form the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Validate inputs
    // Try to parse input into integers 
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // If inputs are integers, call generateNumbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Call generateNumbers
        let numbers = generateNumbers(startValue,endValue);
        // Call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("Please enter integers");
    }        
}

// Generate numbers from startValue and endValue
// Logic functions
function generateNumbers(sValue, eValue) {
    let numbers = [];
    // Get all numbers from start to end
    for(let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Display numbers on page, high even numbers in bold
// Display or view functions
function displayNumbers(numbers) {
    // Create a rows template
    let rowsTemplate = "";
    // Loop through each number from startValue to endValue
    for (let i = 0; i < numbers.length; i++) {
        // Store each value
        let number = numbers[i];
        // See if number is even, store result
        let className = ""
        // If even, assign even to className
        if (number % 2 == 0) {
            className = "even"
        }
        // Create a table row with className and TD for each value
        rowsTemplate += `<tr class="${className}"><td>${number}</td></tr>`;
        // Add new row to results page
        document.getElementById("results").innerHTML = rowsTemplate;
        
    }
}