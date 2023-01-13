let nameInput = document.getElementById("nameInput");
let timeInput = document.getElementById("timeInput");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

let savedInput = "";
let sayHelloUrl = "";

submitBtn.addEventListener("click", function(){
    ask(nameInput, timeInput);
});

nameInput.addEventListener("keypress", function(key){
    if (key.key === "Enter") {
        ask(nameInput, timeInput);
    }
});

timeInput.addEventListener("keypress", function(key){
    if (key.key === "Enter") {
        ask(nameInput, timeInput);
    }
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

function ask(nameInput, timeInput) {
    if(nameInput.value && timeInput.value) {
        // savedInput = timeInput.value;
        sayHelloUrl = `https://allinoneendpoints.azurewebsites.net/minichallenge/askquestions/${nameInput.value}/${timeInput.value}/`;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}