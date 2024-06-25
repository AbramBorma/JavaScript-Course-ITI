/* 
Question (1):
On your page, show alert for the user that say “Welcome to my site”,        
then show him prompt ask him to enter his name and write to the page  “ welcome + his name”.
(Remark what happen to the home page after writing welcome page).
*/

// Answer of part 1:

function welcome()
{
    alert("Welcome to my Site")
}

welcome();

// Answer of Part 2:

function welcomeName(name)
{
    alert ("Welcome, " + name)
}
var userName = prompt("What's your lovely Name?")

welcomeName(userName);