// Assignment Code
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", ""];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", ];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPwOptions(){
  // Asking pw length. switched string --> numbers by 'parseInt' 
  var pwLength = parseInt(prompt("Please enter the desired length for the password"));
  if(pwLength < 8 || pwLength > 128) {
    alert("Password must be bewtween 8 and 128 characters");
  }
  else if (pwLength >= 9 && pwLength < 129){
    confirm("The length of your password will be: " + pwLength);
    console.log("The length of your password will be: " + pwLength);
  };

  var pwLower = confirm("Do you want lower case alphabets in your password?");
  if (pwLower.toLowercase === true) {
    alert("The password will include lower case alphabets");
    console.log("The password will include lower case alphabets.")
  }
  else {
    alert("The password will NOT include lower case alphabets.");
    console.log("The password will NOT include lower case alphabets.");
  };

  var pwUpper = confirm("Do you want upper case alphabets in your password?");
  if (pwUpper.toLowercase === true) {
    alert("The password will include upper case alphabets");
    console.log("The password will include upper case alphabets.")
  }
  else {
    alert("The password will NOT include upper case alphabets.");
    console.log("The password will NOT include upper case alphabets.");
  };

  var pwSpecialChar = confirm("Do you want special characters in your password?");
  if (pwSpecialChar === true) {
    alert("The password will include special characters");
    console.log("The password will include special characters.")
  }
  else {
    alert("The password will NOT include special characters.");
    console.log("The password will NOT include special characters.");
  };
};

getPwOptions();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


