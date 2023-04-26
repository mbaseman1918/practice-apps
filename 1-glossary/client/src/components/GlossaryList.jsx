import React from 'react';

const GlossaryList = ({ glossaryWords }) => (
  <div>
    <h4>Warhammer Words</h4>
    {glossaryWords.map((wordObject) => {
      return (
        <div key={wordObject.word}>
          Word: {wordObject.word}
          Description: {wordObject.description}
        </div>
      )
    })
    }
  </div>
)

export default GlossaryList;