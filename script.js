let displayContent;
let firstNumber; 
let secondNumber; 
let firstNumberArray;
 let secondNumberArray;
let operator;
let result;
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

        case 'equals': 
        getOperator(displayArray);
        splitArray(displayArray); 
        getNumbers(firstNumberArray, secondNumberArray);
        operate(firstNumber, secondNumber); 
        displayResult(result);
        break;
    }
    displayContent = displayArray.join(""); 
    display.textContent = displayContent; 
    
   
}) 

function getOperator(array){ 
    array.forEach(element => { 
        switch(element){ 
            case ' + ': 
            operator = ' + '
            break; 

            case ' - ': 
            operator = ' - '
            break;

            case ' * ': 
            operator = ' * '
            break;

            case ' / ': 
            operator = ' / '
            break;
        }
    return operator
    })}

function splitArray(array){ 

firstNumberArray = array.slice(0, array.indexOf(operator));
 secondNumberArray = array.slice(array.indexOf(operator) + 1);

 return firstNumberArray , secondNumberArray
} 

function getNumbers(arr1, arr2){ 
    firstNumber = Number(arr1.join('')); 
    secondNumber = Number(arr2.join('')); 

    return firstNumber , secondNumber
} 

function operate(n1, n2){ 
    switch(operator){ 
        case ' + ': 
            result = add(n1, n2);
            break; 

            case ' - ': 
            result = subtract(n1, n2);
            break;

            case ' * ': 
            result = multiply(n1, n2);
            break;

            case ' / ': 
            result = divide(n1, n2);
            break;
    } 
    return result
}

function displayResult(result){ 
     displayArray.splice(0, displayArray.length); 
    displayArray.push(result); 
    return displayArray
}

