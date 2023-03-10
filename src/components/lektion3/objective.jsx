import React, { useState } from 'react'
import { Person } from '../models/Person';

function Objective() {

    const [person, setPerson] = useState(new Person("", 0 ,false));
    const [name,setName] = useState("")
    const [age, setAge] = useState("");

    const handleClick = () => {
        console.log("funkar")
        setPerson({...person, age:age, name: name});
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const html = person.age > 0 ? 
    <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
    </div> 
        : <></>; 
  return (
    <>
    <input placeholder='Namn ' value={name} onChange={handleNameChange}/>
    <input placeholder='Ålder' value={age} onChange={handleAgeChange} />
    <button type="button" onClick={handleClick} value={age}>Ändra person</button>
    {html}
    </>
  )
}

export default Objective