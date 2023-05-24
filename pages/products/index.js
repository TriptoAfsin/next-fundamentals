import React from 'react'

function ProductList({ products }) {
    return (
        <React.Fragment>
            <h1>🔵 List of Products</h1>
            {
                products.map(product => {
                    return(
                        <div key={product.id}>
                            <h2>{product.id}. {product.title} - ${product.price}</h2>
                            <hr />
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default ProductList


export async function getStaticProps() {
    console.log("🟡 Generating Products List ...")
    const response = await fetch("http://localhost:4321/products")
    const data = await response.json()


    return {

        props: {
            products: data
        },
        revalidate: 10, //setting revalidation to 10s

    }
}
