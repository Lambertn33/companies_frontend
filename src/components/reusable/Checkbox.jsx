import React from 'react'

export default function Checkbox({spec}) {
  return (
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id={spec} value={spec} />
        <label class="form-check-label" for={spec}>{spec}</label>
    </div>
  )
}
