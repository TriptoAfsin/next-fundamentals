import React from 'react'
import Head from 'next/head'

//importing the useRouter()
import {useRouter} from 'next/router'

import styles from '../../../../styles/Home.module.css'
import Randomizer from 'simple-random-stuff'

function productDetail() {

    //to access dynamic route specific props
    const router = useRouter()
    const {productId, reviewId} = router.query

    return (
        <React.Fragment>
            <Head>  
                <title>Product Review of {productId}</title>
            </Head>
            <h2>Product Review({reviewId}) of ID: {productId}</h2>
        </React.Fragment>
    )
}

export default productDetail
