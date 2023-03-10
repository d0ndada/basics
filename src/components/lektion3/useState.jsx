import React, { useState } from 'react'

function UseState() {

    let [counter, setCounter]= useState(0)

    const handleClick = () => {
        setCounter((counter +1))
    }
  return (
    <>
    <button onClick={handleClick} >klicka på mig</button>
    {counter}
    </>
  )
}

export default UseState;