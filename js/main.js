let form = document.querySelector('.form');
let input = document.querySelector('.search_input');
let elCountry = document.querySelector('.country');
let elIcon = document.querySelector('.icons')
let temp = document.querySelector('.temp');
let days = document.querySelector('.days');

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
} 

function weatherInfo(data) {
    elCountry.innerHTML = data.name;
    console.log(data);

    data.weather.forEach((day) => {
        days.innerHTML = day.description;
    });

    for (const i in data.main) {
        // console.log(i, data.main[i]);
        if(i === 'temp_min') {
            temp.innerHTML = `${data.main[i]}°C`
        } 
        
    }
}
