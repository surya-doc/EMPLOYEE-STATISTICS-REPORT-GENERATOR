import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({
    behaviour,
    communication,
    deadline,
    extrawork,
    responsibility,
    workload
}) {
    const data = {
        labels: ['behaviour', 'communication', 'deadline', 'extrawork', 'responsibility', 'workload'],
        datasets: [
          {
            label: '',
            data: [behaviour, communication, deadline, extrawork, responsibility, workload],
            backgroundColor: [
              '#faeaf2',
              '#f0c1d9',
              '#e698c0',
              '#dc6fa7',
              '#d2468d',
              '#b92d74',
            ],
            borderColor: [
              'rgba(0,0,0,1)'
            ],
            borderWidth: 1,
          },
        ],
    };

  return (
    <div className='w-8/12 mx-auto'>
        <h1 className='text-lg py-2 text-center'>Employee details</h1>
        <Pie data={data} />
    </div>
  )
}

export default PieChart