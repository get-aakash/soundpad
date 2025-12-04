import React from 'react'
import './App.css'
import data from "./data"
import Pad from './component/Pad'

function App() {
  const [value, setValue]  = React.useState(data)
  const buttonElements = value.map((item)=>{
          return(
            <Pad key={item.id} id = {item.id} color={item.color} on={item.on} />
          )
        })

  return (
    <main >
      <div className='pad-container'>
      {
        buttonElements
      }

     
    </div>

    </main>
    
  )
}

export default App
