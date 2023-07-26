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
function WorkChart({behaviour, communication, teamLabels}) {
    // deadline = deadline.push(0);
    // Sample data for the chart (replace with your actual data)
    console.log(behaviour, communication);
    const data = {
        labels: teamLabels,
        datasets: [
          {
            label: 'Behaviour',
            data: behaviour,
            borderColor: '#b07f03',
            backgroundColor: '#fee9b4',
          },
          {
            label: 'Communication',
            data: communication,
            borderColor: '#179b70',
            backgroundColor: '#bdf5e2',
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
            <h1>Behaviour and Communication</h1>
          <Line data={data} options={options} />
        </div>
      );
    };

export default WorkChart