import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Company from './Company';
import Navbar from '../Navbar';
import * as companiesService from '../services/companiesServices';
import styles from './companies.css';
import Search from './Search';

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [checkedValue, setCheckedValue] = useState('');
  const {isLoading, isError} = useQuery('companies', companiesService.getCompanies, {
    onSuccess: companies => {
      setCompanies(companies.data);
    }
  });

  // filter data on input search
  const setDataOnInput = () => {
    if (searchInput !== "") {
      const filteredData = companies.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredCompanies(filteredData);
    } else {
      setFilteredCompanies(companies);
    }
  }
  

  const filterData = (searchValue) => {
    setSearchInput(searchValue);
    setDataOnInput();
  }

  const onCheck = (e) => {
    // check one of the checkbox
   if (e.target.checked) {
    setCheckedValue(e.target.value);
    // filter Data when input search is NOT empty
    if (filteredCompanies.length > 0) {
      const filteredCompaniesOnCheck = filteredCompanies.filter((item) => item.speciality === e.target.value);
      setFilteredCompanies(filteredCompaniesOnCheck);
    } else {
      // filter Data when input search is empty
      const companiesOnCheck = companies.filter((item) => item.speciality === e.target.value);
      setFilteredCompanies(companiesOnCheck);
    }
    // uncheck the checkbox
   } else {
    setCheckedValue('');
    setDataOnInput();
   }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <h2 className='title'>Available Companies in the System</h2>
        </div>
        <div className="row">
          <Search filterData={filterData} onCheck={onCheck} checkedValue={checkedValue} />
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
              (searchInput.length < 1 && checkedValue.length < 1) ?
              // display data before filtering
              companies.map(({id, name, speciality, city}) => {
                return <Company 
                  key={id}
                  name={name}
                  speciality={speciality}
                  city={city}
                />
              })
              :
              // display data after filtering (search input or checkbox)
              filteredCompanies.map(({id, name, speciality, city}) => {
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
