let input = document.getElementById("input");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let slackName = document.getElementById("slackName");
let email = document.getElementById("email");
let hobbies = document.getElementById("hobbies");
let lookupList = document.getElementById("lookupList");
let studentList = document.getElementById("studentList");
let submitBtn = document.getElementById("submitBtn");
let output = document.getElementById("output");


submitBtn.addEventListener("click", function(){
    if (lookupList.value === "firstName") {
        byFirstName(input);
    } else if (lookupList.value === "lastName") {
        byLastName(input);
    } else if (lookupList.value === "slackName") {
        bySlackName(input);
    } else if (lookupList.value === "email") {
        byEmail(input);
    } else if (lookupList.value === "any") {
        byAny(input);
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
        } else if (lookupList.value === "any") {
            byAny(input);
        }
    }
});

function urlCall(url){
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            output.classList.remove("fadeIn");
            void output.offsetWidth;
            
            firstName.textContent = data.firstName
            lastName.textContent = data.lastName
            slackName.textContent = data.slackName
            email.textContent = data.email
            hobbies.textContent = data.hobbies

            output.classList.add("fadeIn");
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
        // output.textContent = "Enter a valid response";
    }
}

function bySlackName(input) {
    if(input.value) {
        let savedInput = input.value;
        let slackNameUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byslackname/" + savedInput;
        urlCall(slackNameUrl);
        // consoleCall(slackNameUrl);
    } else {
        // output.textContent = "Enter a valid response";
    }
}

function byEmail(input) {
    if(input.value) {
        let savedInput = input.value;
        let emailUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byemail/" + savedInput;
        urlCall(emailUrl);
        // consoleCall(emailUrl);
    } else {
        // output.textContent = "Enter a valid response";
    }
}

function byAny(input) {
    if(input.value) {
        let savedInput = input.value;
        let anyUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byany/" + savedInput;
        urlCall(anyUrl);
        // consoleCall(emailUrl);
    } else {
        // output.textContent = "Enter a valid response";
    }
}

function populateDropdown() {
    fetch("https://allinoneendpoints.azurewebsites.net/studentdirectory/AllStudents").then(
        response => response.json()
    ).then(
        data => {
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].firstName + " " + data[i].lastName);
                studentList.innerHTML += `<option value="${data[i].firstName}">${data[i].firstName} ${data[i].lastName}</option>`
                // Scott showed us how to do this via document.createElement('option'), element.textContent == id, and element.value == firstName -- probably should look into those
            }
        }
    )
}

// Call function to populate student drop-down
populateDropdown();