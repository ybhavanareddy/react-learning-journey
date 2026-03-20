import React from 'react'
import ProductCard from './day-01-components/ProductCard/ProductCard'
function App() {
  const product={
    title:"iPhone 15",
    price:79999,
    image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
  }
  return (
    <div>
      <ProductCard product={product}/>
    </div>
  )
}

export default App