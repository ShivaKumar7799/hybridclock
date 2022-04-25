import React from 'react'
import './button.css'

export default function Button(props) {
  return (
    < >
        <button className= {props.class === "active" ? "active" : null} onClick={props.click} > {props.name} </button>
    </>
  )
}
