let num2Input = document.getElementById("num2Input");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

let savedInput = "";
let sayHelloUrl = "";

submitBtn.addEventListener("click", function(){
    // helloApi(nameInput); // Using Scott's Example
    addTwo(num2Input);
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

function addTwo(num2Input) {
    if(num2Input.value) {
        savedInput = num2Input.value;
        sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/minichallenge/greaterthan/5/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}