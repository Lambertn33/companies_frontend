import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Company from './Company';
import Navbar from '../Navbar';
import * as companiesService from '../services/companiesServices';
import styles from './companies.css';

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const {isLoading, isError} = useQuery('companies', companiesService.getCompanies, {
    onSuccess: companies => {
      setCompanies(companies.data);
    }
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <h2 className='title'>Available Companies in the System</h2>
        </div>
        <div className="row">
           {
             isLoading ?
             <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              : isError ?
              <div className='alert alert-danger'> an error occured..please try again</div>
              : 
              companies.map(({id, name, speciality, city}) => {
                return <Company 
                  key={id}
                  name={name}
                  speciality={speciality}
                  city={city}
                />
              })
            }
        </div>
      </div>
    </>
  );
}
