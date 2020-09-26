// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characterAmount = prompt("Enter desired password length.(Must be between 8 and 128 characters)")
  var includeUpper = prompt("Would you like to include uppercase letters?")
  var includeLower = prompt("Would you like to include lowercase letters?")
  var includeNumbers = prompt("Would you like to include numbers?")
  var includeSymbols = prompt("Would you like to include symbols?")
}