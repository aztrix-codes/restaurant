import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Promos() {
  const theme = useContext(ThemeContext);
  return (
    <div className='Promos right-side' style={{height: "100vh", alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
      <h1 style={{color: theme === 'dark' ? "white" : "black", fontSize: "calc(5vw + 20px)"}}>⚙️working...</h1>
    </div>
  )
}

export default Promos