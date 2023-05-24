//getStaticProps example
import React from 'react'
import User from '../components/user'

function UserList({Users}) {
    return (
        <>
            <h1>List of Users -</h1>
            {
                Users.map(user => {
                    return(
                        <div key={user.id}>
                            <User User={user}></User>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserList


export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    console.log(data)

    return {
        props: {
            Users: data, //this Users json can be now accessed in the default component
        }
    }
}
