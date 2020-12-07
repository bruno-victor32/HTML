function converter(){ 
let valor = Number(window.prompt(`Digite uma temperatura em °C(Celsius)`))
kelvin = valor + 273
fahrenheit = (1.8 * valor) + 32

let results = document.querySelector("section#results")
results.innerHTML = `<p><strong>A temperatura de ${valor}°C, corresponde a ...</strong></p>`
results.innerHTML += `<p>${kelvin}°K (kelvin)</p>`
results.innerHTML += `<p>${fahrenheit}°F (Fahrenheit)</p>`
}