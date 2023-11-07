import { useState } from 'react';

function Operation() {
  const [stockName, setStockName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5000/api/${stockName}`)
      .then(response => response.json())
      .then(data => setMessage(JSON.stringify(data, null, 2)))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
          placeholder="Enter stock name"
        />
        <button type="submit">Submit</button>
      </form>
      <pre>{message}</pre>
    </div>
  );
}

export default Operation;
