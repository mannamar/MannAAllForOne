let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn");

// console.log(nameInput, helloReturn, helloSubBtn);

let savedInput = "";
let sayHelloUrl = "";

helloSubBtn.addEventListener("click", function(){
    // helloApi(nameInput); // Using Scott's Example
    sayHello(nameInput);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data
            console.log(data)
        }
    )
}

// Using Scott's API

// function helloApi(nameInput){
//     var letters = /^[A-Za-z]+$/;
//     if(nameInput.value.match(letters)){
//         savedInput = nameInput.value;
//         sayHelloUrl = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh1/" + savedInput;
//         urlCall(sayHelloUrl);
//     } else {
//         helloReturn.textContent = "Enter a valid response";
//     }
// }

function sayHello(nameInput) {
    if(nameInput.value) {
        savedInput = nameInput.value;
        sayHelloUrl = "https://allinoneendpoints.azurewebsites.net/minichallenge/sayhello";
        urlCall(sayHelloUrl);
    } else {
        helloReturn.textContent = "Enter a valid response";
    }
}