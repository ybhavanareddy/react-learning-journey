import ProductCard from "./components/ProductCard/ProductCard";
import './App.css'
function App(){

  const product = {
    title:"iPhone 15",
    price: 79999,
    image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"

  };

  return (
    <div className="bg-container">
      <ProductCard product={product}/>
    </div>
    
  )
}

export default App;
