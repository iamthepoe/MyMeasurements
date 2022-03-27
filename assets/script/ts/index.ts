let celsius = document.getElementById('celsius') as HTMLInputElement;
let fahrenheit = document.getElementById('fahrenheit') as HTMLInputElement;

function ConvertCelsius(){
	let output = (parseFloat(celsius.value) * 9/5) + 32;
	fahrenheit.value = output.toFixed(2);
	console.log(output);
}

function ConvertFahrenheit(){
	let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
	celsius.value = output.toFixed(2);
}

celsius.addEventListener('input', ConvertCelsius);
fahrenheit.addEventListener('input', ConvertFahrenheit);