import React from "react";

const SearchBar = (props) => (
    <div className="input-group mb-3">
        <input type="text" className="form-control d-inline" placeholder="Search for Book" aria-label="Search for Book" value={props.input} onChange={props.handleChange} aria-describedby="basic-addon2"/>
        <div className="input-group-append"/>
    </div>
)

export default SearchBar;