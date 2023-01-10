// Array of special characters to be included in password
var characters = {

  specialCharacters: [
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
  ],

  // Array of numeric characters to be included in password
  numericCharacters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],

  // Array of lowercase characters to be included in password
  lowerCasedCharacters: [
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
  ],

  // Array of uppercase characters to be included in password
  upperCasedCharacters: [
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
  ],
}

var passwordLength
var fullCharSet = []
var listProperty = Object.keys(characters);
var fullPassword = ""




// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("How many characters should the password contain? Must be between 10 & 64 characters.");
  if (passwordLength < 10 && passwordLength > 0) {
    alert("This password has too few characters. Try again!");
    passwordLength = prompt("How many characters should the password contain? Must be between 10 & 64 characters.");
  } else if (passwordLength > 64) {
    alert("This password has too many characters. Please enter another value.");
    passwordLength = prompt("How many characters should the password contain? Must be between 10 & 64 characters.");
  } else if (passwordLength === undefined) {
    return false;
  }
  else {
    characterTypeSelect();
    if (fullCharSet.length < 1) {
      alert("You must select one character type. Please try again.");
      return;
    } else {
      alert("Your password will now be generated.")
    }
  }
}

// Function for asking user about inclusion of different character types and using titles of each property in the object


function characterTypeSelect() {
  for (let i in characters) {
    // This code is for the use of the name of each property
    var charTitle = listProperty.shift();
    var editedCharTitle = charTitle.replace(/[A-Z]/g, ' $&').trim().toLowerCase();
    // Code for decision on each character set and adding to fullCharSet array
    var charDecision = confirm("Do you want to include " + editedCharTitle + " ?");
    if (charDecision === true) {
      fullCharSet = fullCharSet.concat(characters[i]);
      var capCharTitle =
        editedCharTitle.charAt(0).toUpperCase()
        + editedCharTitle.slice(1)
      alert(capCharTitle + " will be generated in the password.")
    } else if (charDecision === false) {
      continue
    }
  }
}


// Function for selecting a random element in an array

var randomArrElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
    ;
}

// Function to generate password with user input using fullCharSet array
function generatePassword() {
  getPasswordOptions();
  for (var x = 0; x <= passwordLength; x++) {
    fullPassword += randomArrElement(fullCharSet);
  }
  console.log(fullPassword);
  return fullPassword;

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