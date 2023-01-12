let numInput = document.getElementById("numInput");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

let savedInput = "";
let sayHelloUrl = "";

submitBtn.addEventListener("click", function(){
    // helloApi(nameInput); // Using Scott's Example
    oddOrEven(numInput);
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

function oddOrEven(numInput) {
    if(numInput.value) {
        savedInput = numInput.value;
        sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/minichallenge/oddoreven/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}