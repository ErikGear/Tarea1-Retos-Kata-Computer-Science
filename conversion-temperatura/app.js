
let tempertura = null;


function fahrenheitToCelsius(temp) {
    let temlCelsius = 0;
    temlCelsius = (temp - 32) / 1.8;
    return temlCelsius;
}

try {
    tempertura = parseFloat(prompt("Digite los grados Fahrenheit"));
    if (isNaN(tempertura)) {
        throw "Error, ha digitado un valor no numérico";
    } else {
        let tempCelsius = fahrenheitToCelsius(tempertura);  
        alert(`${tempertura}°F son ${tempCelsius}°C`);
    }
} catch (error) {
    alert(`${error}`);
}