// Assignment Code
let generateBtn = document.getElementById("generate");
let passwordText = document.getElementById("password");
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let numberChar = "1234567890";
let specialChar = "!@#$%^&*()?{}|";
let customChar = "";

// Write password to the #password input
function writePassword() {
  document.getElementById("password").value = "";

  generator(customChar);
}
function generator(characterArray) {
  let promptCount = parseInt(
    prompt("How many characters should your password be?")
  );

  while (isNaN(promptCount) === true || promptCount < 8 || promptCount > 128) {
    if (isNaN(promptCount) === true || promptCount < 8 || promptCount > 128) {
      alert(
        "You did not input a valid number. Input must be a INTEGER that is greater than 8 or less than 128"
      );
      promptCount = prompt(
        "How many characters would you like your Password to be?"
      );
    }
  }

  let lowercaseBool = confirm("Would you like lower case letters?");

  if (lowercaseBool) {
    characterArray += lowerChar;
  }
  let uppercaseBool = confirm("Would you like upper case letters?");
  if (uppercaseBool) {
    characterArray += upperChar;
  }
  let numBool = confirm("Would you like numbers?");
  if (numBool) {
    characterArray += numberChar;
  }
  let specialCharBool = confirm("Would you like special characters?");
  if (specialCharBool) {
    characterArray += specialChar;
  }

  //pick random chars and create a pasword
  let password = "";
  for (let i = 0; i < promptCount; i++) {
    let randomIndex = Math.floor(Math.random() * characterArray.length);
    password = characterArray[randomIndex];
    console.log(password);
    passwordText.value += password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
