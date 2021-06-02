// Assignment Code
var generateBtn = document.querySelector("#generate");
//character arrays for use by the writePassword function
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["\u0021", "\u0023", "\u0024", "\u0025", "\u0026", "\u002B", "\u002D", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005E", "\u005F", "\u007E"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var characters = [];
    var pass = [];
    var passLength = prompt("Enter password length between 8 and 128.");
    //checks if the user entered a valid password length and gathers information on what character types the user would like to use.
    if (passLength != null && passLength >= 8 && passLength <= 128) {
      alert("Please select OK to use the following character types in your password.");
      var lowerCase = confirm("Lowercase?");
      var upperCase = confirm("Uppercase?");
      var numbers = confirm("Numbers?");
      var specialC = confirm("Special Characters?");
      if (!lowerCase && !upperCase && !numbers && !specialC) {
        alert("Invalid selection: Please select at least 1 character type.");
        return
      }
      //adds 2 characters of each type specified by the user. will add at most 8 characters to the password which is the minimum password length.
      var s = 2;
      if (lowerCase) {
        characters.push(lower);
        for (k = 0; k < s; k++) {
          pass.push(lower[(Math.floor(Math.random() * (lower.length - 1)))])
        }
      }
      if (upperCase) {
        characters.push(upper);
        for (k = 0; k < s; k++) {
          pass.push(upper[(Math.floor(Math.random() * (upper.length - 1)))])
        }
      }
      if (numbers) {
        characters.push(number);
        for (k = 0; k < s; k++) {
          pass.push(number[(Math.floor(Math.random() * (number.length - 1)))])
        }
      }
      if (specialC) {
        characters.push(special);
        for (k = 0; k < s; k++) {
          pass.push(special[(Math.floor(Math.random() * (special.length - 1)))])
        }
      }
    }

    // function swap(array) {
    //   [array[0], array[(Math.floor(Math.random() * (pass.length - 1)))]] = [array[(Math.floor(Math.random() * (pass.length - 1)))], array[0]];
    // }

    // for (l = 0; l < 10; l++) {
    //   pass = swap(pass);
    // }
    
    // adds additional random characters to password if needed per user specifications 
    if (passLength != pass.length) {
      let remain = passLength - pass.length;
      console.log(remain);
      for (i = 0; i < remain; i++) {
        let chars = characters[(Math.floor(Math.random() * (characters.length - 1)))]
        pass.push(chars[(Math.floor(Math.random() * (chars.length - 1)))]);
      }
    }
    console.log(pass);      
    return pass.join('');
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
