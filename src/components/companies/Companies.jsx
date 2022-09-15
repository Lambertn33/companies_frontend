import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Navbar from '../Navbar';
import * as companiesService from '../services/companiesServices';

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
    </>
  );
}
