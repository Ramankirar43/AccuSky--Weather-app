const apikey = "fcd9477b2a8c0b05048f6d363e7fb4eb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weathericon = document.querySelector(".weather-icon");

async function check_weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);  // Corrected URL
    var data = await response.json();
    
    if (response.status == 404) {
        document.querySelector(".city").innerHTML = "City not found!";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
        return;
    }
    else{
 // console.log(data);
 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
 document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
 document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

 if(data.weather[0].main == "Clouds"){
     weathericon.src ="images/clouds.png";
 }
 else if(data.weather[0].main == "Clear"){
     weathericon.src="images/clear.png";
 }
 else if(data.weather[0].main == "Rain"){
     weathericon.src="images/rain.png";
 }
 else if(data.weather[0].main == "Drizzle"){
     weathericon.src="images/drizzle.png";
 }
 else if(data.weather[0].main == "Mist"){
     weathericon.src="images/mist.png";
 }
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
}

}

searchbtn.addEventListener("click", () => {
    check_weather(searchbox.value);
});
