import React from "react";
import './User.css'

function ContestInfo(props) {
    var dt = new Date(props.info.startTimeSeconds*1000)
    console.log(dt.toLocaleTimeString())
    return (
/*        <div className="card user">
            <h5 className="card-header">{props.info.name}</h5>
            <div className="card-body">
                <h5 className="card-title">Contest Id: {props.info.id}</h5>
                <p className="card-text">Type: {props.info.type}</p>
                <p className="card-text">Duration: {props.info.durationSeconds}</p>
                <p className="card-text">Start Time: {dt.toDateString()} {dt.toLocaleTimeString()}</p>
            </div>
        </div>*/

        <tr>
            <td>{props.info.id}</td>
            <td>{props.info.type}</td>
            <td>{props.info.name}</td>
            <td>{props.info.durationSeconds/60} Mins</td>
            <td>{dt.toDateString()} {dt.toLocaleDateString()}</td>
        </tr>


    )
}

export default ContestInfo