import React from 'react'
import './ProductCard.css'
function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product.image} alt="product-img" className='product-image'/>
        <h1 className='product-title'>Title: {product.title}</h1>
        <p className='product-price'>Price: {product.price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard