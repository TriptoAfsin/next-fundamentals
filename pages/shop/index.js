import React from 'react'
import Head from 'next/head'

//importing link to got to routes visually
import Link from 'next/link'

import styles from '../../styles/Home.module.css'
import Randomizer from 'simple-random-stuff'


//the replace prop changes the back button behaviour to go back to home page directly

function shop({productId = 100}) {
    return (
        <React.Fragment>
            <Head>
                <title>Shop</title>
            </Head>
            <Link href="/">
                <a>Go Home</a>
            </Link>
            <div className={styles.products}>
                <Link href="/shop/1">
                    <a>Product 1</a>
                </Link>
                <Link href="/shop/2">
                    <a>Product 2</a>
                </Link>
                <Link href="/shop/3" replace> 
                    <a>Product 3</a>
                </Link>
                <Link href={`/shop/${productId}`}>
                    <a>Product {productId}</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default shop
