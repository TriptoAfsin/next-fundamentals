import React from 'react'
import Post from '../../components/postComponent'
import Link from 'next/link'

function PostList({ posts }) {
    return (
        <React.Fragment>
            <h1>🟢 Posts List - </h1>

            {
                posts.map(
                    post => {
                        return (
                            <div key={post.id}>
                                <Link href={`posts/${post.id}`} passHref>
                                    <Post post={post}></Post>
                                </Link> 
                            </div>
                        )
                    }
                )
            }
        </React.Fragment>
    )
}

export default PostList


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const data = await response.json()


    return {
        props: {
            posts: data.slice(0, 10)
        }
    }



}
