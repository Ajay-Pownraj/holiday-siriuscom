import React from 'react'
import { HashLink } from 'react-router-hash-link';
import "./Navigation.css";
import Header from "../header/Header";
import Greeting from '../../containers/greeting/Greeting';
import Weather from '../../containers/weather/Weather';
import Destination from '../../containers/destination/Destination';
import TripBanner from '../../containers/tripBanner/TripBanner';
import Quote from '../../containers/quote/Quote';
import Footer from '../footer/Footer';

const Navigation = () => {
    return (
        <div className="nav-content">
            <Header />
            <ul>
                <li>
                    <HashLink smooth to={'#weather'}>
                        WEATHER
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to={'#destination'}>
                        DESTINATION
                    </HashLink>
                </li>

                <li>
                    <HashLink smooth to={'#qoute'}>
                        GET A QUOTE
                    </HashLink>
                </li>
            </ul>
            <Greeting />
            <section id="weather">
                <Weather />
            </section>
            <section id="destination">
                <Destination />
            </section>
            <TripBanner />
            <section id="qoute">
                <Quote />
            </section>
            <Footer />
        </div>
    )
}

export default Navigation
