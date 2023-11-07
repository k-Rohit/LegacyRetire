import React, { useEffect } from 'react';
import Plotly from 'plotly.js';

function Graph({ data }) {
  useEffect(() => {
    const trace = {
      x: Object.keys(data),
      y: Object.values(data),
      mode: 'lines+markers',
      type: 'scatter',
    };

    const layout = {
      title: 'Stock Data',
      xaxis: {
        title: 'Metrics',
      },
      yaxis: {
        title: 'Values',
      },
    };

    const config = {
      responsive: true,
    };

    Plotly.newPlot('graph', [trace], layout, config);

    return () => {
      Plotly.purge('graph');
    };
  }, [data]);

  return <div id="graph" />;
}

export default Graph;
