import React from 'react'

let Post = React.forwardRef(({ onClick, post, href }) => {
    return (
        <React.Fragment>
            <h2><a href={href}>{post.id}. {post.title}</a></h2>
            <hr />
        </React.Fragment>
    )
})

export default Post
