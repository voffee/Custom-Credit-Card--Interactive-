
// Define UI Variables
const cardholderNameInput = document.querySelector('.cardholder-name-input');
const cardholderNameDisplay = document.querySelector('.cardholder-name-display p:nth-child(2)');

// Add event listeners
cardholderNameInput.addEventListener('input', () => {
    cardholderNameDisplay.textContent = cardholderNameInput.value;
});