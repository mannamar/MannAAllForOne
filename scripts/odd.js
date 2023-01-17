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

numInput.addEventListener("keypress", function(key){
    if (key.key === "Enter") {
        oddOrEven(numInput);
    }
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            output.classList.remove("fadeIn");
            void output.offsetWidth;
            output.textContent = data;
            output.classList.add("fadeIn");
            console.log(data);
        }
    )
}

function oddOrEven(numInput) {
    if(numInput.value) {
        sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/minichallenge/oddoreven/" + numInput.value;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}