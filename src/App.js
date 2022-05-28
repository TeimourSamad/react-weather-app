import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import './App.css';
import Main from './components/Main/Main'
function App() {


  const [city, setCity] = useState('Baku')
  const [weather, setWeather] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setCity('')
        })
    }
  }



  return (
    <div className="App">
      <Main weather={weather} search={search} city={city} setCity={setCity} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
