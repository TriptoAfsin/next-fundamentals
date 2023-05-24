import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Randomizer from 'simple-random-stuff'

function blog() {
    return (
        <React.Fragment>
            <Head>
                <title>Blog</title>
            </Head>
            <div className={styles.subtitle}>
                <h2>Blog Archive</h2>
            </div>
        </React.Fragment>
    )
}

export default blog
