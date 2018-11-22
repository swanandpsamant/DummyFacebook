var database = [
    {
        username: "swanand",
        password: "swany1456"
    },
    {
        username: "swaraj",
        password: "swaraj1456"
    },
    {
        username: "sally",
        password: "sally1456"
    }
];

var newsFeed = [
    {
        username: "swanand",
        timeline: "This is the time"
    },
    {
        username: "swaraj",
        timeline: "I am going to play pubg"
    },
    {
        username: "sally",
        timeline: "I am a web developer!!!"
    }
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");


function isUserVaild(username, password) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === username && 
         database[i].password === password) {
            return true;
         }
    } 
    return false;
}


function signIn(username, password){
    if (isUserVaild(username, password)) {
            console.log(newsFeed);
        } else {
            alert("Sorry Wrong username and password!")
        }
};

signIn(userNamePrompt, passwordPrompt);