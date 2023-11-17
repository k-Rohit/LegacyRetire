import React, { useState } from 'react';
import './Operation.css';
import Plot from 'react-plotly.js';

const calculateResult = (data) => {
  // Define your calculation logic based on the data
  // This is a placeholder, replace it with your actual calculation
  return Object.values(data).reduce((acc, val) => acc + val, 0);
};

const findBestStock = (finalData) => {
  let bestStock = null;
  let highestResult = -Infinity;

  finalData.forEach((data, index) => {
    const result = calculateResult(data);
    if (result > highestResult) {
      bestStock = index + 1;
      highestResult = result;
    }
  });

  return bestStock;
};

const Operation = () => {
  const [numStocks, setNumStocks] = useState(0);
  const [stocks, setStocks] = useState([]);
  const [plotClicked, setPlotClicked] = useState(false);
  const [finalData, setFinalData] = useState([]);

  const handleNumStocks = (e) => {
    e.preventDefault();
    setNumStocks(parseInt(e.target.value));
  };

  const handleStockName = (e, index) => {
    const updatedStocks = [...stocks];
    updatedStocks[index] = e.target.value;
    setStocks(updatedStocks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchStockData = (stockName) => {
      return fetch(`http://127.0.0.1:5000/api/${stockName}`)
        .then(response => response.json())
        .catch(error => {
          console.error(`Error fetching data for ${stockName}:`, error);
          return {};
        });
    };

    const promises = stocks.slice(0, numStocks).map(stockName => fetchStockData(stockName));

    Promise.all(promises)
      .then(dataList => {
        const updatedFinalData = [...finalData, ...dataList];
        setFinalData(updatedFinalData);
      });
  };

  const handlePlotGraph = () => {
    setPlotClicked(true);
  };

  const calculateResult = (data) => {
    // Define your calculation logic based on the data
    // This is a placeholder, replace it with your actual calculation
    return Object.values(data).reduce((acc, val) => acc + val, 0);
  };

  const bestStock = findBestStock(finalData);

  return (
    <div className="operation-container">
      <h1 className="operation-heading">Stock Recommender</h1>
      <form onSubmit={handleSubmit} className="operation-form">
        <input
          type="number"
          value={numStocks}
          onChange={handleNumStocks}
          placeholder="Enter number of stocks"
          className="operation-input"
        />
        {Array.from({ length: numStocks }).map((_, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={stocks[index] || ''}
              onChange={(e) => handleStockName(e, index)}
              placeholder={`Enter stock ${index + 1} name`}
              className="operation-input"
            />
          </div>
        ))}
        <button type="submit" className="operation-button">Submit</button>
      </form>
      {finalData.map((data, index) => (
        <div key={index} className="result-box">
          {Object.keys(data).map(key => (
            <div key={key} style={{ marginBottom: '10px' }}>
              <strong style={{ backgroundImage: 'linear-gradient(to right, #0091ff, #FF6347)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                {key}:
              </strong> {data[key]}
            </div>
          ))}
          {bestStock === index + 1 && (
            <div className="best-stock-message">
              This is currently the best stock!
            </div>
          )}
        </div>
      ))}
      {finalData.length > 0 && (
        <button className="plot-button" onClick={handlePlotGraph}>
          Plot Graph
        </button>
      )}
      {plotClicked && finalData.length > 0 && (
        <div className="plot-container">
          <h2 className="plot-heading">Stock Data</h2>
          <div className="plot-graph">
            <Plot
              data={finalData.map((data, index) => ({
                x: Object.keys(data),
                y: Object.values(data),
                type: 'bar',
                marker: {color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
                name: stocks[index] || `Stock ${index + 1}`,
              }))}
              layout={ {title: 'Stock Data'} }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Operation;
