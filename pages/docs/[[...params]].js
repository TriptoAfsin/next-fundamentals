//catch all routes
// [...params] -> if you go to only /docs -> 404 error
//[[...params]] -> if you go to only /docs -> renders the index page

import React from 'react'
import Head from 'next/head'

//importing the useRouter()
import {useRouter} from 'next/router'

import Randomizer from 'simple-random-stuff'

function docs() {

    //to access dynamic route specific props
    const router = useRouter()
    const {params = [] } = router.query //due to pre rendering the params array is undefined at first 

    console.log(`Params: ${params}`)

    return (
        <React.Fragment>
            <Head>  
                <title>Docs Page</title>
            </Head>
            <h2>Docs Page</h2>
        </React.Fragment>
    )
}

export default docs
