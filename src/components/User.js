import React from "react";
import './User.css'

function User(props) {
    return (
        <div className="card user">
            <h5 className="card-header">{props.info.handle}</h5>
            <div className="card-body container">
                <div className="row">
                    {/* <div className="col-3"> */}
                        <img className="col-3" src={props.info.titlePhoto} alt={props.info.handle}></img>
                    {/* </div> */}
                    <div className="col-9">
                        <h5 className="card-title">{props.info.firstName} {props.info.lastName}</h5>
                        <p className="card-text">Country: {props.info.country}</p>
                        <p className="card-text">Rating: {props.info.rating}</p>
                        <p className="card-text">Rank: {props.info.rank}</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default User