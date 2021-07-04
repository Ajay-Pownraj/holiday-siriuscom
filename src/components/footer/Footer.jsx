/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import { footer } from '../../holiday'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <ul>
                            <li>Tripzone</li>
                            <li>About</li>
                            <li>Awards</li>
                            <li>Contact Us</li>
                            <li>Feedback</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li>Main Offices</li>
                            <li>The United States</li>
                            <li>Awards</li>
                            <li>Brazil</li>
                            <li>Feedback</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li>Sub Offices</li>
                            <li>Australia</li>
                            <li>England</li>
                            <li>France</li>
                            <li>Germany</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li>Disclaimer</li>
                            <li>This Layout is created as a part of Sirius UI Recruitments</li>
                            <li>All the above content has no direct relation with Sirius business</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
