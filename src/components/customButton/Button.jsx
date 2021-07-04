import React from 'react'
import './Button.css'

const Button = (props) => {
    const btnName = props.name;
    const type = props.type;

    return (
        <button
            className="custom-buttom"
            type={type}
        >
            {btnName}
        </button>
    )
}

export default Button
