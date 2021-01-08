
import React, { useState } from "react";
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import axios from 'axios';


const App = () => {

  const [results, setResults] = useState('');

  const handleResults = (searchVal) => {

    axios.get(`http://localhost:3000/events?q=${searchVal}&_page=1`)
      .then((res) => {
        //console.log(res.data)
        setResults(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }


  return (
    <>
      <h1 className="title">
        Historical Events
        </h1>
      <SearchBar handleResults={handleResults} />
      <Results results={results}/>
    </>
  );
}
export default App;
