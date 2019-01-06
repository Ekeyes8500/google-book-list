import React from "react";
// import "./style.css";

const ContentCard = props => (
    <div className="card flex-row flex-wrap mt-2 mr-1 ml-1 mb-3 pb-2">
        <div className="card-header border-0">
            <img src={props.imageLink} alt="" className="bookPhoto"/>
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">{props.bookTitle}</h4>
            {props.authors.map(author =>(
                <h5 className="card-body">{author}</h5>
            ))}
            <p className="card-text">{props.description}</p>
            {props.children}
            <a href={props.bookLink} className="btn btn-secondary mb-3 d-inline" target="_blank">Link to book</a>
        </div>
    </div>
)

export default ContentCard;