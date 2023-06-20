
var textArea = document.querySelector("#input-text");
var btn = document.querySelector("#btn-translate");
var outputArea = document.querySelector("#output");


btn.addEventListener("click", showText);

function showText(){

    console.log("Button clicked");
    var input = textArea.value;
    
    var finalURL = constructURL(input);

    console.log(finalURL);

    fetch(finalURL).then(response=>response.json()).then(json=>{
        outputArea.innerText = json.contents.translated;
    }).catch(()=> alert("Some Error Occurred. Try again later."));


}

var url = "https://api.funtranslations.com/translate/minion.json";

function constructURL(inputText)
{
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}