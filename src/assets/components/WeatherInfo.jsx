import axios from 'axios';
import React, { useEffect, useState } from 'react';

const WeatherInfo = ({city, country, temperature, description, wind, clouds, pressure, icon}) => { 

    const [theCentigrades, setTheCentigrades] = useState(true)

    const celcius = (((temperature) - 32) * 5/9)


    return (
        <div className='card'>
            <h1>Wheather App</h1>
            <h3><img src="./src/assets/img/mapas-de-google.png" alt="" /> {city}, {country}</h3>
            <h2><img src="./src/assets/img/temperaturas.png" alt=""/> {theCentigrades ? Math.trunc(temperature) : Math.trunc(celcius)}  {theCentigrades ? '°F' : '°C'}</h2>
            <h3><img src="./src/assets/img/descripcion-del-producto.png" alt="" />  {description}</h3>
            <h3><img src="./src/assets/img/viento.png" alt="" /> Wind Speed: {wind} m/s</h3>
            <h3><img src="./src/assets/img/nubes.png" alt="" /> Clouds: {clouds}%</h3>
            <h3><img src="./src/assets/img/calibre.png" alt="" /> Pressure: {pressure} mb</h3>
             <div>
             <button onClick={()=>setTheCentigrades(!theCentigrades)}>
                <img src="./src/assets/img/grados-fahrenheit.png" alt=""/> <img src="./src/assets/img/slash.png" alt="" />  <img src="./src/assets/img/centigrado.png" alt="" />
             </button>
            </div>
        </div>
    );
};

export default WeatherInfo;