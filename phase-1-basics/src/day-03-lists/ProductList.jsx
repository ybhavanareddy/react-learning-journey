import React from 'react'
import ProductCard from '../day-01-components/ProductCard/ProductCard'
function ProductList() {
    const products = [
        {id:1, title:"Phone", price:20000},
        {id:2, title:"Laptop", price:70000},
        {id:3, title:"Headphone", price:2000},

    ]

    const filteredProducts = products.filter((product) => product.price > 1000)

  return (
    <div>
        {filteredProducts.map((product) => (
            <ProductCard  key={product.id} product={product}/>
        ))}
        
    </div>
  )
}

export default ProductList