import React from 'react'
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function TeamBarchart({teamData, teamLabels}) {
    // console.log(teamData, teamLabels);
    const state = {
      labels: teamLabels,
      datasets: [
        {
          label: 'Ratings',
          backgroundColor: '#e698c0',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: teamData
        }
      ]
    }
  return (
    <div className='px-16'>
      <h1>Overall Percentile</h1>
      <Bar
        data={state}
        options={{
          title:{
            display:true,
            text:'',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
}

export default TeamBarchart