/* Lesson 3 */

/* FUNCTIONS */
// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
// Step 9: Test all of the mathematical functionality of the task3.html page.

//add
function add (number1, number2) {
    return (number1 * 1) + (number2 * 1);
}

function addNumbers () {
    let num1 = document.querySelector('#addend1').value;
    let num2 = document.querySelector('#addend2').value;
    return (document.getElementById('sum').value = add(num1, num2));
}

const addButtonElement = document.getElementById('addNumbers');
addButtonElement.addEventListener('click', addNumbers);

//subtract
const subtract = function (number1, number2) {
    return (number1 * 1) - (number2 * 1);
}

const subtractNumbers  = function () {
    let num1 = document.querySelector('#minuend').value;
    let num2 = document.querySelector('#subtrahend').value;
    return (document.getElementById('difference').value = subtract(num1, num2));
}

const subtractButtonElement = document.getElementById('subtractNumbers');
subtractButtonElement.addEventListener('click', subtractNumbers);

//multiply
const multiply = (number1, number2) => {
    return (number1 * 1) * (number2 * 1);
}

const multiplyNumbers = ()  => {
    let num1 = document.querySelector('#factor1').value;
    let num2 = document.querySelector('#factor2').value;
    return (document.getElementById('product').value = multiply(num1, num2));
}

const multiplyButtonElement = document.getElementById('multiplyNumbers');
multiplyButtonElement.addEventListener('click', multiplyNumbers);

//divide
function divide (number1, number2) {
    return (number1 * 1) / (number2 * 1);
}

function divideNumbers () {
    let num1 = document.querySelector('#dividend').value;
    let num2 = document.querySelector('#divisor').value;
    return (document.getElementById('quotient').value = divide(num1, num2));
}

const divideButtonElement = document.getElementById('divideNumbers');
divideButtonElement.addEventListener('click', divideNumbers);

/* BUILT-IN METHODS */
// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
// Step 4: Assign the current year variable to an HTML form element with an ID of year

const date = new Date();
let year = '';

year = date.getFullYear();

document.getElementById('year').innerHTML = year;


/* ARRAY METHODS */
// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

//original array
let array = [];

for (let i=1; i < 26; i++) {
    array.push(i);
}

document.getElementById('array').innerHTML = array;

//odds array
let odds = array.filter(justOdds);

function justOdds(i) {
    if (i % 2 != 0) {
        return i;
    }
    else {
        return;
    }
}

document.getElementById('odds').innerHTML = odds;

//evens array
let evens = array.filter(justEvens);

function justEvens(i) {
    if (i % 2 === 0) {
        return i;
    }
    else {
        return;
    }
}

document.getElementById('evens').innerHTML = evens;

//sum array
let sumArray = array.reduce(sumFunction);

function sumFunction(sum, i) {
    return sum + i;
}

document.getElementById('sumOfArray').innerHTML = sumArray;

//multiply array
let multiplyArray = array.map(multiplyFunction);
function multiplyFunction(i) {
    return i * 2;
}

document.getElementById('multiplied').innerHTML = multiplyArray;

//multiply then sum array
let both = array.map(multiplyFunction).reduce(sumFunction);

document.getElementById('sumOfMultiplied').innerHTML = both;