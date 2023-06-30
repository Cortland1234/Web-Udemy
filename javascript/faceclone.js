var database = [
    {
        username: "andrei",
        password: "secret",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "Lisa",
        password: "777",
    },
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "Car crash",
    },
    {
        username: "Lisa",
        timeline: "Stocks going up",
    }
];

var userPrompt = prompt("Username?");
var passPrompt = prompt("Password?");

function isValid(user, pass) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {

    if (isValid(user, pass)) {
        console.log(newsFeed);
    } 
    else {
        alert("Wrong!!!");
    }
}

signIn(userPrompt, passPrompt);