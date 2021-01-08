import React, { useState, useEffect } from 'react';
const SearchBar = (props) => {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    

    const test = (e) => {
        e.preventDefault();
        //handleResults(x)
        //console.log(search)
        props.handleResults(search)
    }

return (
    <div>
        <form>
            <label>
                <input type="text" name="name"
                    placeholder="search for events"
                    className="search-bar"
                    onChange={handleSearch}
                />
            </label>
            <button className="search-button" onClick={test}>Search!</button>
        </form>
    </div>
);
};

export default SearchBar;