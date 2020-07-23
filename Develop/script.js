// SET VARIABLES
let generateBtn = document.getElementById("generate");

let specialCharacters = "!@#$%^&*(){<>?|";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";

let newChar = specialCharacters.split("");
let newAlpha = alphabet.split("");
let newNumbers = numbers.split("");
let combined = [newChar, newAlpha, newNumbers];

// POPUP SCREEN
// let promptNumVal = prompt(
//   "How long do you want the password to be? 8-128 Characters"
// );
// let lowerCase = confirm("Do you want Lowercase Letters?");
// let upperCase = confirm("Do you want Uppercase Letters?");
// let number = confirm("Do you want Numbers?");
// let specialChar = confirm("Do you want Special Characters?");

// LOOPS
// for (let i = 0; i < promptNumVal; i++) {
//   let randomIndex = Math.floor(Math.random() * specialCharacters.length);
//   password += specialCharacters[randomIndex];
//   console.log(password);
// }

// for (let i = 0; i < promptNumVal; i++) {
//   let randomIndex = Math.floor(Math.random() * alphabet.length);
//   password += alphabet[randomIndex];
//   console.log(password);
// }

// for (let i = 0; i < promptNumVal; i++) {
//   let randomIndex = Math.floor(Math.random() * numbers.length);
//   password += numbers[randomIndex];
//   console.log(password);
// }

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // prompt("");
  // passwordText.value = password;
  prompt("How many characters do you want your password to be?");
}

// SCOTTS CODE
// function generator(characterArray) {
//   let userInput = 25
//   let password = “”
//   for (let i = 0; i < userInput; i++) {
//     let randomIndex = Math.floor(Math.random()*characterArray.length)
//     password = characterArray[randomIndex]
//     passwordText.value += password;
//   }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
