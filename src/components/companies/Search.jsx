import React from 'react'
import Checkbox from '../reusable/Checkbox';
import styles from './companies.css';

export default function Search({filterData, onCheck, checkedValue}) {
  const specialities = ['Electrical','Plumbing','Excavation'];
  return (
    <div className="row">
      <div className="col-md-6">
        <p>Search By Typing or checking one of the box</p>
        <form className="form-inline">
            <input type="text"
              className="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Type Company Name....."
              onInput={(e) => filterData(e.target.value)}
            />
            {
              specialities.map(spec => {
                /* Temporary use spec as key because there is no ID*/
                return <Checkbox key={spec} spec={spec} onCheck={onCheck} checkedValue={checkedValue} />
              })
            }
        </form>
      </div>
  </div>
  );
}
