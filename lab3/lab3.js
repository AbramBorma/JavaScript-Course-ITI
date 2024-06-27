/*
1-On a page, Make a button (Start clock), that displays clock with current time in local format (time only without date) updated every second.
*/
// Answer:

var interval;

function startClock()
{
    interval = setInterval(function(){
        
        var d = new Date();
        var localT = d.toLocaleTimeString();
        document.getElementById("clock").innerHTML = localT;
    }, 1000);
}
function stopClock()
{
    clearInterval(interval);
}

/*
2-Make a link that on its onClick event opens new advertising window after 3 seconds, and write long paragraphs on it.
Also, make another link that closes this page. (Note that the browser may block the opening of the new window;
make sure that you allow this page to open popups in your browser). 
*/
// Answer:

let addWin;

function openWindow()
{
    setTimeout(function(){

     addWin = window.open('#', '_blank', 'width=600, height=400')
        if (addWin) {
        
            addWin.document.write("<h1>Welcome to the Advertising Page</h1>");
            addWin.document.write("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptas voluptatum, odit vitae distinctio fuga molestias veniam saepe soluta culpa assumenda. Vel quisquam, fuga repellat fugit quas nulla delectus at sapiente!</p>");
        }
        else {
            alert("Please allow popups for this page!");
        }

    }, 3000);
}

function closeWidnow()
{
     if (addWin) {
        addWin.close();
     }
}

/*
3-Create a login form that redirect to another page when user submit the form,
and put in this form textbox (user name) and password field (password)
[textboxes must have name attribute] and button (login). User name text has default text
“Enter your user name here”, when user clicks login he will be redirected to another page
(the page given in the form action), use get method and on the other page get the user name
(from the browser URL) and write on the page welcome + User Name in bold and big font letters.
*/
// Answer:


// 4-Make a new page with long text that’s self-scrolling vertically (scrolls vertically automatically every half second).
// Answer:

function scrolling() {
    let scrollBox = document.getElementById('scroll');
    setInterval(function() {
        scrollBox.scrollTop += 10;
    }, 500);
}


// 5-Make a valid email format and phone format using regular expression.
// Answer:

function validateEmail()
{
    var email = document.getElementById("email").value;
    
    var emailPatt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (emailPatt.test(email)) {
        alert(`${email} is a valid email address.`);
    } else {
        alert(`${email} is NOT a valid email address.`);
    }
    
}

function validatePhone()
{
    var phone = document.getElementById("phone").value;

    var phonePatt = /^\+\d{1,3}\s\d{9,}$/;
    
    if (phonePatt.test(phone)) {
        alert(`${phone} is a valid phone number.`);
    } else {
        alert(`${phone} is NOT a valid phone number.`);
    }
}




