import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({total, present}) {
      
      const data = {
        datasets: [{
          data: [present, total-present, total],
          backgroundColor: ['#671940', '#e698c0', '#E3E2E3'],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          cutout: 70,
        }],
        labels: ['Present', 'Absent', 'total'],        
      };
  return (
    <div className='w-8/12 mx-auto'>
        <h1 className='text-lg py-2 text-center'>Employee attendence</h1>
        <Doughnut 
            data={data}
            options={{
            responsive: true,
            aspectRatio: 1
            }}
        />
    </div>
  )
}

export default DoughnutChart