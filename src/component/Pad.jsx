import React from 'react'
import data from "../data"

const Pad = ({ color, on }) => {
    const [value, setValue] = React.useState(on)

    const handleOnClick = () => {

     
        setValue(prevOn => !prevOn)

    }
    return (

        <button onClick={handleOnClick} style={{ backgroundColor: color }} className={value ? "on" : undefined}>{color}</button>


    )
}

export default Pad

