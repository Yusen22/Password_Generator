// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var fullCharSet = []

// Function to prompt user for password options
function getPasswordOptions() {
  {
    var passwordLength = prompt("How many characters should the password contain? Must be between 10 & 64 characters.");
    if (passwordLength < 10) {
      alert("This password has too few characters. Please enter another value.");
      passwordLength = prompt("How many characters should the password contain? Must be between 10 & 64 characters.");
    } else if (passwordLength > 64) {
      alert("This password has too many characters. Please enter another value.");
      passwordLength = prompt("How many characters should the password contain? Must be between 10 & 64 characters.");
    } else {
      characterTypeSelect(specialCharacters);
      characterTypeSelect(numericCharacters);
      characterTypeSelect(lowerCasedCharacters);
      characterTypeSelect(upperCasedCharacters);
    }
  }
}

// Function for asking user about inclusion of different character types

function characterTypeSelect(charset) {
  var charDecision = confirm("Do you want to include " + charset + " ?");
  if (charDecision === true) {
    fullCharSet = fullCharSet.concat(charset);
    alert(charset + " will be generated in the password.")
  } else return
}

// Function for getting a random element from an array

var randomArrElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
    ;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);