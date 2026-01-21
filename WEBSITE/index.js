const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temperature; 

function convert(){

    if(toFahrenheit.checked){
        temperature = textBox.value;
        result.textContent = (temperature * 9/5) + 32 + " °F";
    }
    else if(toCelsius.checked){
        temperature = textBox.value;
        result.textContent = (temperature - 32) * 5/9 + " °C";
    }
    else{
        result.textContent = "Please select a conversion option.";
        return;
    }
}