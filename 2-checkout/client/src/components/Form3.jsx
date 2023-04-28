import React, { useState } from 'react';

const Form3 = () => {

  const [creditCardTerm, setCreditCard] = useState('');
  const [expiryTerm, setExpiryTerm] = useState('');
  const [CVVTerm, setCVVTerm] = useState('');
  const [billingZipTerm, setBillingZipTerm] = useState('');

  const handleCreditCardChange = (e) => {
    setCreditCard(e.target.value)
  }

  const handleExpiryChange = (e) => {
    setExpiryTerm(e.target.value)
  }

  const handleCVVChange = (e) => {
    setCVVTerm(e.target.value)
  }

  const handleBillingZipChange = (e) => {
    setBillingZipTerm(e.target.value)
  }

  return (
    <form>
      <label>
        Credit Card Number:
        <input type="text" value={creditCardTerm} onChange={handleCreditCardChange} />
      </label>
      <label>
        Expiration Date:
        <input type="text" value={expiryTerm} onChange={handleExpiryChange} />
      </label>
      <label>
        CVV:
        <input type="text" value={CVVTerm} onChange={handleCVVChange} />
      </label>
      <label>
        Billing Zip Code:
        <input type="text" value={billingZipTerm} onChange={handleBillingZipChange} />
      </label>
    </form>
  )
}

export default Form3;