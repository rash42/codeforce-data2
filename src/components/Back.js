import React from "react";
import { useNavigate } from "react-router-dom";

function Back(){
    const navigate = useNavigate()
    return(
        <div>
            <button className="btn btn-danger" onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}

export default Back