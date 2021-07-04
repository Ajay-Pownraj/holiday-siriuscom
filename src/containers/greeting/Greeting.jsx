import React from 'react'
import './Greeting.css'
import { greetings } from '../../holiday'
import welcomeImg from '../../assests/images/welcome-image.svg'
import Button from '../../components/customButton/Button'
const Greeting = () => {
    // console.log(greetings)
    return (
        <div className="flex-container">
            <div className="flex-item-left">
                <img
                    className="welcomeImg"
                    src={welcomeImg}
                    alt={greetings.alt_name}
                />
            </div>
            <div className="flex-item-right">
                <div className="greeting-title">{greetings.title1}</div>
                <div className="greeting-title">{greetings.title2}</div>
                <div className="greeting-subtitle">{greetings.subtitle}</div>
                <div className="greeting-button"><Button name="PLAN A TRIP"></Button></div>
            </div>
        </div>
    )
}

export default Greeting
