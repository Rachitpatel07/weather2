
function myfun() {

    var iconcode1 = "10d";
    var iconcode2 = "01n";
    var iconcode3 = "04d";

    var iconurl1 = "http://openweathermap.org/img/w/${response.weather[0].icon}.png";
    var iconurl2 = "http://openweathermap.org/img/w/${response.weather[0].icon}.png";
    var iconurl3 = "http://openweathermap.org/img/w/${response.weather[0].icon}.png";

    let cname = document.getElementById("rachit").value;
    document.getElementById("cha").innerHTML = `Fetching weather for ${cname}...`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=2663d34ea81385c3439d4d2e3297ccbe&units=metric`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById("cha").innerHTML = `Weather in ${cname}`;
            document.getElementById("temp").innerHTML = response.main.temp;
            document.getElementById("min_temp").innerHTML = response.main.temp_min;
            document.getElementById("temp_max").innerHTML = response.main.temp_max;
            document.getElementById("Sunrise").innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById("Sunset").innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
            document.getElementById("speed").innerHTML = response.wind.speed;
            document.getElementById("deg").innerHTML = response.wind.deg;
            document.getElementById("feels_like").innerHTML = response.main.feels_like;
            document.getElementById("clouds").innerHTML = response.clouds.all;
            document.getElementById("pressure").innerHTML = response.main.pressure;

            document.getElementById("humidity").innerHTML = response.main.humidity;


           
            document.getElementById("weatherIcon1").src = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
           

        })
        .catch(error => {
            console.log('Error:', error);
            document.getElementById("cha").innerHTML = `Failed to fetch weather for ${cname}.`;
        });
}

