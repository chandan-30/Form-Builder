import React from 'react'

function InputTag(props) {
  return (
    <div>
        <label>{props.label}</label>
        <input type={props.name} required='required' name={props.label}></input>
    </div>
  )
}

export default InputTag