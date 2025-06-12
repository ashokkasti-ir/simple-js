import React, { useState, useEffect } from 'react';

export default function ApiExample() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newItemName, setNewItemName] = useState('');

  // Fetch items from the Express API
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('http://localhost:3001/api/items');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching items:', e);
        setError('Failed to fetch items. Make sure your Express API is running.');
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  // Handle form submission to add a new item
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    try {
      const response = await fetch('http://localhost:3001/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newItemName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert(result.message);
      setNewItemName('');
      
      // Refresh the items list
      const itemsResponse = await fetch('http://localhost:3001/api/items');
      const itemsData = await itemsResponse.json();
      setItems(itemsData);
    } catch (e) {
      console.error('Error adding item:', e);
      setError('Failed to add item. Make sure your Express API is running.');
    }
  };

  return (
    <div className="container">
      <main>
        <h1>API Example</h1>
        <p>This page demonstrates fetching data from your Express API</p>

        <div className="card">
          <h2>Add New Item</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter item name"
              required
            />
            <button type="submit">Add Item</button>
          </form>
        </div>

        <div className="card">
          <h2>Items from API</h2>
          {loading ? (
            <p>Loading items...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>

        <a href="/" className="back-link">
          &larr; Back to Home
        </a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 800px;
        }

        h1 {
          margin: 0 0 1rem 0;
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
        }

        h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        p {
          text-align: center;
          line-height: 1.5;
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }

        .card {
          margin: 1rem 0;
          width: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        form {
          display: flex;
          margin-top: 1rem;
        }

        input {
          flex-grow: 1;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px 0 0 4px;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }

        button:hover {
          background-color: #0051a2;
        }

        ul {
          width: 100%;
          padding-left: 1.5rem;
        }

        li {
          margin: 0.5rem 0;
          font-size: 1.1rem;
        }

        .error {
          color: #d32f2f;
          font-weight: bold;
        }

        .back-link {
          margin-top: 2rem;
          color: #0070f3;
          text-decoration: none;
          font-size: 1.1rem;
        }

        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}