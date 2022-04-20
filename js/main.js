let form = document.querySelector('.form');
let input = document.querySelector('.search_input');
let elCountry = document.querySelector('.country');
let elIcon = document.querySelector('.icons')
let temp = document.querySelector('.temp');
let days = document.querySelector('.days');
let Humidity = document.querySelector('.Humidity');
let wind_Speed = document.querySelector('.wind_Speed');
let main = document.querySelector('.main');

let inputvalue;

form.addEventListener('submit', (e)=> {
    e.preventDefault();
        inputvalue = input.value.toLowerCase(); 
        getWeather(inputvalue);
})

function getWeather(inputvalue){
    console.log(inputvalue);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&units=metric&appid=33dedde6287575d237be2e1c44271762`)
    .then((res) => res.json())
    .then((data) =>{
        weatherInfo(data)
    })
    .catch ((err) => {
        alert("Mamlakat(shahar) nomini to'g'ri kiriting!");
    })
} 

let info_box = document.querySelector('.info_box');
let img_box = document.querySelector('.img_box');

let box = document.createElement('div');
box.className = 'info_box';
// box.innerHTML = `
//     <div class="country_info">
//         <h2 class="country">Tashkent</h2>
//         <p class="temp">20°C</p>
//         <p class="days">Sunny</p>
//     </div>
//     <div class="day_info">
//         <p class="Humidity">Humidity: 40%</p>
//         <p class="wind_Speed">Wind Speed: 13 km/h</p>
//     </div>
// `
// info_box.appendChild(box);

function weatherInfo(data) {
    elCountry.innerHTML = data.name;
    console.log(data);

    data.weather.forEach((day) => {
        days.innerHTML = day.description;
        if(day.main == "Rain"){
            img_box.innerHTML = `<img class = "rainy" src="images/rainy.svg" alt="rainy">` 
            main.classList.add('mainRain');
        } 
        else {
            main.classList.remove('mainRain');
        }
        if(day.main == "Clears"){
            img_box.innerHTML = ` <img class="sun-img" src="images/sun.svg" alt="sun">`
            main.classList.add('mainClear');
        } 
        else {
            main.classList.remove('mainClear');
        }
        if(day.main == "Clear"){
            img_box.innerHTML = ` <img class="sun-img" src="images/sun.svg" alt="sun">`
            main.classList.add('mainClear');
        } 
        else {
            main.classList.remove('mainClear');
        }
        if(day.main == "Rain"){
            img_box.innerHTML = `<img class = "rainy" src="images/rainy.svg" alt="rainy">` 
            main.classList.add('mainSnowy');
        } 
        else {
            main.classList.remove('mainSnowy');
        }
        if(day.main == "Snow"){
            img_box.innerHTML = `<img class = "snowy" src="images/snowy.svg" alt="rainy">` 
            main.classList.add('mainSnowy');
        } 
        else {
            main.classList.remove('mainSnowy');
        }

    });

    for (const i in data.main) {
        if(i === 'temp_min') {
            temp.innerHTML = `${data.main[i]}°C`
        } 
        if(i === 'humidity') {
            Humidity.innerHTML = `Humidity: ${data.main[i]}%`
        } 
    }
    for (const i in data.wind) {
        console.log(i, data.wind[i]);
        if(i === 'speed') {
            wind_Speed.innerHTML = `Wind Speed: ${data.wind[i]} km/h`
        } 
    }

}



// Api manzili
// API_KEY = "33dedde6287575d237be2e1c44271762";
//  file_get_contents = ("https://api.openweathermap.org/data/2.5/weather?q=Namangan&units=metric&appid=${API_KEY}");
