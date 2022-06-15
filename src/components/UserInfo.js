import React from "react";
import Back from "./Back";
import User from "./User";
import axios from "axios";
import { useState, useEffect } from "react";

function UserInfo() {


    const [posts, setPosts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
        axios.get(`https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false`)
            .then((res) => {
                console.log(res.data.result)
                const arr = []
                for (var i = 0; i < 10; i++) {
                    arr.push(res.data.result[i]);
                }
                setPosts(arr)
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    return (
        <>
            <div className="page-head">
                Top 10 rated user
            </div>
            {loaded ? posts.map(posts => (
                <User key={posts.handle} info={posts} />
            )) : <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
            </div>}
            <div className="page-head">
                <Back />
            </div>

        </>
    )
}

export default UserInfo