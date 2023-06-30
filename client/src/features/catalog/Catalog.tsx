import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }



  return (
    <>
      <ProductList products={products}/>

    </>
  )
}

export default Catalog