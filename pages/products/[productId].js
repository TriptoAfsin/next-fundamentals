import React from 'react'
import {useRouter} from 'next/router'

function Product({product}) {
    const router = useRouter()


    if(router.isFallback){
        //this will be shown on ID above 1, but for a bit,but fetch the actual product in the meantime
        return <h1>⏳ Loading ....</h1>
    }


    return (
        <React.Fragment>
            <h2>{product.id}. {product.title} - {product.price}</h2>
            <p>{product.description}</p>
        </React.Fragment>
    )
}

export default Product


export async function getStaticProps(context){
    const {params} = context 

    const response = await fetch(`http://localhost:4321/products/${params.productId}`)
    const data = await response.json()


    return {

        props: {
            product: data
        },
        revalidate: 10, //setting revalidation to 10s

    }
}


export async function getStaticPaths(){
    return {
        paths: [
            {
                params: {
                    productId: '1'
                }
            }
        ],
        fallback: true
    }
}
