import React from 'react'
import useSWR from 'swr'


let fetchDbData = async () => {
    const res = await fetch(`http://localhost:4321/dashboard`)
    const data = await res.json()

    return data
}

function DashboardSWR() {
    //using SWR
    const {data, error} =  useSWR('dashboard', fetchDbData)

    //if error
    if(error){
        return (
            <>
               <h2>🔴 Error Occurred</h2> 
            </>
        )
    }

    //if no data
    if(!data){
        return (
            <>
                <h1>⏳ Loading ....</h1>
            </>
        )
    }
    

    //if data
    return(
        <>
        <h1>🧑 Dashboard - </h1>
        <h2>Followers: {data.followers} || Following: {data.following}</h2>
        <h3>Profile View: {data.profileView}</h3>
        <hr />
        <h2>Total Posts : {data.posts} || Likes: {data.likes}</h2>
        </>
    )
    
}

export default DashboardSWR
