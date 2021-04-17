let inputElement = document.querySelector("#inputTxt");
let btnElement = document.querySelector("#btnElement");
let outputElement = document.querySelector("#outputTxt");
let url="https://api.funtranslations.com/translate/minion.json";

function translateURL(inputValue){
    return url + "?" + "text=" + inputValue;  
}
function mininonSpeak(){
    let inputValue = inputElement.value;
    fetch(translateURL(inputValue))
    .then(data => data.json())
    .then(json => {
        outputElement.innerHTML=json.contents.translated
    })
    .catch(() => alert("Minion(Server) is busy! Try after sometime"))
}

btnElement.addEventListener("click",mininonSpeak);