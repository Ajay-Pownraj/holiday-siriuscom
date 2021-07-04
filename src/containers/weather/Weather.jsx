import React, { useState, useEffect } from 'react'
import './Weather.css'
import axios from 'axios'
import Cards from '../../components/weatherCards/Cards'

const Weather = () => {
    const [weather, getWeather] = useState([])
    const url = "https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576"
    useEffect(() => {
        axios.get(url)
            .then(res => {
                getWeather(res.data.result)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    // console.log("weather", weather);


    return (
        <div className="weather">
            <div className="content-title">
                THE WEATHER CHANNEL
            </div>
            <Cards weather={weather} />
            {/* {weather.map((weathers, i) => (
                <Cards
                    city={weathers.city}
                    celsius={weathers.temp_Celsius}
                    fahr={weathers.temp_Fahr}
                />
            ))} */}
        </div>
    )
}

export default Weather
