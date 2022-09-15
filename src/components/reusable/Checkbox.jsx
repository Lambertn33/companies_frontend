import React from 'react'

export default function Checkbox({spec, onCheck, checkedValue}) {
  return (
    <div className="form-check form-check-inline">
        <input onChange={onCheck} className="form-check-input" checked={checkedValue === spec ? true : false} type="checkbox" id={spec} value={spec} />
        <label className="form-check-label" htmlFor={spec}>{spec}</label>
    </div>
  )
}
