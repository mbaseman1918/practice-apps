import React, {useState} from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

const GlossaryListItem = ({wordObject}) => {

  const[descriptionTerm, setDescriptionTerm] = useState('')

  const deleteWord = () => {
    console.log('This is what the axios.delete got:', wordObject)
    axios.delete("/glossary", {data: wordObject})
  }

  const onChangeDescription = (e) => {
    setDescriptionTerm(e.target.value)
  }

  const updateDescription = (e) => {
    console.log(wordObject)
    wordObject.description = descriptionTerm
    console.log(wordObject)
    axios.put("/glossary", wordObject)
  }


  return (
    <li>
      <div>Word: {wordObject.word}</div>
      <div>Description: {wordObject.description}</div>
      <button onClick={deleteWord}>Delete</button>

      <Popup trigger={ <button>Update Description</button>} position="right center">
        <div>New Description: <input value={descriptionTerm} onChange={onChangeDescription} />
          <button onClick={updateDescription}>Send Update</button>
        </div>
      </Popup>

    </li>
  )
}

export default GlossaryListItem;