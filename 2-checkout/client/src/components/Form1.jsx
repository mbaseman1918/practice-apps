import React, { useState } from 'react';

const Form1 = () => {

  const[nameTerm, setNameTerm] = useState('');
  const[emailTerm, setEmailTerm] = useState('');
  const[passwordTerm, setPasswordTerm] = useState('');

  const handleNameChange = (e) => {
    setNameTerm(e.target.value)
  }

  const handelEmailChange = (e) => {
    setEmailTerm(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordTerm(e.target.value)
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" value={nameTerm} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="text" value={emailTerm} onChange={handelEmailChange} />
      </label>
      <label>
        Password:
        <input type="text" value={passwordTerm} onChange={handlePasswordChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form1;