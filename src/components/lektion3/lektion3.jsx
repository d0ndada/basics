import React, { useState } from 'react'
import Objective from './objective';
import UseState from './useState';

function Lektion3() {

    const [randomNumber, setRandomNumber] = useState(0);

    const handleClick = () => {
        setRandomNumber(randomNumber + 1)
        
    }
  return (
    <>
    <div onClick={handleClick}> {randomNumber}</div>
    <UseState/>
    </>
  )
}

export default Lektion3