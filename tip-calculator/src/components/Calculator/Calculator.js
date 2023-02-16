import React, { useState } from 'react';
import './Calculator.css';

// write a function for the Calculator component
export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  function calculateTotalTip() {
    let finalTip = bill * (tip / 100);
    console.log(finalTip)
    return finalTip.toFixed(2);
  }
  function calculateTotalAmount() {
    let finalTotalAmount = bill * ((tip / 100) + 1);
    console.log(finalTotalAmount)
    return finalTotalAmount.toFixed(2);
  }
  function calculateTotalPerPerson() {
  let totalPerPerson = calculateTotalAmount() / people;
  console.log(totalPerPerson)
  return totalPerPerson.toFixed(2);
}

  return (
    <>
      <h1>Tip Calculator</h1>
      <div className='container'>
        <form>
          <div className='form-group'>
            <label htmlFor='bill'>Bill Amount</label>
            <input id='bill' onChange={(e) => setBill(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='tip'>Tip Percentage</label>
            <input id='tip' onChange={(e) => setTip(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='people'>Number of People</label>
            <input id='people' onChange={(e) => setPeople(e.target.value)}/>
          </div>
        </form>
      </div>

      <div className='container'>
        <div className='result'>
          <h3>Tip Amount</h3>
          <p>{calculateTotalTip()}</p>
        </div>
        <div className='result'>
          <h3>Total Amount</h3>
          <p>{calculateTotalAmount()}</p>
        </div>
        <div className='result'>
          <h3>Amount per Person</h3>
          {(calculateTotalPerPerson() === 'Infinity' || calculateTotalPerPerson() === 'NaN') ? <p>Finish filling out the form!</p> : <p>{calculateTotalPerPerson()}</p>}
        </div>
      </div>
      </>
  )
}
