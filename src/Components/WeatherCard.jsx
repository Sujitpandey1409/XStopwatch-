import React from 'react';
import './WeatherCard.css'
const WeatherCard = ({title, value}) => {
    return ( 
        <div className="weather-cards">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
     );
}
 
export default WeatherCard;