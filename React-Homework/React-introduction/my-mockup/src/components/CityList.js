import React from 'react';
import City from './City';

const cities = [
  { name: 'Lisbon', temperature: 21, icon: 'wi-day-sunny', order: '1' },
  { name: 'Paris', temperature: 11, icon: 'wi-night-sleet', order: '2' },
  { name: 'Belgrade', temperature: 15, icon: 'wi-day-cloudy', order: '3' },
  { name: 'Venice', temperature: 21, icon: 'wi-day-cloudy-high', order: '4' },
  { name: 'Tel-Aviv', temperature: 32, icon: 'wi-hot', order: '5' },
  { name: 'Cairo', temperature: 21, icon: 'wi-day-sunny', order: '6' },
  { name: 'New-York', temperature: 17, icon: 'wi-day-storm-showers', order: '7' },
  { name: 'New-Delhi', temperature: 17, icon: 'wi-rain-wind', order: '8' },
  { name: 'San-Francisco', temperature: 15, icon: 'wi-day-sunny-overcast', order: '9' },
  { name: 'Tokyo', temperature: 8, icon: 'wi-night-clear', order: '10' },
  { name: 'Sydney', temperature: 25, icon: 'wi-night-partly-cloudy', order: '11' },
];

function CityList() {
  return (
    <ul className="cities-list">
      {cities.map((city, index) => (
        <City key={index} {...city} />
      ))}
    </ul>
  );
}

export { CityList };