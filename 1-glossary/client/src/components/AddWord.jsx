import React, { useState } from 'react';

const AddWord = ({ onAdd }) => {

  const[wordTerm, setWordTerm] = useState('');
  const[descriptionTerm, setDescriptionTerm] = useState('');

  const onChangeWord = (e) => {
    setWordTerm(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescriptionTerm(e.target.value);
  }

  const addWord = (e) => {
    e.preventDefault();
    onAdd(wordTerm, descriptionTerm)
  }


  return (
    <div>
      <h4>Add Warhammer Word</h4>
      Word: <input value={wordTerm} onChange={onChangeWord}/>
      Description: <input value={descriptionTerm} onChange={onChangeDescription} />
      <button onClick={addWord}>Enter</button>
    </div>
  )
}

export default AddWord;