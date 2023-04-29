import React, { useState } from "react";
import { render } from "react-dom";
import MainForm from './components/MainForm.jsx';



const App = () => {

  return (
    <div>
      <MainForm />
    </div>
  )
}

render(<App />, document.getElementById("root"));
