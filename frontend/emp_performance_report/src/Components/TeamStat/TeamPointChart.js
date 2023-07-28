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
function TeamPointChart({deadline, extrawork, teamLabels, extraactivity}) {
    const data = {
        labels: teamLabels,
        datasets: [
          {
            label: 'Deadline',
            data: deadline,
            borderColor: '#d2468d',
            backgroundColor: '#f0c1d9',
          },
          {
            label: 'Extra activity',
            data: extraactivity,
            borderColor: '#822abc',
            backgroundColor: '#dec0f1',
          },
          {
            label: 'Extra work',
            data: extrawork,
            borderColor: '#217e91',
            backgroundColor: '#c1e8f1',
          }
        ],
      };
    
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
            <h1>Deadline, Extra work and Extra activity</h1>
          <Line data={data} options={options} />
        </div>
      );
    };

export default TeamPointChart