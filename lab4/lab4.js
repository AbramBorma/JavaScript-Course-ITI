/*

1- Create a simple photo gallery like the following, and use opacity property to make each image fades out gradually
(its opacity decreases to 0.3) when mouse is over it, and fades in gradually (its opacity increases to 1 gradually) when mouse is a way.
*/
// Answer:

function increaseOpacity(image) {
    var opacity = 1;
    var interval = setInterval(function() {
        if (opacity <= 0.3) {
            clearInterval(interval);
        }
        image.style.opacity = opacity;
        opacity -= 0.05;
    }, 50); 
}

function decreaseOpacity(image) {
    var opacity = 0.3;
    var interval = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(interval);
        }
        image.style.opacity = opacity;
        opacity += 0.05;
    }, 50);
}

/*
2- Make an array of colors and set of spans and a button with the text change Color
and Background colors and when click in this button change the color and the background color randomly
*/

// Answer:

function changeColors() {
    var mySpan = document.querySelectorAll(".span");
    var colorArr = ['#ff6347', '#3cb371', '#6a5acd', '#787878', '#b4b4b4', '#6a5acd'];
    mySpan.forEach(span => {
        span.style.backgroundColor = colorArr[(Math.floor(Math.random() * colorArr.length))];
        span.style.color = "#fff"; 
    });
}

//3- Make a password input and a button with the text switch beside it when click in the button convert the password to be readable (change type for it)

// Answer:


