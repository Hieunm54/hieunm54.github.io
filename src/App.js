import React, { useState, useEffect } from 'react'
import './App.css';
import Filter from './Component/Filter'
import axios from 'axios'
import Display from './Component/Display'

function App() {
  const [countries, setCountry] = useState([]);
  const [search, setSearch] = useState('');
  //const [weather, setWeather] = useState([]);
  const [show, setShow] = useState(true); // render matched countries

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountry(response.data);
        console.log('useEffect log ', response.data.name);
      })
  }, [])
  // weather api- environment variables
  // const api_key = process.env.REACT_APP_API_KEY;
  // const params = {
  //   access_key: api_key,
  //   query: ''
  // }
  // console.log('heiu ',weather );
  // useEffect(() => {
  //   axios
  //     .get('http://api.weatherstack.com/current', { params })
  //     .then(response => {
  //       setWeather(response.data)
  //       console.log(response.data);
  //     }).catch(error => {
  //       console.log(error);
  //     })
  // }, [])

  const searchHandleChange = (event) => {
    if (event.target.value === '') {
      setShow(true);
      setSearch(event.target.value);
    } else {
      setShow(false)
      setSearch(event.target.value);
      console.log(event.target.value);
    }
  }



  const matchCountries = show ? [] : countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  )
 

  // const matchWeather = show? []: weather.map(place =>{
  //   if(place.location.country.toLowerCase.includes(search.toLowerCase())){
  //     console.log(place.current);
  //     return place.current;
  //   }
  // })
  // console.log('weather ',weather)

  //console.log('match countries', matchCountries);

  return (
    <div>
      <h1>Country Searching</h1>
      <Filter search={search} searchHandleChange={searchHandleChange} />

      <Display matchCountries={matchCountries} />


    </div>
  );
}

export default App;
