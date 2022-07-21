import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PrductCard } from "../ProductCard/ProductCard"
import axios from "axios"

export const ProductDetail = ()=>{
    let { id } = useParams()
    const [product, setProduct] = useState({}) 
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>{
            setProduct(result.data)
            console.log(result.data)
        })
    }, [])
    
    return(
       <div>
         <h1>Información del producto con identificador {id}</h1>
         {product &&
            <PrductCard
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                category={product.category}
                rate={product?.rating?.rate}
                count={product?.rating?.count}
                /> 
         }
       </div> 
    )
}