// Assignment Code
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", ""];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", ];
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPwOptions(){
  // Asking pw length. switched string --> numbers by 'parseInt' 
  var pwLength = parseInt(prompt("Please enter the desired length for the password. (ie.  9)"));
  if(pwLength < 8 || pwLength > 128) {
    alert("Password must be bewtween 8 and 128 characters");
  }
  else if (pwLength >= 9 && pwLength < 129){
    confirm("The length of your password will be: " + pwLength);
    console.log("The length of your password will be: " + pwLength);
  };

  //var score = 0;
  var pwItems = [
    {q: "Do you want lower case alphabets in your password?", a: true},
    {q: "Do you want upper case alphabets in your password?", a: true},
    {q: "Do you want special characters in your password?", a: true}
  ];


  for (var i = 0;  i < pwItems.length; i++){
    var question = pwItems[i].q;
    var answer = pwItems[i].a;
    var userAnswer = confirm(question);
    if(answer === userAnswer) {
      alert("Ok, it will be included in the password.");
      //score += 10;
    } else {
      alert("Ok, it will NOT be included in the password.");
    } 
  };
  alert("Click the generate button to start generating your password!")
};

getPwOptions();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

