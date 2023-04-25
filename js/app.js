
// Define UI Variables
const cardholderNameInput = document.querySelector('.cardholder-name-input');
const cardholderNameDisplay = document.querySelector('.cardholder-name-display p:nth-child(2)');

const cardnumberInput = document.querySelector('.card-number-input');
const cardnumberDisplay = document.querySelector('.card-number-display p');

const monthInput = document.querySelector('.month-input');
const monthInputDisplay = document.querySelector('.expiry-mm-yy p:nth-child(1)');

const yearInput = document.querySelector('.year-input');
const yearInputDisplay = document.querySelector('.expiry-mm-yy p:nth-child(2)');

const cvcInput = document.querySelector('.cvc-input');
const cvcDisplay = document.querySelector('.cvc-display');

const mouseTrigger = document.querySelector('.card-container');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

// Add event listeners
// Cardholder name input display
cardholderNameInput.addEventListener('input', () => {
    cardholderNameDisplay.textContent = cardholderNameInput.value;
});

// Cvc display (BACK)
cvcInput.addEventListener('input', () => {
    cvcDisplay.textContent = cvcInput.value;
});

// Card Number Update w/ spaces
cardnumberInput.addEventListener('input', () => {
    let inputValue = cardnumberInput.value;
    let outputValue = '';
    
    // Code to add space after 4 character inputs
    for (let i = 0; i < inputValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            outputValue += ' ';
        }
        outputValue += inputValue[i];
    }
    cardnumberDisplay.textContent = outputValue;
});

// MM display
monthInput.addEventListener('change', () => {
    monthInputDisplay.textContent = monthInput.value; 
    console.log(monthInput.value);
});

// YY display
yearInput.addEventListener('change', () => {
    yearInputDisplay.textContent = yearInput.value; 
    console.log(yearInput.value);
});