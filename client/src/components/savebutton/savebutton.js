import React from "react"
import { PromiseProvider } from "mongoose";

const SaveButton = (props) => (
    <div {...props} className="btn btn-primary mb-3 d-inline mr-1">Save to list</div>
)

export default SaveButton;