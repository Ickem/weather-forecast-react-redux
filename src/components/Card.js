import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({weatherMain, weather, temp, date, city}) => (
    <div className="col m-2">
        <div className="card mx-auto" style={{width:'17rem'}} >
            <div className="card-header text-center">
                {date.daysOfWeek}, {date.month} {date.date}
            </div>
            <img className="card-img-top" src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="1" />
            <div className="card-body">
                <p className="card-text text-center city">{city}</p>
                <p className="card-text text-center temp">{temp}&#176;</p>
                <p className="card-text text-center">{weather[0].main}</p>
            </div>
        </div>
    </div>
);

Card.propTypes = {
    weatherMain: PropTypes.object,
    weather: PropTypes.array,
    temp: PropTypes.number,
    date: PropTypes.object,
    city: PropTypes.string
};


