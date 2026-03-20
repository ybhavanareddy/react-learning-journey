import React from 'react'

function ProductCard({product}) {
  return (
    <div>
        <img src={product.image} alt="product-img"/>
        <h1>Title: {product.title}</h1>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard