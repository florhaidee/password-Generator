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
  length: getLength(),
  upperCase: [getPrompType('upperCase'),"ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  lowerCase: [getPrompType('lowerCase'),"abcdefghijklmnopqrstuvwxyz"],
  numeric: [getPrompType('numeric'),"0123456789"],
  special: [getPrompType('special'),'!@#$%^&*()_+~`|}{[]\:;?><,./-='],
  pwd: '',
}
console.log(passwordInfo);

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
