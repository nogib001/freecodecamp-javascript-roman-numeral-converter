const form = document.getElementById("form");
const button = document.getElementById("convert-btn");
const userOutput = document.getElementById("output");
const userInput = document.getElementById("number");


const romanNumericals = [
{roman: 'M', value: 1000},
{roman: 'CM', value: 900},
{roman: 'D', value: 500},
{roman: 'CD', value: 400},
{roman: 'C', value: 100},
{roman: 'XC', value: 90},
{roman: 'L', value: 50},
{roman: 'XL', value: 40},
{roman: 'X', value: 10},
{roman: 'IX', value: 9},
{roman: 'V', value: 5},
{roman: 'IV', value: 4},
{roman: 'I', value: 1},
];

function matchCheck() {

  // checks for empty and whitespace characters
  const trimmedInput = userInput.value.trim();

  // converts the user input string to a number
  const inputValue = Number(userInput.value);

// debugging start

// function triggered shows that matchCheck() is triggered. User input shows what the user has put in. Converted input shows how the input was processed. We want a clean number.

console.log('Function triggered');
console.log(`User input: ${userInput.value}`);
console.log(`Converted input: ${inputValue}`);
console.log()

// debugging end

if (trimmedInput === "") {
  userOutput.innerText = 'Please enter a valid number';
    return;
}

  if (isNaN(inputValue)) {
    userOutput.innerText = 'Please enter a valid number';
    return;
  }

if (inputValue < 1) {
  userOutput.innerText = 'Please enter a number greater than or equal to 1';
    return;
}

if (inputValue > 3999) {
  userOutput.innerText = 'Please enter a number less than or equal to 3999';
  return;
}

let romanResult = "";
let remainingValue = inputValue;

for (const numeral of romanNumericals) {
  while (remainingValue >= numeral.value) {
    romanResult += numeral.roman;
    remainingValue -= numeral.value;
  }
}

if (romanResult) {
  userOutput.innerText = `${romanResult}`;
} else {
  userOutput.innerText = 'No matching Roman numeral';
}
}

button.addEventListener("click", matchCheck);

button.addEventListener("click", () => {
  output.style.display = "block";
});