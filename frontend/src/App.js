import { useEffect, useState } from 'react';

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.product_name}: {product.product_price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
