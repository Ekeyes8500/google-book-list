import React from "react";

function ContentContainer({children}){
    return(
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="card">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentContainer;