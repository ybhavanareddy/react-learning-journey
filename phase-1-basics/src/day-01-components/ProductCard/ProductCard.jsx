/*
function ProductCard({product}) {
  return (
    <div>
        <img src={product.image} alt={product.title}/>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard
*/

import React from 'react'

function ProductCard({product}) {
    console.log(product)
  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>

    </div>
  )
}


export default ProductCard