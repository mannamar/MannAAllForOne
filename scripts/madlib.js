let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");
let output = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// console.log(nameInput, helloReturn, helloSubBtn); // Log variables to console

submitBtn.addEventListener("click", function(){
    // helloApi(nameInput); // Using Scott's Example
    ask(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10);
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

function ask(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) {
    if(input1.value && input2.value && input3.value && input4.value && input5.value && input6.value && input7.value && input8.value && input9.value && input10.value) {
        let url = `https://allinoneendpoints.azurewebsites.net/minichallenge/madlib/${input1.value}/${input2.value}/${input3.value}/${input4.value}/${input5.value}/${input6.value}/${input7.value}/${input8.value}/${input9.value}/${input10.value}`;
        urlCall(url);
    } else {
        output.textContent = "Please fill out all text fields";
    }
}