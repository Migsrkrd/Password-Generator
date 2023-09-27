// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase 
var lowerCase;
var specialCharacter;
var numbers;

//testing zone_____________________________________________________________________________________
var upperCaseOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz"
var specialCharacterOptions = '!@#$%&*()+?'

var numberOptionsCode = Math.floor(Math.random()*10); //random numbers
console.log(numberOptionsCode);

var lowerOptionsCode = lowerCaseOptions.charAt(Math.floor(Math.random()*lowerCaseOptions.length)); //random lower case letters
console.log(lowerOptionsCode);

var upperOptionsCode = upperCaseOptions.charAt(Math.floor(Math.random()*upperCaseOptions.length)) //random upper case letters
console.log(upperOptionsCode);

var specialOptionsCode = specialCharacterOptions.charAt(Math.floor(Math.random()*specialCharacterOptions.length)); //random special characters
console.log(specialOptionsCode);


//testing zone ____________________________________________________________________________________
function generatePassword(){
  password = ""
var characters = prompt("how many characters do you want your password to have?");
if (characters >= 8 && characters <= 128) {
  upperCase = confirm("Would you like uppercase letters in your password?");
  lowerCase = confirm("Would you like lowercase letters in your password?");
  specialCharacter = confirm ("Would you like special characters in your password?");
  numbers = confirm ("Would you like numbers in your password?");
  var newArray = [characters, upperCase, lowerCase, specialCharacter, numbers];
} else alert("Invalid Response, please try again");
console.log(newArray);


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

