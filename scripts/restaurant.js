// let stringInput = document.getElementById("stringInput");
let foodList = document.getElementById("foodList");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console


submitBtn.addEventListener("click", function(){
    pickFood(foodList);
});

foodList.addEventListener("change", function(){
    pickFood(foodList);
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

function pickFood(stringInput) {
    if(stringInput.value) {
        let savedInput = stringInput.value;
        let apiUrl = "https://allinoneendpoints.azurewebsites.net/minichallenge/restaurantpicker/" + savedInput;
        urlCall(apiUrl);
    } else {
        output.textContent = "Enter a valid response";
    }
}