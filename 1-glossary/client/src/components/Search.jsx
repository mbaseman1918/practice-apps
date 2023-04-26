import React, { useState } from 'react';

const Search = ({onSearch}) => {

  const[term, setTerm] = useState('');

  const onChange = (e) => {
    setTerm(e.target.value);
  }

  const search = (e) => {
    e.preventDefault();
    onSearch(term)
  }

  return (
  <div>
    <h4>Search Warhammer Words</h4>
    Search: <input value={term} onChange={onChange}/>
    <button onClick={search}>Enter</button>
  </div>
  )
}

export default Search;