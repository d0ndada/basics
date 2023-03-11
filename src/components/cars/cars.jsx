import React from 'react'

export default function Cars() {
  const cars = [{},{},{}];

  const html = cars.map((car) => {
    return(
        <div>
            <h3>{car.model}</h3>
            <p>{car.price}</p>
            <span>{car.brand}</span>
        </div>
    );
  })
    return (
    <>{html}</>
  )
}
