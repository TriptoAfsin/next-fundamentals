import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function about() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className={styles.title}>
                <h1>About</h1>
            </div>
        </>
    )
}

export default about
