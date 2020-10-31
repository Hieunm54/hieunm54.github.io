import React from 'react'

const Show = ({ country }) => {
    console.log('show ', country);
    if (country.name === undefined) {
        return <></>
    } else {
        return (
            <div>
                <h2>{country.name}</h2>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <h2>Language</h2>
                <ul>
                    {country.languages.map(language => {
                        return <li key={language.name}> {language.name} </li>
                    })}
                </ul>
                <img src={country.flag} alt={'Poor Internet Connection'} />
            </div>
        )
    }

}

export default Show;