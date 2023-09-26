// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase 
var lowerCase;
var specialCharacter;
var numbers;

// Write password to the #password input
function writePassword() {
  var characters = prompt("how many characters do you want your password to have?");
  if (characters >= 8 && characters <= 128) {
    upperCase = confirm("Would you like uppercase letters in your password?");
    lowerCase = confirm("Would you like lowercase letters in your password?");
    specialCharacter = confirm ("Would you like special characters in your password?");
    numbers = confirm ("Would you like numbers in your password?");
    var newArray = [characters, upperCase, lowerCase, specialCharacter, numbers];
  } else alert("Invalid Response, please try again")
 

  //  var password = generatePassword();
  //  var passwordText = document.querySelector("#password");

  // passwordText.value = password;


console.log(newArray);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

