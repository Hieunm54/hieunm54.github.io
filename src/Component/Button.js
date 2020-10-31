import React, { useState } from 'react'
import Show from './Show'
import WeatherDisplay from './Weather'

const Button = (props) => {
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show);
    }

    const display = show ? [] : props.country

    return (
        <div>
            <button onClick={handleClick} >Show</button>
            <Show country={display} />
            {/* <WeatherDisplay weather ={props.weather} /> */}
        </div>

    )
}

export default Button;