// components/TechBlogUpload.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/TechBlog.css';

const TechBlogUpload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [createdAt, setCreatedAt] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTechBlogUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('image', image);
      formData.append('createdAt', createdAt);

      const response = await axios.post('http://localhost:3001/upload-techblog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      setSuccessMessage('Tech Blog uploaded successfully!');
      setTimeout(() => {
        navigate('/admin');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Tech Blog upload failed:', error);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Tech Blog</h2>
      <form onSubmit={handleTechBlogUpload}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/png, image/jpeg"
          required
        />
        <input
          type="date"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)} 
          required
        />
        <button type="submit">Upload</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default TechBlogUpload;
