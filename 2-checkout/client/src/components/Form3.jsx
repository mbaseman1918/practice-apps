import React, { useState } from 'react';

const Form3 = ({checkoutInfo}) => {

  const [creditCardTerm, setCreditCard] = useState('');
  const [expiryTerm, setExpiryTerm] = useState('');
  const [CVVTerm, setCVVTerm] = useState('');
  const [billingZipTerm, setBillingZipTerm] = useState('');

  const handleCreditCardChange = (e) => {
    setCreditCard(e.target.value);
    checkoutInfo.creditCardNumber = creditCardTerm;
    console.log(checkoutInfo);
  }

  const handleExpiryChange = (e) => {
    setExpiryTerm(e.target.value);
    checkoutInfo.expirationDate = expiryTerm;
    console.log(checkoutInfo);
  }

  const handleCVVChange = (e) => {
    setCVVTerm(e.target.value);
    checkoutInfo.CVV = CVVTerm;
    console.log(checkoutInfo);
  }

  const handleBillingZipChange = (e) => {
    setBillingZipTerm(e.target.value);
    checkoutInfo.billingZipCode = billingZipTerm;
    console.log(checkoutInfo);
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