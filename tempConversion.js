const textbox = document.getElementById("textbox");
const tocelsius = document.getElementById("tocelsius");
const tofahrenheit = document.getElementById("tofahrenheit");
const result = document.getElementById("result");
const button = document.getElementById("button");
let temp;
button.onclick = function() {
    temp = parseFloat(textbox.value); // Get the value from the textbox and convert to a number

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    if (tofahrenheit.checked) {
        let fahrenheit = (temp * 9/5) + 32;
        result.textContent = temp + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else if (tocelsius.checked) {
        let celsius = (temp - 32) * 5/9;
        result.textContent = temp + "°F = " + celsius.toFixed(2) + "°C";
    } else {
        result.textContent = "Select a unit to convert";
    }
}
