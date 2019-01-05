import React from "react";

const ContentCard = props => (
    <div className="card flex-row flex-wrap mt-2 mr-1 ml-1">
        <div className="card-header border-0">
            <img src="//placehold.it/200" alt=""/>
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary">BUTTON</a>
        </div>
    </div>
)

export default ContentCard;