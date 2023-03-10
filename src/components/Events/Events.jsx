import React from 'react'
export default function Events() {
    let userInput = "";
    const handleClick = (id) => {
        console.log("Du klickade på knappen",id);
    };

    const handleChange = (e) =>{
        console.log(e.target.value);
        userInput = e.target.value;
    }

  return (
    <>
    <input type="text" onChange={handleChange} />
    <button type='button' onClick={() => {handleClick(17)}} >
        Klicka här
    </button>

    {userInput}
    </>
  )
}
