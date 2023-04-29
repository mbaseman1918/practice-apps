import React, { useState } from 'react';

const Form2 = ({ checkoutInfo }) => {

  const[addressLine1Term, setAddressLine1Term] = useState('');
  const[addressLine2Term, setAddressLine2Term] = useState('');
  const[cityTerm, setCityTerm] = useState('');
  const[stateTerm, setStateTerm] = useState('');
  const[zipCodeTerm, setZipCodeTerm] = useState('');
  const[phoneNumberTerm, setPhoneNumberTerm] = useState('');

  const handleAddressLine1Change = (e) => {
    setAddressLine1Term(e.target.value);
    checkoutInfo.addressLine1 = addressLine1Term;
    console.log(checkoutInfo);
  }

  const handleAddressLine2Change = (e) => {
    setAddressLine2Term(e.target.value);
    checkoutInfo.addressLine2 = addressLine2Term;
    console.log(checkoutInfo);
  }

  const handleCityChange = (e) => {
    setCityTerm(e.target.value);
    checkoutInfo.city = cityTerm;
    console.log(checkoutInfo);
  }

  const handleStateChange = (e) => {
    setStateTerm(e.target.value);
    checkoutInfo.city = cityTerm;
    console.log(checkoutInfo);
  }

  const handleZipCodeChange = (e) => {
    setZipCodeTerm(e.target.value);
    checkoutInfo.zipCode = zipCodeTerm;
    console.log(checkoutInfo);
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumberTerm(e.target.value);
    checkoutInfo.phoneNumber = phoneNumberTerm;
    console.log(checkoutInfo);
  }

  return (
    <form>
      <label>
        Address Line 1:
        <input type="text" value={addressLine1Term} onChange={handleAddressLine1Change} />
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
      <label>
        Phone Number:
        <input type="text" value={phoneNumberTerm} onChange={handlePhoneNumberChange} />
      </label>
    </form>
  )
}

export default Form2;