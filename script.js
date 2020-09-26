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

  if (includeUpper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeLower) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);