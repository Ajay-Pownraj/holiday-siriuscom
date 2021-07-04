import React from 'react'
import "./Header.css";
import {header} from '../../holiday';
import CountdownComponent from '../countDown/Countdown';

const Header = () => {
    return (
        <div className="header-container">
            <header className="header">
               {header.title}
                <div className="header-offer">
                   <CountdownComponent />
                </div>
            </header>
        </div>
    )
}

export default Header
