function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers

    resetFields();

    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
            let result1 = add(num1, num2);
            displayResult(result1, "add");

            let result2 = multiply(num1, num2);
            // Display the result
            displayResult(result2, "multiply");

            let result3 = divide(num1, num2);

            displayResult(result3, "divide");
        } else {
            displayResult('Please enter valid numbers', "add");
        }

    }
    function multiply(a, b) {
        
        // Multiply the numbers
        return a * b;
    }

    function add(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;
        return a + b;
    }

    function divide(a, b) {
        return a / b;
    }
    function displayResult(result, operation) {
        const fieldname = operation + "Result";
        // Display the result in the paragraph element
        const resultElement = document.getElementById(fieldname);
        resultElement.textContent = `The ${operation} result is: ${result}`;
    }

    function resetFields() {
        const fieldnames = ["addResult", "multiplyResult", "divideResult"];
        fieldnames.forEach((fieldname) => {
            const resultElement = document.getElementById(fieldname);
            resultElement.textContent = "";
        })
        
    }