import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/AdminPanel.css';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const ProductsUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleProductUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3001/upload-product', formData);
      console.log(response.data);
      setSuccessMessage('Tech Blog uploaded successfully!');
      setTimeout(() => {
        navigate('/admin');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Product upload failed:', error);
    }
  };

  return (
    <div className="admin-panel">
      <AdminHeader/>
      <div className="admin-content">
        <AdminSidebar/>
        <div className="upload-container">
          <h1>Upload Product</h1>
          <form onSubmit={handleProductUpload}>
            <input
              type="text"
              placeholder="Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            <button type="submit">Upload</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsUpload;
