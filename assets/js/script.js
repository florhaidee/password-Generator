var getLength= function() {
  var length = window.prompt('Please select the length of your password, choose a number between 8 and no more than 128:');
  length = parseInt(length);
  console.log(length);
  return length
}

//Object with the criteria needed to create the password
var passwordInfo = {
  length: getLength(),
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  characters: '!@#$%^&*()_+~`|}{[]\:;?><,./-=',
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
