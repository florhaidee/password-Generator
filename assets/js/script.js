// function where is asked and validated the lenght of the password
var getLength= function() {
  var length = window.prompt('Please select the length of your password, choose a number between 8 and 128:');
  length = parseInt(length);
  if (length < 8 || length > 128 || !length){
    window.alert("You need to provide a valid number! Please try again.");
    return getLength();
  }
  return length
}
// function where is asked to choose the characters type to use
var getPrompType= function(charType){
  var promptChoice = window.confirm('Would you like your password to have ' + charType + ' characters? Please select OK if your agree');
  console.log(promptChoice)
  if (promptChoice) {
    window.alert('Your decided to have ' + charType +' on your password');
    return true;
  }else{
   return false;
  }
}

//Object with the criteria needed to create the password
var passwordInfo = {
  length: 0,
  upperCase: ['false',"ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  lowerCase: ['false',"abcdefghijklmnopqrstuvwxyz"],
  numeric: ['false',"0123456789"],
  special: ['false','!@#$%^&*()_+~`|}{[]\:;?><,./-='],
  pwd: '',
}
// function to validate Input: at least one type of character must be true
function validateInput(inputInfo){
 if (inputInfo.upperCase[0] || inputInfo.lowerCase[0] || inputInfo.numeric[0] || inputInfo.special[0] ) {
    return true;
 } else {
    window.alert("You need to pick at least one Type of character. PLease try again.");
    return false;
  }
}
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
};
//console.log(passwordInfo);
var generatePassword2 = function(){
  passwordInfo.upperCase[0] = getPrompType('upperCase');
  passwordInfo.lowerCase[0] = getPrompType('lowerCase');
  passwordInfo.numeric[0] = getPrompType('numeric');
  passwordInfo.special[0] = getPrompType('special');
  if (validateInput(passwordInfo)) {
    // call function generatepassword(passwordInfo)
    console.log (passwordInfo)
  }else {
    generatePassword2()
  }
};
// function where we validate char and concat the string pwd
var validatechar = function(obj){
  var num = randomNumber(0,3);
  switch (num) {
    case 0:
      if (obj.upperCase[0]){
        console.log(obj.upperCase[1].length);
        obj.pwd += obj.upperCase[1].charAt(randomNumber(0 , obj.upperCase[1].length));
        console.log(obj.pwd);
        break;
      }
    case 1:
      if (obj.lowerCase[0]){
        obj.pwd += obj.lowerCase[1].charAt(randomNumber(0 , obj.lowerCase[1].length));
        break;
      }
    case 2:
      if (obj.numeric[0]){
        obj.pwd += obj.numeric[1].charAt(randomNumber(0 , obj.numeric[1].length));
        break;
      }
    case 3:
      if (obj.special[0]){
        obj.pwd += obj.special[1].charAt(randomNumber(0 , obj.special[1].length));
        break; 
      }
    default:
      validatechar(obj)
      break;
  }
};

var generatePassword = function() {
  passwordInfo.length = getLength();
  generatePassword2();
  for (var i = 0; i < passwordInfo.length; i++) {
    validatechar(passwordInfo)
  }
  return passwordInfo.pwd
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
