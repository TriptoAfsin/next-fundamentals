import React from 'react'
import Head from 'next/head'

//importing link to got to routes visually
import Link from 'next/link'

//importing the useRouter()
import {useRouter} from 'next/router'

import styles from '../../../styles/Home.module.css'
import Randomizer from 'simple-random-stuff'

function productDetail() {

    //to access dynamic route specific props
    const router = useRouter()
    const prodID = router.query.productId

    return (
        <React.Fragment>
            <h2>Product Detail of {prodID}</h2>
        </React.Fragment>
    )
}

export default productDetail
