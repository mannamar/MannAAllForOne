let input = document.getElementById("input");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

let savedInput = "";
let sayHelloUrl = "";

submitBtn.addEventListener("click", function(){
    // helloApi(nameInput); // Using Scott's Example
    byFirstName(input);
    byLastName(input);
    bySlackName(input);
    byEmail(input);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            output.textContent = data
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
        savedInput = input.value;
        sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byfirstname/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}

function byLastName(input) {
    if(input.value) {
        let savedInput = input.value;
        let lastNameUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/bylastname/" + savedInput;
        // urlCall(lastNameUrl);
        consoleCall(lastNameUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}

function bySlackName(input) {
    if(input.value) {
        let savedInput = input.value;
        let slackNameUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byslackname/" + savedInput;
        // urlCall(slackNameUrl);
        consoleCall(slackNameUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}

function byEmail(input) {
    if(input.value) {
        let savedInput = input.value;
        let emailUrl = "https://allinoneendpoints.azurewebsites.net/studentdirectory/byemail/" + savedInput;
        // urlCall(emailUrl);
        consoleCall(emailUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}