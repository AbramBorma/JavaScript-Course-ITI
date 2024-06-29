/*
1- Make login form, use local storage to save user name and password in the prev. assignment,
when user press login button, and retrieve them on page load and write them to the textboxes.
a. Can you use session storage in the previous assignment? Why?
b. What’s the difference between local storage and session storage?
c. Can you access local storage and session storage in another page than the page that created it (on the same site)?
*/
// Answer:

function saveData() {

    var name = document.getElementById('fullName').value;
    var pass = document.getElementById('password2').value;
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pass);
}

document.addEventListener('DOMContentLoaded', function () {
    var savedName = localStorage.getItem('Name');
    var savedPass = localStorage.getItem('Password');

    if (savedName && savedPass) {
        document.getElementById('fullName').value = savedName;
        document.getElementById('password2').value = savedPass;
    }
})

/*
2- In the previous Assignment, add “remember me” check box, and save user name and password only
if the user checked this checkbox, and if the user didn’t check it, remove the
saved user name and password from local storage if they saved before.
*/
// Answer:

function saveData() {

    var name = document.getElementById('fullName').value;
    var pass = document.getElementById('password2').value;
    var check = document.getElementById('check').checked;
    if (check) {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pass);   
    }
    else {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var savedName = localStorage.getItem('Name');
    var savedPass = localStorage.getItem('Password');

    if (savedName && savedPass) {
        document.getElementById('fullName').value = savedName;
        document.getElementById('password2').value = savedPass;
    }
})

// 3- Make JSON Object that holds Student data (ID, name, Age, Address, Skills (array),
// IsLeader (Boolean), address). [Use JSON object and don’t use string in keys].

// Answer:

var studentInfo = {
    "ID" : 1,
    "name" : 'Abram Raouf',
    "Age" : 31,
    "Address" : {
        "country" : "Egypt",
        "state" : "Cairo",
        "city" : "Cairo",
        "district" : "Sheraton Residencies"
    },
    "Skills" : ["HTML", "CSS", "JavaScript", "Python"],
    "IsLeader" : true
}
console.log(studentInfo);
/*
4- Make an array (of 3 students) of the previous student object, and print each student name
along with his skills (make the address null for one of the students).
a. Can JSON hold null and Boolean values?
b. What are the differences between XML and JSON?
*/

// Answer:

var studentInfo = [{
    "ID" : 1,
    "name" : 'Abram Raouf',
    "Age" : 31,
    "Address" : null,
    "Skills" : ["HTML", "CSS", "JavaScript", "Python"],
    "IsLeader" : false
},
{
    "ID" : 1,
    "name" : 'Ahmed Abou Gabal',
    "Age" : 26,
    "Address" : null,
    "Skills" : ["HTML", "CSS", "JavaScript", "C++", "Python"],
    "IsLeader" : true
},
{
    "ID" : 1,
    "name" : 'Abram Tarek',
    "Age" : 24,
    "Address" : null,
    "Skills" : ["HTML", "CSS", "JavaScript", "Python", "C++", "Java"],
    "IsLeader" : false
},
]

for (var i = 0; i < studentInfo.length; i++) {

    var student = studentInfo[i];
    console.log("Student Name: " + student.name);
    
    console.log("Skills:");
    for (var j = 0; j < student.Skills.length; j++) {
        console.log("- " + student.Skills[j]);
    }
}
/*
5- Use AJAX to retrieve user data, and display: First Name, Last name and user avatar image
(show the user image in an <img> tag) from the following test web API:
https://reqres.in/api/users/1 
a. Make a textbox where the user can enter user ID, and press display and then display the
user with the given ID.
b. Use this web API: https://reqres.in/api/users to return all users data, and make a
dropdown list and fill it with students name returning form the API.
(Loop on them and display all users).
c. When user selects specific user (onchange event), display his data and image below
the dropdown list.
*/

// Answer:

