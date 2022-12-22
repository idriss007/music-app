import React from "react";
import "./searchbar.css";

function SearchBar(props) {
    return (
        <div className="search-bar-div">
            <input placeholder="Ara.." id="search-bar" onChange={(event) => {props.onChange(event)}} />
        </div>
    );
}

export default SearchBar;