import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Searchbar = (props) => {
    const { fetchVideosQuery } = props;
    let history = useHistory();
    let location = useLocation();

    const [query, setQuery] = useState('');

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(location.pathname === "/") {
        fetchVideosQuery(query).then(() => {
            setQuery('')
        })
        // } else {

        //     fetchVideosQuery(query).then(() => {
        //         setQuery('');
        //     })
        // }     
    }

    return (
        <div className="search-bar-container">
            <div className="search-input-div">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input type="search" placeholder="Search" onChange={handleQueryChange} value={query}/>
                    <input className="search-icon" type="submit" value="" />
                </form>
            </div>
        </div>
    )
};

export default Searchbar;


