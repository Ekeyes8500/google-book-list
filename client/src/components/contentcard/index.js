import React from "react";

const ContentCard = props => (
    <div className="card flex-row flex-wrap mt-2 mr-1 ml-1">
        <div class="card-header border-0">
            <img src="//placehold.it/200" alt=""/>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Description</p>
            <a href="#" class="btn btn-primary">BUTTON</a>
        </div>
    </div>
)

export default ContentCard;