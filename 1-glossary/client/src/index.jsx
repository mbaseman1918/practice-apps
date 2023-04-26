import React, { useState } from "react";
import { render } from "react-dom";
import axios from 'axios';
import GlossaryList from './components/GlossaryList.jsx';
import Search from './components/Search.jsx';
import AddWord from './components/AddWord.jsx';

// Make the App
const App = () => {
  const initialWords = [
    {
      word: "Gotrek",
      description: "A Dwarf who is a Slayer"
    },
    {
      word: "Felix",
      description: "A Human who is not a Slayer"
    }

  ]
  const [glossaryWords, setGlossaryWords] = useState(initialWords)

  const search = (term) => {
    //execute search and update state of
    console.log('This is what you are searching', term)
    axios.get("/glossary")
  }

  const addWord = (word, description) => {

    console.log('This is what the addWord funciton sees', word, description);
    axios.post("/glossary", {word: word, description: description})
  }

  return (
    <div>
      <h1>Warhammer Glossary</h1>
      <AddWord onAdd={addWord}/>
      <Search onSearch={search}/>
      <GlossaryList glossaryWords = {glossaryWords}/>
    </div>
  )

}

render(<App />, document.getElementById("root"));
