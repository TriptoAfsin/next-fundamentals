import React from 'react'
import {useState } from 'react'
import {useRouter} from 'next/router'

function Events({ eventsList }) {

    const router = useRouter()

    const [events, setEvents] = useState(eventsList)


    let showSportsEvents = async () => {
        console.log("Sports Event Clicked")
        const response = await fetch(`http://localhost:4321/events?category=sports`)
        const data = await response.json()
        setEvents(data)

        //shallow routing to change the url
        router.push(
            '/events?category=sports', 
            undefined,
            {
                shallow: true
            }
        )
    }

    let showTechEvents = async () => {
        console.log("Tech Event Clicked")
        const response = await fetch(`http://localhost:4321/events?category=technology`)
        const data = await response.json()
        setEvents(data)

        //shallow routing to change the url
        router.push(
            '/events?category=technology', 
            undefined,
            {
                shallow: true
            }
        )
    }

    let allEvents = async () => {
        console.log("All Event Clicked")
        const response = await fetch(`http://localhost:4321/events`)
        const data = await response.json()
        setEvents(data)

        //shallow routing to change the url
        router.push(
            '/events', 
            undefined,
            {
                shallow: true
            }
        )
    }


    return (
        <>
            <button onClick={allEvents}>All Events</button>
            <button onClick={showSportsEvents}>Sports Events</button>
            <button onClick={showTechEvents}>Tech Events</button>
            <h1>🎉 Events -</h1>
            {
                events.map(event => {
                    return (
                        <div key={event.id}>
                            <h2>{event.id}. {event.title} | {event.category}</h2>
                            <p>{event.description}</p>
                            <i>Date: {event.date}</i>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Events


export async function getServerSideProps(context) {

    //for shallow routing
    const {query} = context
    const {category} = query

    const queryString = category ? `category=${category}` : ''

    const response = await fetch(`http://localhost:4321/events?${queryString}`)
    const data = await response.json()


    return {
        props: {
            eventsList: data
        },
    }
}
