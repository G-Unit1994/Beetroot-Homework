import React from 'react';

function City({ name, temperature, icon, order }) {
  return (
    <li className={`cities-list__item cities-list__item--order-${order}`} data-order={order}>
      <a href="#">
        {name}
        <span className="cities-list__weather-details">
          {temperature}°C <i className={`wi ${icon}`}></i>
        </span>
      </a>
    </li>
  );
}

export default City;