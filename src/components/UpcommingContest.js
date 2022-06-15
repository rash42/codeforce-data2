import React from "react";
import Back from "./Back";
import { useState, useEffect } from "react";
import axios from "axios";
import ContestInfo from "./ContestInfo";
import './UpcommingContest.css'

function UpcommingContest() {

    const [posts, setPosts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState({
        hasError: false,
        message: ""
    })

    useEffect(() => {
        setLoaded(false)
        axios.get(`https://codeforces.com/api/contest.list`)
            .then((res) => {
                console.log(res)
                //console.log(res.data.result)
                if (res.data.status === "OK") {
                    console.log(`in`)
                    const arr = []
                    for (var i = 0; i < 10; i++) {
                        arr.push(res.data.result[i]);
                    }
                    setPosts(arr)
                    setLoaded(true)
                }
                else {
                    setError({
                        ...error,
                        hasError: true,
                        message: res.data
                    })
                }

            })
            .catch(err => {
                console.log(err)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (error.hasError) {
        return (
            <>
                <div className="page-head">
                    Upcomming / Past Contests
                </div>
                <div>
                    {error.message}
                </div>
                <div className="page-head">
                    <Back />
                </div>

            </>
        )
    }
    else if (loaded) {
        console.log(posts)
        return (
            <>
                <div className="page-head">
                    Upcomming / Past Contests
                </div>
                <table className="table table-dark tableClass">
                    <thead>
                        <tr>
                            <th>Contest Id</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(posts => (
                            <ContestInfo key={posts.id} info={posts} />
                        ))}
                    </tbody>


                </table>
                <div className="page-head">
                    <Back />
                </div>

            </>
        )
    }
    else {
        return (
            <>
                <div className="page-head">
                    Upcomming / Past Contests
                </div>
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="page-head">
                    <Back />
                </div>

            </>
        )
    }

}

export default UpcommingContest