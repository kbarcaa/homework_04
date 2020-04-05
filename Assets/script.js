// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

var h1Tag = document.getElementById("password")


function getPwOptions(){
  // Asking pw length. switched string --> numbers by 'parseInt' 
  var pwLength = parseInt(prompt("Please enter the desired length for the password."));
  if(pwLength <= 7 || pwLength >= 129) {
    alert("Password must be bewtween 8 and 128 characters.");
    var pwLength = parseInt(prompt("Please enter the desired length for the password."));
    while (pwLength <= 7 || pwLength >= 129) {
      alert("Password must be bewtween 8 and 128 characters.");
      getPwOptions()};
  } 
  else if (pwLength > 7 || pwLength < 129){
    alert("The length of your password will be: " + pwLength);
    console.log("The length of your password will be: " + pwLength);
  }
  else {
    alert ("Must enter a number. Please try again.");
    getPwOptions();
  };

  var number = confirm("Do you want numbers in your password?");
  if (number === true) {
    console.log("The password will include numbers.")
  }
  else {
    alert("The password will NOT include numbers.");
    console.log("The password will NOT include numbers.");
  };

  var pwUpper = confirm("Do you want upper case alphabets in your password?");
  if (pwUpper === true) {
    console.log("The password will include upper case alphabets.")
  }
  else {
    alert("The password will NOT include upper case alphabets.");
    console.log("The password will NOT include upper case alphabets.");
  };

  var pwSpecialChar = confirm("Do you want special characters in your password?");
  if (pwSpecialChar === true) {
    console.log("The password will include special characters.")
  }
  else {
    alert("The password will NOT include special characters.");
    console.log("The password will NOT include special characters.");
};

console.log("Result: " + "(Numbers: " + number + "); (Upper Case: " + pwUpper +"); (Special Characters: " + pwSpecialChar + ")") ;


// Combo1: Password with all 3 options
if (number === true && pwUpper === true && pwSpecialChar === true){

  function generate(pwLength) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+';
    var charactersLength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 }
 
 h1Tag.textContent = generate(pwLength);
}

// Combo2:Password with no number
else if (number !== true && pwUpper === true && pwSpecialChar === true){

  function generate(pwLength) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`~!@#$%^&*()-_=+';
    var charactersLength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 };
 h1Tag.textContent = generate(pwLength);
}

// Combo3: Password with no number && no upper case
else if (number !== true && pwUpper !== true && pwSpecialChar === true){

  function generate(pwLength) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz`~!@#$%^&*()-_=+';
    var charactersLength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 };
 h1Tag.textContent = generate(pwLength);
}

// Combo4: Password with no number && no special case
else if (number !== true && pwUpper === true && pwSpecialChar !== true){

  function generate(pwLength) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 };
 h1Tag.textContent = generate(pwLength);
}

// Combo5: Password with no upper case
else if (number === true && pwUpper !== true && pwSpecialChar === true){
  
  function generate(pwLength) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+';
    var charactersLength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 };
 h1Tag.textContent = generate(pwLength);
}

// Combo6: Password with no upper case && no special character
else if (number === true && pwUpper !== true && pwSpecialChar !== true){

  function generate(pwLength) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 };
 h1Tag.textContent = generate(pwLength);
}

// Combo7: Password with no special case
else if (number === true && pwUpper === true && pwSpecialChar !== true){
  
  function generate(pwLength) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 };
 
 h1Tag.textContent = generate(pwLength);
} 

// Combo 8: Nothing. Redo alert.
else if (number !== true && pwUpper !== true && pwSpecialChar !== true){
  alert("The password must contain at least one of the 3 options. Please try again.");
  }
}



// getPwOptions();

// Add event listener to generate button
generateBtn.addEventListener("click", getPwOptions);
