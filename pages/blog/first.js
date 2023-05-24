import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Randomizer from 'simple-random-stuff'

function blog1() {
    return (
        <React.Fragment>
            <Head>
                <title>Blog - 1</title>
            </Head>
            <div className={styles.subtitle}>
                <h2>Blog 1</h2>
            </div>
        </React.Fragment>
    )
}

export default blog1
