//SSG with Dynamic Parameters

import React from 'react'
import {useRouter} from 'next/router'

function Post({post}) {

    const router = useRouter()


    if(router.isFallback){
        //this will be shown on ID above 100, but for a bit,but fetch the actual post in the meantime
        return <h1>⏳ Loading ....</h1>
    }


    return (
        <>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post


export async function getStaticPaths() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const data = await response.json()

    //looping all the paths
    const paths = data.map(
        post => {
            return {
                params: {
                    postId: `${post.id}`
                }
            }
        }
    )

    //returning all the path routes
    return {
        paths: paths,
        fallback: true,
    }
}


export async function getStaticProps(context){

    const {params} = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()


    return {
        props: {
            post: data
        }
    }
}



