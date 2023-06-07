# Week3-JavaScript-Password-Generator-README

This project includes a JavaScript code snippet for generating a random password based on user-selected criteria. The code allows users to specify the password length and choose from various character types. Below, you'll find information on how to use the code and details about its functionality.

## Usage

To use the password generator, follow the steps below:

1. Add the JavaScript code to your project or webpage.
2. Create an HTML button element with the id "generate" to trigger the password generation.
3. Add an HTML input element with the id "password" to display the generated password.

When the "generate" button is clicked, the code will prompt the user to enter the desired password length and select the character types to include. After validating the inputs, the code will generate a random password and display it in the "password" input element.

## Code Explanation

The JavaScript code consists of the following functions and logic:

1. The `generatePassword` function is responsible for generating the random password based on user inputs.
2. The code prompts the user to enter the password length and validates the input to ensure it is a number between 8 and 128.
3. The user is then prompted to select the character types to include: lowercase, uppercase, numeric, and special characters. At least one character type must be selected for the code to proceed.
4. The character pools for each type are defined.
5. The character pool for the password generation is built based on the selected criteria.
6. A loop generates a random index from the character pool and appends the corresponding character to the password string.
7. Finally, the generated password is displayed in the designated HTML input element.

## Customisation

You can customise the password criteria and character pools according to your requirements. Additionally, you can modify the HTML elements' IDs and adjust the event listener accordingly.

## Compatibility

The code utilises standard JavaScript syntax and should be compatible with all web browsers.


## Credits

The JavaScript code was written by Rishav Pandey.
