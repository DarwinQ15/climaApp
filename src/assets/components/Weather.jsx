import React, { useEffect, useState } from 'react';
import WeatherInfo from './WeatherInfo';
const Weather = () => {

    const [weatherInfo, setWeatherInfo] = useState({});


    const positionP = ()=>{

        navigator.geolocation.getCurrentPosition(async({coords}) =>{
            const longitude = coords.longitude;
            const latitude = coords.latitude;
            const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=520c9a14960baaecf6f92060146723b7`);
            const data = await url.json();

            const temp = (data.main.temp)
                
            const farenheit = (((temp) - 273.15) * 9/5 + 32)


            setWeatherInfo({
                city: data.name,
                country: data.sys.country,
                temperature: farenheit,
                description: data.weather[0].description,
                wind: data.wind.speed,
                clouds: data.clouds.all,
                pressure: data.main.pressure,
                icon: data.weather[0].icon + '.png'
            })
        });
    }


    useEffect(()=>{
        positionP();
    },[])
    
   

    console.log(weatherInfo);

    return (
        <div>
            {<WeatherInfo temperature={weatherInfo?.temperature} city={weatherInfo?.city} country={weatherInfo?.country} description={weatherInfo?.description} wind={weatherInfo?.wind} clouds={weatherInfo?.clouds} pressure={weatherInfo?.clouds} icon={weatherInfo?.icon} />}
        </div>
    );
};

export default Weather;