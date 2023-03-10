import React, { useState } from 'react'
import './form.css';


export const AdderConfig = ()=> {
  const [formValues, setFormValues] = useState({ num1: 0, num2: 0, result: '?' });


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues(prevValues => ({...prevValues, [name]: parseInt(value) || 0}))
    }


    const handleAddition = () => {
        setFormValues(prevValues => ({...prevValues, result: num1 + num2}))
    }
    const { num1,num2, result} = formValues
     const displayResult = result === "?" ? "?": result

  return (
    <>
  <div className='form'>
    <p>Adder</p>
    <input type='number' name='num1'  value={num1} onChange={handleChange}/>
    <span className='plus'>+</span>
    <input type='number'  name='num2' value={num2} onChange={handleChange}/>
    <button type='button' onClick={handleAddition}>Addera </button>
    <p className='result'>Resultat: {displayResult}</p>

  </div>
 
  </>
  )
;}
export default AdderConfig;
