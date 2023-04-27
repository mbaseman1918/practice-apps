import React, { useState } from "react";
import { render } from "react-dom";
import axios from 'axios';
import GlossaryList from './components/GlossaryList.jsx';
import Search from './components/Search.jsx';
import AddWord from './components/AddWord.jsx';

// Make the App
const App = () => {

  const [glossaryWords, setGlossaryWords] = useState([{word: 'Start', description: 'Start'}])
  const [searchWord, setSearchWord] = useState('')

  if(glossaryWords[0].word === 'Start') {
    axios.get("/glossary")
      .then((response) => {
        setGlossaryWords(response.data)
      })
  }

  const search = (term) => {
    //execute search and update state of
    console.log('This is what you are searching', term);
    axios.get("/glossary")
      .then((response) => {
        console.log('This is the GET results from the DB', response)
        setGlossaryWords(response.data)
      });
    setSearchWord(term);
  }

  const addWord = (word, description) => {

    console.log('This is what the addWord function sees', word, description);
    axios.post("/glossary", {word: word, description: description})
      .then((response) => {
        axios.get("/glossary")
          .then((response) => {
        console.log('This is the GET results from the DB', response)
        setGlossaryWords(response.data)
        })
      })
  }

  return (
    <div>
      <h1>Warhammer Glossary</h1>
      <AddWord onAdd={addWord}/>
      <Search onSearch={search}/>
      <GlossaryList glossaryWords = {glossaryWords} searchWord={searchWord}/>
    </div>
  )

}

render(<App />, document.getElementById("root"));
