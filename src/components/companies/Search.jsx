import React from 'react'
import Checkbox from '../reusable/Checkbox';
import styles from './companies.css';

export default function Search() {
  const specialities = ['Electrical','Plumbing','Excavation'];
  return (
    <div className="row">
    <div className="col-md-6">
    <p>Search By Typing or checking the boxes</p>
    <form class="form-inline">
        <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Type Company Name....." />
        {
            specialities.map(spec => {
                return <Checkbox spec={spec} />
            })
        }
    </form>
    </div>
  </div>
  );
}
