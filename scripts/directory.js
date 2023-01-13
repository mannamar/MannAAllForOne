let input = document.getElementById("input");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let slackName = document.getElementById("slackName");
let email = document.getElementById("email");
let hobbies = document.getElementById("hobbies");
let lookupList = document.getElementById("lookupList");
let studentList = document.getElementById("studentList");
let submitBtn = document.getElementById("submitBtn");


submitBtn.addEventListener("click", function(){
    if (lookupList.value === "firstName") {
        byFirstName(input);
    } else if (lookupList.value === "lastName") {
        byLastName(input);
    } else if (lookupList.value === "slackName") {
        bySlackName(input);
    } else if (lookupList.value === "email") {
        byEmail(input);
    }
});

studentList.addEventListener("change", function(){
    byFirstName(studentList);
});

input.addEventListener("keypress", function(key){
    if (key.key === "Enter") {
        if (lookupList.value === "firstName") {
            byFirstName(input);
        } else if (lookupList.value === "lastName") {
            byLastName(input);
        } else if (lookupList.value === "slackName") {
            bySlackName(input);
        } else if (lookupList.value === "email") {
            byEmail(input);
        }
    }
});

function urlCall(url){
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            firstName.textContent = data.firstName
            lastName.textContent = data.lastName
            slackName.textContent = data.slackName
            email.textContent = data.email
            hobbies.textContent = data.hobbies
            console.log(data)
        }
    )
}

function consoleCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            // output.textContent = data
            console.log(data)
        }
    )
}

function byFirstName(input) {
    if(input.value) {
        let savedInput = input.value;
        let sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byfirstname/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        // output.textContent = "Enter a valid response";
    }
}

function byLastName(input) {
    if(input.value) {
        let savedInput = input.value;
        let lastNameUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/bylastname/" + savedInput;
        urlCall(lastNameUrl);
        // consoleCall(lastNameUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}

function bySlackName(input) {
    if(input.value) {
        let savedInput = input.value;
        let slackNameUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byslackname/" + savedInput;
        urlCall(slackNameUrl);
        // consoleCall(slackNameUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}

function byEmail(input) {
    if(input.value) {
        let savedInput = input.value;
        let emailUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byemail/" + savedInput;
        urlCall(emailUrl);
        // consoleCall(emailUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}