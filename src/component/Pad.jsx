import React from 'react'
import data from "../data"

const Pad = ({ color, on, toggle,id }) => {

 
    return (

        <button onClick={()=>toggle(id)} style={{ backgroundColor: color }} className={on ? "on" : undefined}>{color}</button>


    )
}

export default Pad

