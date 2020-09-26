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
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);