import React, { useState, useEffect } from 'react'
import './Destination.css';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
const Destination = () => {
    const [dest, getDest] = useState([])
    const [isloading, setloading] = useState(false)
    const url = "https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c"
    useEffect(() => {
        setloading(true)
        axios.get(url)
            .then(res => {
                getDest(res.data.result)
            })
            .catch(e => {
                console.log(e)
            })
        setloading(false)
    }, [])
    console.log("Des-->", dest)
    return (
        <div className="destination">
            <div className="destination-title">
                Featured Destinations
            </div>
            <div className="dest-row scroll-bar">
                {dest.map((cardDatas, i) => (
                    <div key={i}>
                        <div className="dest-img-content" >
                            {isloading
                                ?
                                <BeatLoader color='#7554a0' loading={isloading} />
                                :
                                <img
                                    className="city-img"
                                    src={cardDatas.imageUrl}
                                    alt={cardDatas.city}
                                />
                            }
                        </div>
                        <div className="city-name" key={cardDatas.city}>{cardDatas.city}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Destination
