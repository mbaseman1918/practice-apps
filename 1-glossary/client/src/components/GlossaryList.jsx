import React from 'react';
import GlossaryListItem from './GlossaryListItem.jsx';


const GlossaryList = ({ glossaryWords, searchWord }) => {

  var searchWords = [];
  if (searchWord === '') {
    searchWords = glossaryWords;
  } else {
    glossaryWords.forEach((word) => {
      if (word.word.includes(searchWord)) {
        searchWords.push(word)
      }
    })
  }

  if (searchWords.length === 0) {
    searchWords.push({word: "No words found matching " + searchWord, description: ''})
  }

  return (
  <div>
    <h4>Warhammer Words</h4>
      <ul>
        {searchWords.map((wordObject) =>
        <div key={wordObject.word}>
          <GlossaryListItem wordObject={wordObject} />
        </div>
        )}
      </ul>

  </div>
)}

export default GlossaryList;