import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function profile() {
    return (
        <React.Fragment>
            <Head>
                <title>Profile</title>
            </Head>
            <div className={styles.title}>
                <h1>Profile 🧑</h1>
            </div>
        </React.Fragment>
    )
}

export default profile
