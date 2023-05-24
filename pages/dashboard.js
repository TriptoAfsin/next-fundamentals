import React from 'react'
import {useEffect, useState} from 'react'

function Dashboard() {

    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)


    useEffect(() => {

        let fetchDbData = async () => {
            const res = await fetch(`http://localhost:4321/dashboard`)
            const data = await res.json()

            setDashboardData(data)
            setIsLoading(false)
        }

        fetchDbData()

    }, [])

    if(isLoading){
        return (
            <>
                <h1>⏳ Loading ....</h1>
            </>
        )
    }

    return(
        <>
        <h1>🧑 Dashboard - </h1>
        <h2>Followers: {dashboardData.followers} || Following: {dashboardData.following}</h2>
        <h3>Profile View: {dashboardData.profileView}</h3>
        <hr />
        <h2>Total Posts : {dashboardData.posts} || Likes: {dashboardData.likes}</h2>
        </>
    )

    
}

export default Dashboard
