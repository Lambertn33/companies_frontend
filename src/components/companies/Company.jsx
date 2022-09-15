import React from 'react'
import companyImage from './images/company.jpeg';
import styles from './companies.css';

export default function Company({name, city, speciality}) {
  return (
    <div className="col-md-3">
      <div class="card">
        <img src={companyImage} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">City: {city}</p>
          <p class="card-text">Specialized in: {speciality}</p>
        </div>
      </div>
    </div>
  )
}
