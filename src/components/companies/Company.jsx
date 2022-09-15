import React from 'react'
import companyImage from './images/company.jpeg';
import styles from './companies.css';

export default function Company({name, city, speciality}) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={companyImage} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">City: {city}</p>
          <p className="card-text">Specialized in: {speciality}</p>
        </div>
      </div>
    </div>
  )
}
