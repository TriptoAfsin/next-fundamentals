import React from 'react'

function NewsList({articles}) {
    return (
        <React.Fragment>
            <h1>🔴 Article List - </h1>
            {
                articles.map(article => {
                    return(
                        <div key={article.id}>
                            <h2>{article.id}. {article.title} | {article.category}</h2>
                            <hr />
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default NewsList

//ssr

export async function getServerSideProps(){
    const response = await fetch("http://localhost:4321/news")
    const data = await response.json()


    return {

        props: {
            articles: data
        },
    }
}
