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
   // Function to run Qs for pw length
  getPwLength();
  
  function getPwLength(){
    // Asking pw length. switched string --> numbers by 'parseInt' 
    pwLength = parseInt(prompt("Please enter the desired length for the password."));
  

    if(pwLength <= 7 || pwLength >= 129) {
      alert("Password must be bewtween 8 and 128 characters.");
      // var pwLength = parseInt(prompt("Please enter the desired length for the password."));
      // while (pwLength <= 7 || pwLength >= 129) {
      //   alert("Password must be bewtween 8 and 128 characters.");
      // };
      getPwLength();
    } 
    else if (pwLength > 7 || pwLength < 129){
      alert("The length of your password will be: " + pwLength);
      console.log("The length of your password will be: " + pwLength);
    }
    else {
      alert ("Must enter a number. Please try again.");
      // var pwLength = parseInt(prompt("Please enter the desired length for the password."));
      getPwLength();
    }
  }

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

console.log("Result: " + "[Numbers: " + number + "]; [Upper Case: " + pwUpper +"]; [Special Characters: " + pwSpecialChar + "]") ;


// Combo1: Password with all 3 options
if (number === true && pwUpper === true && pwSpecialChar === true){

  function generate(length) {

    var result = '';
    var options = {
    set1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"], 
    };

    for(var i = 0; i < length; i++){
      result += options.set1[Math.floor(Math.random() *  options.set1.length)];
    }
    return result;
  }
 
 h1Tag.textContent = generate(pwLength);
}

// Combo2:Password with no number
else if (number !== true && pwUpper === true && pwSpecialChar === true){

  function generate(length) {

    var result = '';
    var options = {
    set1: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"], 
    };

    for(var i = 0; i < length; i++){
      result += options.set1[Math.floor(Math.random() *  options.set1.length)];
    }
    return result;
  }
 h1Tag.textContent = generate(pwLength);
}

// Combo3: Password with no number && no upper case
else if (number !== true && pwUpper !== true && pwSpecialChar === true){

  function generate(length) {

    var result = '';
    var options = {
    set1: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"], 
    };

    for(var i = 0; i < length; i++){
      result += options.set1[Math.floor(Math.random() *  options.set1.length)];
    }
    return result;
  }
 
 h1Tag.textContent = generate(pwLength);
}

// Combo4: Password with no number && no special case
else if (number !== true && pwUpper === true && pwSpecialChar !== true){

  function generate(length) {

    var result = '';
    var options = {
    set1: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], 
    };

    for(var i = 0; i < length; i++){
      result += options.set1[Math.floor(Math.random() *  options.set1.length)];
    }
    return result;
  }
 
 h1Tag.textContent = generate(pwLength);
}

// Combo5: Password with no upper case
else if (number === true && pwUpper !== true && pwSpecialChar === true){
  
  function generate(length) {

    var result = '';
    var options = {
    set1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"], 
    };

    for(var i = 0; i < length; i++){
      result += options.set1[Math.floor(Math.random() *  options.set1.length)];
    }
    return result;
  }
 
 h1Tag.textContent = generate(pwLength);
}

// Combo6: Password with no upper case && no special character
else if (number === true && pwUpper !== true && pwSpecialChar !== true){

  function generate(length) {

    var result = '';
    var options = {
    set1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",], 
    };

    for(var i = 0; i < length; i++){
      result += options.set1[Math.floor(Math.random() *  options.set1.length)];
    }
    return result;
  }
 
 h1Tag.textContent = generate(pwLength);
}

// Combo7: Password with no special case
else if (number === true && pwUpper === true && pwSpecialChar !== true){
  
  function generate(length) {

    var result = '';
    var options = {
    set1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], 
    };

    for(var i = 0; i < length; i++){
      result += options.set1[Math.floor(Math.random() *  options.set1.length)];
    }
    return result;
  }
 
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
