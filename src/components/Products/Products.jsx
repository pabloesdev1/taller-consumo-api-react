import { PrductCard } from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Products = ()=>{
    
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((result)=>{
      setProducts(result.data)
      console.log(result.data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Lista de productos</h1>
      {products && products.map((product)=>{
        return(
          <PrductCard 
          key={product.id}
          id={product.id}
          title={product.title} 
          image={product.image}
          price={product.price}
          category={product.category}
          rate={product?.rating?.rate}
          count={product?.rating?.count}
         />
        )
      })}
    </div>
  )
}