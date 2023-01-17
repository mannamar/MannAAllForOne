let num1Input = document.getElementById("num1Input");
let num2Input = document.getElementById("num2Input");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

let savedInput = "";
let sayHelloUrl = "";

submitBtn.addEventListener("click", function(){
    addTwo(num1Input, num2Input);
});

num1Input.addEventListener("keypress", function(key){
    if (key.key === "Enter") {
        addTwo(num1Input, num2Input);
    }
});

num2Input.addEventListener("keypress", function(key){
    if (key.key === "Enter") {
        addTwo(num1Input, num2Input);
    }
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            output.classList.remove("fadeIn");
            void output.offsetWidth;
            output.textContent = data
            output.classList.add("fadeIn");
            console.log(data)
        }
    )
}

function addTwo(num1input, num2Input) {
    if(num1Input.value && num2Input.value) {
        sayHelloUrl = `https://allinoneendpoints.azurewebsites.net/minichallenge/addnumbers/${num1Input.value}/${num2Input.value}`;
        urlCall(sayHelloUrl);
    } else {
        output.textContent = "Please fill out both fields";
    }
}