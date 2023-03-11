import React, { useState } from 'react'

function AddTheNumbers() {

    const [userInput, setUserInput] = useState ("0");

    const handleChange = (e) => {
        e.target.value
    }
  return (
    <div>
        <input onChange={handleChange} value={userInput} />
    </div>
  )
}

export default AddTheNumbers;