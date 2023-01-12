let timeInput = document.getElementById("timeInput");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

let savedInput = "";
let sayHelloUrl = "";

submitBtn.addEventListener("click", function(){
    // helloApi(nameInput); // Using Scott's Example
    ask(timeInput);
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

function ask(timeInput) {
    if(timeInput.value) {
        savedInput = timeInput.value;
        sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/minichallenge/madlib/Harman/sick/cop/Weezer/silly/strong/whistle/chocco-tacos/thicc/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}