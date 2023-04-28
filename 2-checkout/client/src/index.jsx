import React, { useState } from "react";
import { render } from "react-dom";
import MainForm from './components/MainForm.jsx';
import Form1 from './components/Form1.jsx';


const App = () => {

  return (
    <div>
      <Form1 />
    </div>
  )
}

render(<App />, document.getElementById("root"));
