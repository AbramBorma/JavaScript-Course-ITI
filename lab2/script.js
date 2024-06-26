/*
    1- Create array that contain some tips about JavaScript (Array of 10 strings,
    each string is tip about JS), and show random tip for the user each time he opens the page "Tip of the day".
*/

// Answer:
function showTips()
{
    var tips = ['Learn Fundamentals', 'Master Syntax', 'Use ES6 Features',
        'Practice Regularly', 'Debug Effectively', 'Explore Frameworks',
        'Optimize Performance', 'Learn Promises', 'Understand Closures', 'Stay Curious'];
    
    var randomIndex = Math.floor(Math.random() * tips.length);
    var randomTip = tips[randomIndex];
    alert("Tip of the Day: " + randomTip);
}

//  2- Make a button that display the current date and time in local format on the page.

// Answer:

function showDateAndTime()
{
    var today = new Date();
    var date = today.toLocaleDateString();
    var time = today.toLocaleTimeString();

    alert("Today is: " + date + " and the time is: " + time);
}
//  3- Use Try catch to handle any errors in your page.

// Answer:

function tryAndCatch()
{
    try
    {
        alrt("Welcome to my website");
    }
    catch(error)
    {
        alert(error.message);
    }
    finally
    {
        alert("process terminated");
    }
}
/*  4- Show prompt that ask user to enter the date of today and tell user to enter the date in the following format
    (DD – MM – YYYY) ex. 22–01–1999, and then create function that take user input as a parameter
    and ensure that the string is entered in this format (that user entered string is 10 characters
    and contains (-) after the second character and after fifth character).
    If the user input was correct: make the function create new date object, and initialize it with
    Day, Month, year values (using date constructor: Date(y,m,d)) and then show alert to the user with the date in date string format.
    If user input wasn't correct, show alert saying "Wong Date Format". Create button “show date” that calls the function. (use string functions).

*/

// Answer:

function changeDate()
{
    var inputDate = prompt("Enter a date in this format DD-MM-YYYY");

    if (inputDate.length === 10 && inputDate.charAt(2) === '-' && inputDate.charAt(5) === '-')
        {
            var day = parseInt(inputDate.substring(0, 2));
            var month = parseInt(inputDate.substring(3, 5));
            var year = parseInt(inputDate.substring(6, 10));

            var nDate = new Date (year, month - 1, day)

            alert("Date is: " + nDate.toDateString());
        }
    else
    {
        alert("Wrong Date Format");
    }
}
//  5- Make a function that accepts array and number and return how many times this number found in the array

function repeatedNums(arr, numberToFind) 
{
    var arr = [1, 1, 2, 2, 2, 2, 3, 3, 5, 5, 5, 5, 6, 4, 8, 9, 9];
    var numberToFind = parseInt(prompt("Enter a number from 0-9"));

    var count = 0;

    for (var num of arr)
    {
        if (num === numberToFind)
        {
            count++;
        }
    }

    alert("The number you entered exists " + count + " time(s)");
}

//  6- Make a function that accept array and character then remove this character from the array

// Answer:

function removeChar(arr, char)
{
    var newArr = [];

    for (var i = 0; i < arr.length; i++)
        {
            var modArr = arr[i].replace(char, '');
            newArr.push(modArr);
        }
    return newArr;
}
  
  var array = ['Abram', 'Raouf', 'Tharwat'];
  console.log(array);
  var character = "a";
  console.log(character);
  var result = removeChar(array, character);
  
  console.log(result);

//  7- Make function that accepts array and return the maximum number in the array.

function maximum(arr)
{
    var max = arr[0];

    for (var i = 0; i < arr.length; i++)
        {
            if (arr[i] > max)
                {
                    max = arr[i];
                }
        }
    return max;
}

var array = [10, 20, 30, 40, 50];
console.log(array);
var max_num = maximum(array);
console.log(max_num);
