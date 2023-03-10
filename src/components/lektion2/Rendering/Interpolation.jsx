import React  from 'react'

function Interpolation() {
    let variabel = "fiskar";

    const handleClick = (id) => {
        console.log("Du klcikade på knappen")
        variabel = document.getElementById("change").value;
        document.getElementById("result").innerHTML = variabel;
    }
    
    

  return (
    <div>
    <section id='result'>{variabel}</section>
    <input id="change" type="text" />
    <button type='button' onClick={ () => {handleClick(1)}}> 
    Ändra
    </button>
    </div>
  );
}

export default Interpolation;