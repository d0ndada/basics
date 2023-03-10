import { Person } from "../models/Person"

export const Persons = () => {
    const persons = [
        new Person("Sebastian",43, true),
        new Person("Hanna",43, true),
        new Person("Astrid",12, false),
        new Person("Alvar",12, false)
    ];
    console.log(persons)

    const handleClick = (person) => {
        console.log(person)
    }

    const html = persons.map((person) => {
        return(
            <div className="person" key={person.name} onClick={ () => {handleClick(person)}} >
                <h4>{person.name}</h4>
                <div className="person_age">
                Ålder: <span>{person.age}</span>
                </div>
                <div className="person_married">
                Gift: <input type="checkbox" checked={person.isMarried} readOnly/> 
                </div>
            </div>
        );
    });

    return <div>{html}</div>;
}