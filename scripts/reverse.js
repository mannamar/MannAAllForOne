let stringInput = document.getElementById("stringInput");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

let savedInput = "";
let sayHelloUrl = "";

submitBtn.addEventListener("click", function(){
    // helloApi(nameInput); // Using Scott's Example
    reverseIt(stringInput);
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

function reverseIt(stringInput) {
    if(stringInput.value) {
        savedInput = stringInput.value;
        sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/minichallenge/reverseit/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}