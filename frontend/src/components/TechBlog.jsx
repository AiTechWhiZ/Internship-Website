import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../styles/TechBlog.css';
import Header from './Header';
import Footer from './Footer';

function TechBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchTechBlogs();
  }, []);

  const fetchTechBlogs = () => {
    axios.get('http://localhost:3001/techblogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching tech blogs:', error);
      });
  };

  return (
    <main>
      <Header />
      <div className="page-header"></div>
      <div className="tech-blog">
        <main className="main-content">
          <div className="container">
            {blogs.map(blog => (
              <article className="box-wrapper" key={blog._id}>
                <div className="box">
                  <div className="image-wrapper">
                    <img src={blog.image} width="280" height="200" alt={blog.title} />
                  </div>
                  <div className="context-wrapper">
                    <h4 className="title">
                      <a href={`https://techasiamechatronics.com/blog/${blog._id}`} target="_blank" rel="noopener noreferrer">
                        {blog.title}
                      </a>
                    </h4>
                    <div className="TBcontent">
                      {blog.content.substring(0, 300)}...
                    </div>
                    <span>{moment(blog.createdAt).format('MMMM Do, YYYY')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        <aside className="sidebar">
          <form className="search-blog">
            <h2>Search Blog</h2>
            <input type="text" id="search-input" placeholder="Start Typing..." />
            <input type="submit" className="search animation" value="SEARCH" />
          </form>

          <h2>TECH NEWS</h2>
          {/* Tech news section */}
          <div className="tech-news">
            <div className="news-wrapper">
              <div className="news-item">
                <div className="image-wrapper">
                  <img className="picture" src="https://techasiamechatronics.com/wp-content/uploads/2019/05/Worlds-most-Dangerous-Laptop-150x150.png" alt="World's most dangerous laptop" />
                </div>
                <div className="news-details">
                  <p>The 2008 Samsung laptop containing some of the world's most destructive malware sold for $1.3 million (₹9 crores)</p>
                  <span>May 29, 2019</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-news">
            <div className="news-wrapper">
              <div className="news-item">
                <div className="image-wrapper">
                  <img className="picture" src="https://techasiamechatronics.com/wp-content/uploads/2019/05/1557831009_635_OnePlus_7_Main_DB-150x150.jpg" alt="OnePlus 7" />
                </div>
                <div className="news-details">
                  <p>The OnePlus 7 will be available on Amazon.in starting 4th June, 12 noon. 6GB+128GB : ₹32999 and 8GB+256GB : ₹37999</p>
                  <span>May 29, 2019</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-news">
            <div className="news-wrapper">
              <div className="news-item">
                <div className="image-wrapper">
                  <img className="picture" src="https://techasiamechatronics.com/wp-content/uploads/2019/04/OnePlus7-580x358-150x150.jpg" alt="OnePlus 7" />
                </div>
                <div className="news-details">
                  <p>Remember the date 14th May - OnePlus 7 & OnePlus 7 Pro launch date.</p>
                  <span>April 16, 2019</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-news">
            <div className="news-wrapper">
              <div className="news-item">
                <div className="image-wrapper">
                  <img className="picture" src="https://techasiamechatronics.com/wp-content/uploads/2019/03/ndc1c5v4qcd11-150x150.jpg" alt="Tech News" />
                </div>
                <div className="news-details">
                  <p>Facebook stores millions of passwords in plain text. Where is our privacy?</p>
                  <span>March 22, 2019</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-news">
            <div className="news-wrapper">
              <div className="news-item">
                <div className="image-wrapper">
                  <img className="picture" src="https://techasiamechatronics.com/wp-content/uploads/2019/03/information-security-threat_primary4-100715432-large-150x150.jpg" alt="Nokia 7 Plus" />
                </div>
                <div className="news-details">
                  <p>Nokia 7 Plus sending personal data, unencrypted to Chinese server (vnet.cn)</p>
                  <span>March 22, 2019</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
        
      </div>
      <Footer />
    </main>
  );
}

export default TechBlog;
