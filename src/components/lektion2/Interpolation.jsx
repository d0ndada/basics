import React from 'react'
import Events from '../Events/Events';

import { Persons } from './Persons';

export const Interpolation = () => {
    const name = "Sebastian";
    
    const age = 43;
    const isMarried = true;

    const person ={
        name: "Sebastian",
        age: 43,
        isMarried: true,
    };

    const marriedCheckbox = person.isMarried ? <span>Ja</span> : <span>Nej</span>;
    return (
    <>
    <h3>{name}</h3>
    <p>{age}</p>
    <p>{isMarried.toString()}</p>
    {marriedCheckbox}

    <section>
        {person.name} - {person.age}
    </section>

    <article>
        {JSON.stringify(person)}
    </article>
    <Events/>
    <Persons/>
   
    </>
  )
}

export default Interpolation;