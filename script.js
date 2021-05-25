const api = 'bd0c23ba43ed0ddab50f1ffd33aa9bdb';

const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api}`;

$.getJSON(url, (data) =>{
    console.log(data)
})


