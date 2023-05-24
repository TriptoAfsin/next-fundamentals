import React from 'react'

function User({ User }) {
    return (
        <React.Fragment>
                <p>👨{User.name}</p>
                <p>✉{User.email}</p>
        </React.Fragment>
    )
}

export default User
