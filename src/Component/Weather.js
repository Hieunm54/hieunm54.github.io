import React from 'react'

const Weather = (props) =>{
    return(
        <>
        <h2>Weather</h2>
        <p>Temperature: {props.temperature} </p>
        </>
    )
}

export default Weather;