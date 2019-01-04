import React from "react";

const SearchBar = () => (
    <div class="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search for Book" aria-label="Search for Book" aria-describedby="basic-addon2"/>
        <div className="input-group-append"/>
        <button className="btn btn-outline-primary ml-1" type="button">Search</button>
    </div>
)

export default SearchBar;