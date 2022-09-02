let displayContent;
const displayArray = []; 
const display = document.querySelector('.display'); 
const numberButtons = document.querySelector('.number-buttons'); 
const operatorButtons = document.querySelector('.operator-buttons'); 

function add(a, b){ 
    return a + b
} 

function subtract(a, b){ 
    return a - b
} 

function multiply(a, b){ 
    return a * b 
} 

function divide(a, b){ 
    return a / b
} 

numberButtons.addEventListener('click', function(e){ 
    switch(e.target.id){ 
        case 'one': 
        displayArray.push(1); 
        break;
        
        case 'two': 
        displayArray.push(2); 
        break;

        case 'three': 
        displayArray.push(3); 
        break;

        case 'four': 
        displayArray.push(4); 
        break;

        case 'five': 
        displayArray.push(5); 
        break;

        case 'six': 
        displayArray.push(6); 
        break;

        case 'seven': 
        displayArray.push(7); 
        break;

        case 'eight': 
        displayArray.push(8); 
        break; 

        case 'nine': 
        displayArray.push(9); 
        break; 

        case 'zero': 
        displayArray.push(0); 
        break; 

        
    }
     displayContent = displayArray.join(""); 
    display.textContent = displayContent;

})

operatorButtons.addEventListener('click', function(e){ 
    switch(e.target.id){ 
        case 'plus': 
        displayArray.push(" + "); 
        break; 

        case 'minus': 
        displayArray.push(' - ');
        break; 

        case 'star': 
        displayArray.push(' * '); 
        break; 

        case 'slash': 
        displayArray.push(' / '); 
         break; 
    }
    displayContent = displayArray.join(""); 
    display.textContent = displayContent;
})