function showPassword()
{
    var password = document.getElementById('password');
    if (password.type === 'password'){
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
}

/*
4- Make a bank of questions say 10 question and two buttons next and previous when click on the next navigate
to the next question and when click on the previous one go to the previous question.
*/

// Answer:

var questionArr =  ['Q1', 'Q2', 'Q3', 'Q4', 'Q5',
                    'Q6', 'Q7', 'Q8', 'Q9', 'Q10'];

var currentQuestion = -1;

function showQuestion()
{
    var question = document.getElementById('question');
    question.innerHTML = questionArr[currentQuestion];
}

function goNext()
{
    if (currentQuestion < questionArr.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
    else {
        alert("This is the last question");
    }
}

function goBack()
{
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
    else {
        alert("This is the first question");
    }
}


// 5- 3-Make an array that contains collection of colors and then in page load make a color of three paragraphs randomly from the array.

// Answer:

document.addEventListener('DOMContentLoaded', function(){

    var colorArr = ['#ff6347', '#3cb371', '#6a5acd', '#787878', '#b4b4b4', '#6a5acd'];
    function randomColor(){
        return colorArr[(Math.floor(Math.random() * colorArr.length))];
    }

    var paras = document.querySelectorAll('.paragraph');
    paras.forEach(para => {
        para.style.color = randomColor();
    });
    
});
/*
6- Make a registration form (you can re-use the registration form you did before) as the following (Use HTML 5 new input types and validation attributes): 
    a. Form fields: 
        ▪ Full Name (Required)
        ▪ Email (Required, input type: email)
        ▪ City (Drop-down list filled with some cities)
        ▪ Password
        ▪ Repeat password.
        ▪ “I accept the terms and conditions” checkbox.
        ▪ Register button, which redirects to another page saying: “Thank you, Full Name for registering in our website”.
    b. Make full name text has default text “Enter your Name:” [use placeholder attribute].
    c. When the user focus in full name text, show blue border for the input (use element.style.border=”solid 1px blue”),
    and remove the border when the input loses the focus.
    d. After user finish writing his full name and leaves the text box (lost focus), if the full name wasn't in correct format
    (not empty string and more than 3 letters), show text next to textbox saying “invalid name”, and focus the full name textbox,
    and select all text on it, else if full name was in correct format hide the text next to textbox.
    e. For Password and repeat password fields, when the user leaves the repeat password field, we need to validate that they’re required,
    and they’re identical (The same), and if they’re not the same show text besides it saying “password and repeat password should be the same”.
    f. Change the background color of the text input when it’s not valid to: gray, and to white when it’s valid (use element.style.backgroundColor).
    g. For the Email, use HTML5 “Required” attribute, and input type email.
        ▪ You’ll remark that HTML5 validation will prevent you from submitting the form unless it’s valid, right?
        ▪ But for the other custom validation of the name and password & repeat password, will not prevent the form
          for submitting and you can submit the form even if they’re not valid, why?
*/

// Answer:

document.addEventListener('DOMContentLoaded', function() {
    var fullName = document.getElementById('fullName');
    var error = document.getElementById('error');
    var pass = document.getElementById('password2');
    var repPass = document.getElementById('repeatPassword');
    var passError = document.getElementById('pass-error');

    fullName.addEventListener('focus', function() {
        fullName.classList.add('border');
    });

    fullName.addEventListener('blur', function() {
        fullName.classList.remove('border');

        // Check if the full name is valid
        if (fullName.value.trim() === '' || fullName.value.trim().length <= 3) {
            error.style.display = 'inline';
            fullName.focus();
            fullName.select();
        } else {
            error.style.display = 'none';
        }
    });
    repPass.addEventListener('blur', function() {
       if ((pass.value === '') || (repPass.value === '') || (pass.value != repPass.value)) {
        passError.style.display = 'inline';
        repPass.setAttribute('required', 'true');
        repPass.focus();
        repPass.select();
        repPass.style.backgroundColor = 'gray';
        pass.focus();
       }
       else {
        passError.style.display = 'none';
        repPass.style.backgroundColor = 'white';
       }
    });
});

/*
7- In the previous assignment, you’ll remark that if the full name or password and repeat password are invalid
    (and validation messages appear next to the text boxes), if you press the submit button,
    the form will submit regardless the validation you make in the blur event, so we need to fix it as the following.
    a. Handle onSubmit event for the form, and on the event handler function, check for the validation of the full name and password,
    if they’re correct, then submit the form (use Submit() function), if they’re not correct stop the form submitting (use event.preventDefault()),
    and show message for the user saying “Plz correct the validation errors first.
*/

// Answer:

document.addEventListener('DOMContentLoaded', function() {
    var fullName = document.getElementById('fullName');
    var error = document.getElementById('error');
    var pass = document.getElementById('password2');
    var repPass = document.getElementById('repeatPassword');
    var passError = document.getElementById('pass-error');

    fullName.addEventListener('focus', function() {
        fullName.classList.add('border');
    });

    fullName.addEventListener('blur', function() {
        fullName.classList.remove('border');

        // Check if the full name is valid
        if (fullName.value.trim() === '' || fullName.value.trim().length <= 3) {
            error.style.display = 'inline';
            fullName.focus();
            fullName.select();
        } else {
            error.style.display = 'none';
        }
    });
    repPass.addEventListener('blur', function() {
       if ((pass.value === '') || (repPass.value === '') || (pass.value != repPass.value)) {
        passError.style.display = 'inline';
        repPass.setAttribute('required', 'true');
        repPass.focus();
        repPass.select();
        repPass.style.backgroundColor = 'gray';
        pass.focus();
       }
       else {
        passError.style.display = 'none';
        repPass.style.backgroundColor = 'white';
       }
    });
    registrationForm.addEventListener('submit', function(event) {
        // Prevent form submission if custom validation fails
        if (fullName.value.trim() === '' || fullName.value.trim().length <= 3 || pass.value === '' || repPass.value === '' || pass.value != repPass.value) {
            event.preventDefault();
            alert('Please fix the errors in the form before submitting.');
        }
    });
});
// 8- Redo the form validation assignment (No.1), using CSS new pseudo class (valid and not valid), and without using JS for validation of the full name.

// Answer:


// 9- Do The following Calculator:

// Answer:

