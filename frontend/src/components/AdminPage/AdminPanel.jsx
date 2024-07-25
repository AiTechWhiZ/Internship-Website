import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import '../../styles/AdminPanel.css';
import axios from 'axios';

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);
  const [dbcs, setDbcs] = useState([]);

  useEffect(() => {
    // Fetch contacts
    axios.get('http://localhost:3001/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });

    // Fetch digital business cards
    axios.get('http://localhost:3001/dbcs')
      .then(response => {
        setDbcs(response.data);
      })
      .catch(error => {
        console.error('Error fetching digital business cards:', error);
      });
  }, []);

  return (
    <div className="admin-panel">
      <AdminHeader />
      <div className="admin-content">
        <AdminSidebar />
        <div className="admin-main">
          <h1>Welcome Back Priyesh!</h1>
          <div className="section">
            <h2>Contact Messages</h2>
            <ul>
              {contacts.map(contact => (
                <li key={contact._id}>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Phone:</strong> {contact.phone}</p>
                  <p><strong>Message:</strong> {contact.message}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="section">
            <h2>Digital Business Cards</h2>
            <ul>
              {dbcs.map(card => (
                <li key={card._id}>
                  <p><strong>Name: </strong>  {card.fullname}</p>
                  <p><strong>Contact No:</strong> {card.contactno}</p>
                  <p><strong>Email:</strong> {card.email}</p>
                  <p><strong>URL:</strong> {card.url}</p>
                  <p><strong>Address:</strong> {card.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
