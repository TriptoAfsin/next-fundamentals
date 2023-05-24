import React from 'react'

function NewsCategory({articles, category}) {
    return (
        <React.Fragment>
            <h1>News||{category} - </h1>

            {
                articles.map(article => {
                    return(
                        <div key={article.id}>
                            <h2>{article.id}. {article.title} | {article.category}</h2>
                            <p>{article.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default NewsCategory


export async function getServerSideProps(context){

    const {params,req,res, query} = context
    const {category} = params

    //getting query
    console.log(query)

    //setting cookie
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Tripto'])



    const response = await fetch(`http://localhost:4321/news?category=${category}`)
    const data = await response.json()


    return {

        props: {
            articles: data,
            category
        },
    }
}
