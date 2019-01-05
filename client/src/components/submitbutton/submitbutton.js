import React from "react";

const submitButton = (props) => (
    <button className="btn btn-outline-secondary ml-1 mb-2 d-inline" type="button" onClick={props.handleClick}>Search</button>
)

export default submitButton;