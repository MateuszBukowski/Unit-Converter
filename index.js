/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputField = document.getElementById("input-field")
let convertBtn = document.getElementById("convert-btn")
let results = document.getElementById("results")

let length = 0
let volume = 0
let mass = 0

convertBtn.addEventListener("click", function(){
    renderResult()
})

function convertLengthToMeters(feets) {
    return feets / 3.281
}

function convertLengthToFeets(meters) {
    return meters * 3.281
}

function convertVolumeToLiters(galons) {
    return galons / 0.264
}

function convertVolumeToGalons(liters) {
    return liters * 0.264
}

function convertMassToKilos(pounds) {
    return pounds / 2.204
}

function convertMassToPounds(kilos) {
    return kilos * 2.204
}


function renderResult() {
    let inputValue = Number(inputField.value)
    let resultsFields = ""

    let meters = convertLengthToMeters(inputValue).toFixed(3)
    let feets = convertLengthToFeets(inputValue).toFixed(3)
    let liters = convertVolumeToLiters(inputValue).toFixed(3)
    let gallons = convertVolumeToGalons(inputValue).toFixed(3)
    let kilos = convertMassToKilos(inputValue).toFixed(3)
    let pounds = convertMassToPounds(inputValue).toFixed(3)

    resultsFields = `
        <div class="result">
            <h2>Length (Meter/Feet)</h2>
            <p>${inputValue} meters = ${feets} feet | ${inputValue} feet = ${meters} meters</p>
        </div>
        <div class="result">
            <h2>Volume (Liters/Gallons)</h2>
            <p>${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters</p>
        </div>
        <div class="result">
            <h2>Mass (Kilograms/Pounds)</h2>
            <p>${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos</p>
        </div>
    `

    results.innerHTML = resultsFields
}

function clearInput() {
    inputField.value = ""
}

clearInput() 