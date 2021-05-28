// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const special = ["\u0021", "\u0023", "\u0024", "\u0025", "\u0026", "\u002B", "\u002D", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005E", "\u005F", "\u007E"]
    var characters = [lower, upper, number, special];
    var pass = [];
    var passLength = prompt("Enter password length between 8 and 128.");

    if (passLength != null && passLength >= 8 && passlength <= 128) {
      alert("Please select OK to use the following character types in your password.");
      var lowerCase = confirm("Lowercase?");
      var upperCase = confirm("Uppercase?");
      var numbers = confirm("Numbers?");
      var specialC = confirm("Special Characters?");
      if (!lowerCase || !upperCase || !numbers || !specialC) {
        return alert("Invalid selection: Please select at least 1 character type.");
      }
      else if (lowerCase && !upperCase && !numbers && !specialC) {
        for (i = 0; i < passLength + 1; i++) {
          pass.push(characters[0].lower[(Math.floor(Math.random() * (lower.length - 1)))]);
        }
        return pass.join('');
      }
      else if (!lowerCase && upperCase && !numbers && !specialC) {
        for (i = 0; i < passLength + 1; i++) {
          pass.push(characters[1].upper[(Math.floor(Math.random() * (upper.length - 1)))])
        }
        return pass.join('');
      }
      else if (!lowerCase && !upperCase && numbers && !specialC) {
        for (i = 0; i < passLength + 1; i++) {
          pass.push(characters[2].number[(Math.floor(Math.random() * (number.length - 1)))])
        }
        return pass.join('');
      }
      else if (!lowerCase && !upperCase && !numbers && specialC) {
        for (i = 0; i < passLength + 1; i++) {
          pass.push(characters[3].special[(Math.floor(Math.random() * (special.length - 1)))])
        }
        return pass.join('');
      }
    }

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
