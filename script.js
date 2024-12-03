let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.onclick = () => {
        let value = button.textContent;

        if (value === 'AC') {
            inputBox.value = '';  // Clear the input
        } else if (value === 'DEL') {
            inputBox.value = inputBox.value.slice(0, -1);  // Delete last character
        } else if (value === '=') {
            
                inputBox.value = eval(inputBox.value);  // Calculate result
         
        } else {
            inputBox.value += value;  // Add number to input
        }
    };
});




