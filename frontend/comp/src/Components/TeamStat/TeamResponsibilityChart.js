import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function TeamResponsibilityChart({responsibility, workload, teamLabels}) {
   const data = {
        labels: teamLabels,
        datasets: [
          {
            label: 'responsibility',
            data: responsibility,
            borderColor: '#a60d44',
            backgroundColor: '#fab8d0',
          },
          {
            label: 'Workload',
            data: workload,
            borderColor: '#0b49a8',
            backgroundColor: '#b7d2fa',
          }
        ],
      };
    
      // Options to customize the chart appearance (replace with your desired options)
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        },
      };
      return (
        <div className='px-16'>
            <h1>Responsibility and Workload</h1>
          <Line data={data} options={options} />
        </div>
      );
}

export default TeamResponsibilityChart