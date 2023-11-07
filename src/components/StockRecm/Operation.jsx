// import { useState } from 'react';

// function Operation() {
//   const [stockName, setStockName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://127.0.0.1:5000/api/${stockName}`)
//       .then(response => response.json())
//       .then(data => setMessage(JSON.stringify(data, null, 2)))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={stockName}
//           onChange={(e) => setStockName(e.target.value)}
//           placeholder="Enter stock name"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <pre>{message}</pre>
//     </div>
//   );
// }

// export default Operation;





import { useState } from 'react';
import './Operation.css';

function Operation() {
  const [stockName, setStockName] = useState('');
  const [message, setMessage] = useState('');
  const [recommendationMessage, setRecommendationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5000/api/${stockName}`)
      .then(response => response.json())
      .then(data => {
        const formattedMessage = Object.keys(data).map(key => (
          <div key={key}>
            <strong style={{backgroundImage: 'linear-gradient(to right, #0091ff, #FF6347)', WebkitBackgroundClip: 'text', color: 'transparent'}}>
              {key}:
            </strong> {data[key]}
          </div>
        ));
        setMessage(formattedMessage);

        // Set recommendation message
        const recommendationMessage = getRecommendationMessage(data.Recommendation);
        setRecommendationMessage(recommendationMessage);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const getRecommendationMessage = (recommendation) => {
    switch (recommendation) {
      case 'Hold':
        return 'You should hold the stock.';
      case 'Sell':
        return 'You should sell the stock.';
      case 'Buy':
        return 'You should buy the stock.';
      default:
        return '';
    }
  };

  const handlePlotGraph = () => {
    // Implement the code to plot the graph here
    console.log('Plotting graph...');
  };

  return (
    <div className="operation-container">
      <h1 className="operation-heading">Stock Recommender</h1>
      <form onSubmit={handleSubmit} className="operation-form">
        <input
          type="text"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
          placeholder="Enter stock name"
          className="operation-input"
        />
        <button type="submit" className="operation-button">Submit</button>
      </form>
      <div className="result-box">
        <pre className="operation-message">{message}</pre>
      </div>
      <div className="recommendation-message">{recommendationMessage}</div>
      {recommendationMessage && (
        <button className="plot-button" onClick={handlePlotGraph}>
          Plot Graph
        </button>
      )}
    </div>
  );
}

export default Operation;





