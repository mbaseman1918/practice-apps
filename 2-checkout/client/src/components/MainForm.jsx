import React, {useState} from 'react';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirmation from './Confirmation.jsx';

const MainForm = () => {

  const[currentPage, setCurrentPage] = useState(1)

  const checkoutInfo = {
    name: '',
    email: '',
    password: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    creditCardNumber: '',
    expirationDate: '',
    CVV: '',
    billingZipCode:''
  }

  const HandleNextClick = () => {
    setCurrentPage(currentPage + 1)
  }

  if (currentPage === 0) {
    return (
    <div>MAINFORM PAGE</div>
    )
  } else if (currentPage === 1) {
    return (
      <Form1 checkoutInfo={checkoutInfo} />
    )
  } else if (currentPage === 2) {
    return (
      <Form2 checkoutInfo={checkoutInfo} />
    )
  } else if (currentPage === 3) {
    return (
      <Form3 checkoutInfo={checkoutInfo} />
    )
  } else if (currentPage === 4) {
    return (
      <Confirmation checkoutInfo={checkoutInfo} />
    )
  }

}

export default MainForm;