import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    const intensityData = {
        labels: data.map(d => d.country),
        datasets: [
            {
                label: 'Intensity',
                data: data.map(d => d.intensity),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="App">
            <h1>Data Visualization Dashboard</h1>
            <div className="chart-container">
                <Bar data={intensityData} options={{ responsive: true }} />
            </div>
        </div>
    );
}

export default App;
