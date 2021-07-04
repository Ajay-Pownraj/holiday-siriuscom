import React from 'react'
import './Cards.css'
import weatherIcon from "../../assests/images/icon-party-sunny.svg"

const Cards = (props) => {
    const cardData = props.weather;
    // console.log("weather--->", cardData)
    return (
        <div className="card-row">
            {cardData.map((cardDatas, i) => (
                <div className="card" key={i}>
                    <div className="city">{cardDatas.city}</div>
                    <img
                        className="Weather_Icon"
                        src={weatherIcon}
                        alt="Weather Icon"
                    />
                    <div className="celsius">{cardDatas.temp_Celsius}&deg;</div>
                </div>
            ))}

        </div>
    )
}

export default Cards
