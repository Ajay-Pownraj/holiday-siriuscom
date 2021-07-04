import React from 'react'
import './TripBanner.css'
import { plantrip } from '../../holiday'


const TripBanner = () => {
    return (
        <div className="trip-banner">
            <div className="trip-banner-content">
                <div className="plan-title">
                    {plantrip.title}
                </div>
                <div className="plan-sub-title">
                    {plantrip.subtitle1}
                </div>
                <div className="plan-sub-title plan-sub-title2">
                    {plantrip.subtitle2}
                </div>
            </div>
        </div>
    )
}

export default TripBanner
