// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterAmount = prompt("Enter desired password length.(Must be between 8 and 128 characters)")
  var includeUpper = confirm("Would you like to include uppercase letters?")
  var includeLower = confirm("Would you like to include lowercase letters?")
  var includeNumbers = confirm("Would you like to include numbers?")
  var includeSymbols = confirm("Would you like to include symbols?")

var charArray = {
  lowerChar: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  upperChar: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  numberChar: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },
  symbolChar: function() {
    return symbols[Math.floor(Math.random() * symbols.length)]
  }
}
const symbols = "!@#$%^&*()";

var minAmount = 0;
var minUpper = "";
var minLower = "";
var minNumber = "";
var minSymbol = "";

if (includeUpper === true) {
  minUpper = charArray.upperChar();
  minAmount++;
}
if (includeLower === true) {
  minLower = charArray.lowerChar();
  minAmount++;
}
if (includeNumbers === true) {
  minNumber = charArray.numberChar();
  minAmount++;
}
if (includeSymbols === true) {
  minSymbol = charArray.symbolChar();
  minAmount++;
}
var randomGen = "";
for (let i = 0; i < (parseInt(characterAmount) - minAmount); i++) {
  var randomNumber = Math.floor(math.random() * 4);
  randomGen += randomNumber;
}

randomGen += minUpper;
randomGen += minLower;
randomGen += minNumber;
randomGen += minSymbol;

return randomGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);