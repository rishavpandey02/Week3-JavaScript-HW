// Generate a random password based on user-selected criteria
function generatePassword() {
    // Prompt for password length
    var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  
    // Validate the length input
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return;
    }
  
    // Prompt for character types
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
  
    // Validate at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return;
    }
  
    // Define character pools
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+-={}[]|:;<>,.?/~";
  
    // Build the character pool based on selected criteria
    var charPool = "";
    if (includeLowercase) charPool += lowercaseChars;
    if (includeUppercase) charPool += uppercaseChars;
    if (includeNumeric) charPool += numericChars;
    if (includeSpecial) charPool += specialChars;
  
    // Generate the password
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
  
    // Display the generated password on the page
    var passwordElement = document.getElementById("password");
    passwordElement.value = password;
  }
  
  // Call the generatePassword function when the button is clicked
  document.getElementById("generate").addEventListener("click", generatePassword);
  