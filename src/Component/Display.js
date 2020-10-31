import React from 'react'
import Button from './Button'



const Display = (props) => {

    if (props.matchCountries.length >= 10) {
        return <div>Too many countries </div>
    } else {
        return (
            <ul>
                {props.matchCountries.map((country) => {
                    return (
                        <div>
                            <li key={country.population}>{country.name} </li>
                            <Button country={country} />

                        </div>
                    )
                }
                )}

            </ul>
        )
    }




}

export default Display;