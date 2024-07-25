import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Products.css';
import Header from './Header';
import Footer from './Footer';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <Header />
      <div className="page-header"></div>
      <div className='main-page'>
        <div className='items'>
          {products.map((product) => (
            <div className="card" key={product._id}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Products;
