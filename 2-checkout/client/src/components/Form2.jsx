import React, { useState } from 'react';

const Form2 = () => {

  const[addressLine1Term, setAddressLine1Term] = useState('');
  const[addressLine2Term, setAddressLine2Term] = useState('');
  const[cityTerm, setCityTerm] = useState('');
  const[stateTerm, setStateTerm] = useState('');
  const[zipCodeTerm, setZipCodeTerm] = useState('');

  const handleAddressLine1Change = (e) => {
    setAddressLine1Term(e.target.value)
  }

  const handleAddressLine2Change = (e) => {
    setAddressLine2Term(e.target.value)
  }

  const handleCityChange = (e) => {
    setCityTerm(e.target.value)
  }

  const handleStateChange = (e) => {
    setStateTerm(e.target.value)
  }

  const handleZipCodeChange = (e) => {
    setZipCodeTerm(e.target.value)
  }

  return (
    <form onSubmit={}>
      <label>
        Address Line 1:
        <input type="text" value={addressLine1Term} onchange={handleAddressLine1Change} />
      </label>
      <label>
        Address Line 2:
        <input type="text" value={addressLine2Term} onChange={handleAddressLine2Change} />
      </label>
      <label>
        City:
        <input type="text" value={cityTerm} onChange={handleCityChange} />
      </label>
      <label>
        State:
        <input type="text" value={stateTerm} onChange={handleStateChange} />
      </label>
      <label>
        Zip Code:
        <input type="text" value={zipCodeTerm} onChange={handleZipCodeChange} />
      </label>
    </form>
  )
}

export default Form2;