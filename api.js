const Input = document.getElementById('inputValue');

const apiKey = "1946a218ae4be5eb7bd6e4ab3572249e";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function weatherUpdate(searchValue) {
    try {
        const response = await fetch(`${url}&q=${searchValue}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity-text").innerHTML = data.main.humidity + "°F";
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

    const temperatureImg = document.querySelector(".humidity-img");

    if (data.main.temp >= 5 && data.main.temp <= 18 && data.main.humidity >=80){
        temperatureImg.src = "assets/Mist.png";
    }else if(data.main.temp >= 10 && data.main.temp <= 30 && data.main.humidity >= 70 && data.main.humidity <= 80){
        temperatureImg.src = "assets/Rainy.png";
    }else if(data.main.temp >= 15 && data.main.temp <= 26 && data.main.humidity >=50 && data.main.humidity <= 70){
        temperatureImg.src = "assets/Cloudy.png";
    }else if(data.main.temp >= 20 && data.main.temp <= 36 && data.main.humidity < 50){
        temperatureImg.src = "assets/Sunny.png"
    }
} catch (error) {
    console.log("Error:", error.message);
}

    }
const searchCity = document.querySelector(".input-city");
const buttonSearch = document.querySelector(".glass");

buttonSearch.addEventListener('click', () => {
    weatherUpdate(searchCity.value);
    searchCity.value = '';
})

Input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        weatherUpdate(searchCity.value)
        searchCity.value = '';
    }
})

weatherUpdate(searchCity.value);

