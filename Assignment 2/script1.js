const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("result");
const errorMsg = document.getElementById("error");
const historyList = document.getElementById("historyList");

const API_KEY = "e9828e6a4f6388a403f467739c56d488"; 


// PAGE LOAD - Load search history
window.addEventListener("load", function () {
    console.log("Page loaded");
    loadHistory();
});


// SEARCH BUTTON CLICK
searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();

    if (city === "") {
        errorMsg.innerText = "Please enter a city name.";
        return;
    }

    getWeather(city);
});


// ASYNC/AWAIT WEATHER FETCH
async function getWeather(city) {

    console.log("Function started");
    errorMsg.innerText = "";
    resultDiv.innerHTML = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log("Before fetch");

    try {
        const response = await fetch(url);

        console.log("After fetch (response received)");

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log("After converting to JSON");

        displayWeather(data);
        saveToHistory(city);

    } catch (error) {
        console.log("Error caught:", error);
        errorMsg.innerText = "Could not fetch weather. Check city name.";
    }

    console.log("Function ended");
}


// ===============================
// DISPLAY WEATHER DATA
// ===============================

function displayWeather(data) {

    resultDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].main}</p>
    `;
}


// ===============================
// LOCAL STORAGE FUNCTIONS
// ===============================

function saveToHistory(city) {

    let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem("weatherHistory", JSON.stringify(history));
    }

    loadHistory();
}

function loadHistory() {

    historyList.innerHTML = "";

    let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

    history.forEach(function (city) {
        const li = document.createElement("li");
        li.innerText = city;

        li.addEventListener("click", function () {
            getWeather(city);
        });

        historyList.appendChild(li);
    });
}


// ===============================
// PROMISE USING .then() / .catch()
// (Demonstration Only)
// ===============================

function fetchWithThen(city) {

    console.log("Using .then() method");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(function (data) {
            console.log("Data received using .then()");
            displayWeather(data);
        })
        .catch(function (error) {
            console.log("Error in .then():", error);
        });
}