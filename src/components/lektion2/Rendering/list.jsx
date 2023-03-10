import React, { useState } from 'react'


function List() {
        const [numbers, setNumbers] = useState([1,1,2,3,5,8,13]);
        const [newNumber, setNewNumber] = useState('');


  const handleAdd = () => {
    const number = parseInt(newNumber, 10);
    if (!isNaN(number)) {
      setNumbers([...numbers,number]);
      setNewNumber('');
    }
  };

        const handleClick = (i) => {
        setNumbers([...numbers.slice(0,i), ...numbers.slice(i+1)])
        };

        const lis = numbers.map((n,i) => 
            ( <li 
            key={i} 
            onClick={ () => {handleClick(i)
            }}
            >
              {n}
            </li>
            ))

        




    return (
    <div>
    <ul className='ul'>{lis}</ul>
    <div>
    <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
    <button onClick={handleAdd}>Add number</button>
  </div>
  </div>
  )
}

export default List;