function displayUser()
{
    var userID = document.getElementById('retrieve').value;
    var identity = document.getElementById('id');
    var fName = document.getElementById('first-name');
    var lName = document.getElementById('last-name');
    var image = document.getElementById('image');

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://reqres.in/api/users/1' + userID, true);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {

                var convertedText = JSON.parse(this.responseText);
                identity.textContent = "User ID : " + convertedText.data.id;
                fName.textContent = "First Name: " + convertedText.data.first_name;
                lName.textContent = "Last Name: " + convertedText.data.last_name;
                image.setAttribute('src', convertedText.data.avatar);
            }
            else
            {
                identity.textContent = "User ID not found";
                fName.textContent = "";
                lName.textContent = "";
                image.setAttribute('src', "");
            }
        }
    };
    xhttp.send();
}

function saveToSelect() {
    var dropdown = document.getElementById('dropdown');
    var identity = document.getElementById('id');
    var fName = document.getElementById('first-name');
    var lName = document.getElementById('last-name');
    var image = document.getElementById('image');
    
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://reqres.in/api/users', true);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var responseData = JSON.parse(xhttp.responseText);
            var users = responseData.data;

            dropdown.innerHTML = '';

            var defaultOption = document.createElement('option');
            defaultOption.textContent = 'Select A Name';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            dropdown.appendChild(defaultOption);

            for (var i = 0; i < users.length; i++) {
                var option = document.createElement('option');
                option.textContent = users[i].first_name + ' ' + users[i].last_name;
                option.value = users[i].id; 
                dropdown.appendChild(option);
            }

            dropdown.addEventListener('change', function() {
                var selectedUserId = this.value;
                if (selectedUserId !== 'Select A Name') {
                    getUserData(selectedUserId);
                } else {

                    identity.textContent = '';
                    fName.textContent = '';
                    lName.textContent = '';
                    image.src = '';
                }
            });
        }
    };

    xhttp.send();

    function getUserData(userID) {
        var xhttpUser = new XMLHttpRequest();
        xhttpUser.open('GET', 'https://reqres.in/api/users/' + userID, true);

        xhttpUser.onreadystatechange = function () {
            if (xhttpUser.readyState == 4) {
                if (xhttpUser.status == 200) {
                    var userData = JSON.parse(xhttpUser.responseText);
                    identity.textContent = "User ID: " + userData.data.id;
                    fName.textContent = "First Name: " + userData.data.first_name;
                    lName.textContent = "Last Name: " + userData.data.last_name;
                    image.src = userData.data.avatar;
                } else {
                    identity.textContent = "User ID not found";
                    fName.textContent = '';
                    lName.textContent = '';
                    image.src = '';
                }
            }
        };

        xhttpUser.send();
    }
}
saveToSelect();


/*
6-Prompt user to enter his Full Name and email address, and use regular expression only
(don't use string functions) to validate his input to make sure it is in correct
format using these criteria: 
a. Full Name should be characters only (without numbers or special characters) and has the following structure:
◦ Characters (alphabetic only) more than 3.
◦ Then one space.
◦ And finally some other characters (alphabetic only) more than 3 
◦ This pattern may be repeated, so it can contain other spaces but after each space
must be 3 alphabetic characters at least (like full name, each part is 3 letters at least,
and separated by a space).
◦ And shouldn’t start or end with spaces or special characters.
b. Email must be from Egypt (.eg domain), for example name@domain.com.eg
(.com.eg, .net.eg, .edu.eg or .org.eg [.eg is a must], don’t allow any other domains).
*/

// Answer:

function validateInput() {
    var fullName = prompt("Please enter your Full Name:");
    var email = prompt("Please enter your Email Address:");

    var fullNamePattern = /^(?!\s)[a-zA-Z]{4,}(?:\s[a-zA-Z]{4,})*$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:com\.eg|net\.eg|edu\.eg|org\.eg)$/;

    if (fullNamePattern.test(fullName)) {
        alert("Full Name is valid:", fullName);
    } else {
        alert("Full Name is invalid:", fullName);
    }

    if (emailPattern.test(email)) {
        alert("Email is valid:", email);
    } else {
        alert("Email is invalid:", email);
    }
}

