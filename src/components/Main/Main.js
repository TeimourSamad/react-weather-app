import React, { useState } from 'react';
import './main.css'

const Main = ({ weather, search, setCity, handleSubmit, city }) => {

    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [situation, setSituation] = useState('./images/cold.jpg')
    const date = new Date()
    const weekDay = date.getDay()
    const day = date.getDate()
    const exactDay = weekDays[weekDay]
    const monthName = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const [scale, setScale] = useState('c')
    return <div className={(typeof weather.main !== 'undefined') ? (Math.floor(weather.main.temp_max - 273) < 15 ? 'main-container' : Math.floor(weather.main.temp_max - 273) > 25 ? 'hot' : 'mild') : 'mild'}>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input id='autocomplete' onKeyPress={search} type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter a city...' autoFocus />
            </form>
            <div >
                <select onChange={(e) => setScale(e.target.value)} style={{ width: '100px', height: '25px', backgroundColor: 'rgba(255, 255, 255, .5)', borderRadius: '10px', marginLeft: '10px', }} >
                    <option value='c'>Celcius</option>
                    <option value='f'>Fahrenheit</option>
                </select>
            </div>
        </div>

        {(typeof weather.main !== 'undefined') ? (
            <div>
                <div className='info-container'>
                    <p>{weather.name}, {weather.sys.country}</p>
                    <span className='date'>{exactDay}, {day} {monthName} {year}</span>
                    <span className='degree'>{scale == 'c' ? Math.floor(weather.main.temp_max - 273) : Math.floor(Math.floor(weather.main.temp_max - 273) * 9 / 5 + 32)} °{scale == 'c' ? 'C' : 'F'}</span>
                </div>


                <div className='footer-info-container'>
                    <div className='footer-container'>
                        <div className='test'>
                            <span className='info-span'>{weather.main.humidity}%</span>
                            <span>Humidity</span>
                        </div>
                        <div>
                            <span className='info-span'>{Math.floor(weather.wind.speed)}km/h</span>
                            <span>Wind</span>
                        </div>
                        <div>
                            <span className='info-span'>{weather.main.pressure}mb</span>
                            <span>Pressure</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : ('')}
    </div>
};

export default Main;
