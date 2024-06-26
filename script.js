// /* 
// Question (1):
// On your page, show alert for the user that say “Welcome to my site”,        
// then show him prompt ask him to enter his name and write to the page  “ welcome + his name”.
// (Remark what happen to the home page after writing welcome page).
// */

// // Answer of part 1:

// function welcome()
// {
//     alert("Welcome to my Site")
// }

// welcome();

// // Answer of Part 2:

function welcomeName(name)
{
    alert ("Welcome, " + name)
}
var userName = prompt("What's your lovely Name?")

welcomeName(userName);

/* 
Question (2):
Make a function in external JS file, that takes 2 parameters and return sum of them(function return the result,
don't alert or print it), and in your page make a button that ask the user to enter 2 numbers, call the function,
and display the result returned by the function.
*/

// Answer:

function sum(numOne, numTwo)
{
     return +numOne + +numTwo;
}


/*
Question (5):

Make a button that when click on it show prompt to the user please enter a string
then show another prompt please enter a word and search if this word is existing in the string
if not print not found if exists print its position.
*/

// Answer:

function search()
{
    var text = prompt("Enter a text");
    if (text === null)
        {
            return;
        }
    var searchWord = prompt("Search for a word");
    if (searchWord === null)
        {
            return;
        }
    
    var result = text.indexOf(searchWord)
    if (result >= 0)
        {
            alert("The word " + searchWord + " does exist and its position is " + result);
        }
    else
    {
        alert("The word " + searchWord + " doesn't exist");
    }
}

/*
Question (6):

Write a JavaScript function to convert temperatures from Celsius, to Fahrenheit 
[ Formula : c/5 = (f-32)/9] 
[where c = temperature in Celsius and f = temperature in Fahrenheit]
*/

function convertTemp(temp1, temp2)
{
    var c = parseInt(prompt("Enter a celsius tempertaure"));
    var f = (c*(9/5)) + 32;
    var result = alert("The Temperature in Fahrenheit is " + f + " F");

    return result;
}

function calculate(formula)
{
    var formula = prompt("Enter a mathematical formula");
    var result = eval(formula);
    return alert(result);
}

function count()
{
var userInput = prompt("Please enter a string:");

var count = 0;

for (var i = 0; i < userInput.length; i++) {
  if (userInput.charAt(i).toUpperCase() === 'A') {
    count++;
  }
}

alert("The number of 'A' characters in the string is: " + count);
}