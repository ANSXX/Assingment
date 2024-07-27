// src/components/ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';


const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.year),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
