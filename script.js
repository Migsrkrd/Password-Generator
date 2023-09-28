// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase 
var lowerCase;
var specialCharacter;
var numbers;
var characters;


//testing zone_____________________________________________________________________________________
var upperCaseOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz"
var specialCharacterOptions = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numberOptions = "0123456789"

var lowerCaseArray = [];
for(var i=0;i<lowerCaseOptions.length;i++){
  lowerCaseArray[i] = lowerCaseOptions.slice(i,i+1);
} 
// lowerCaseArray ------------------

var upperCaseArray = [];
for(var i=0;i<upperCaseOptions.length;i++){
  upperCaseArray[i] = upperCaseOptions.slice(i,i+1);
}

var specialCharacterArray = [];
for(var i=0;i<specialCharacterOptions.length;i++){
  specialCharacterArray[i] = specialCharacterOptions.slice(i,i+1);
}
 var numberArray = [];
 for(var i=0;i<numberOptions.length;i++) {
  numberArray[i] = numberOptions.slice(i,i+1);
 }






 //testing zone ____________________________________________________________________________________
 function validate(){
   var characters = prompt("how many characters do you want your password to have?");
   if (characters >= 8 && characters <= 128) {
   upperCase = confirm("Would you like uppercase letters in your password?");
   lowerCase = confirm("Would you like lowercase letters in your password?");
   specialCharacter = confirm ("Would you like special characters in your password?");
   numbers = confirm ("Would you like numbers in your password?");
   } else {
    alert("Invalid Response, please try again");
    validate();
  }
  var totalArray = [];
  if(upperCase){
 totalArray = totalArray.concat(upperCaseArray);
  }
  if(lowerCase){
    totalArray = totalArray.concat(lowerCaseArray);
  }
  if(specialCharacter) {
    totalArray = totalArray.concat(specialCharacterArray);
  }
  if(numbers){
    totalArray = totalArray.concat(numberArray);
  }
  console.log(totalArray);
 }

 function generatePassword(){
  validate();
  // var passwordArray = [];
  // totalArray = [];
  // for(i=0;i<characters;i++){
  // passwordArray[i] = totalArray.At(Math.floor(Math.random()*totalArray.length));
  // }
  // console.log(passwordArray[i]);
  //  var password = passwordArray.join("");
  //  console.log(password)
  }




























  // if (characters && upperCase && lowerCase && specialCharacter && numbers){
  //   allTrue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()+?0123456789";
  
  
   
    


      


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

