import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import PeerFeedbackEmployeesCard from '../Cards/PeerFeedbackEmployeesCard';
import HrFeedbackCard from '../Cards/HrFeedbackCard';
import TeamsCard from '../Cards/TeamsCard';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

var employees = [
    {
      empid: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      status: true,
      attendance: 90,
      teamid: 1
    },
    {
      empid: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "password456",
      status: true,
      attendance: 95,
      teamid: 1
    },
    {
      empid: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      password: "password789",
      status: true,
      attendance: 85,
      teamid: 2
    }
  ];

  const teams = [
    {
      teamid: 2,
      mentorid: 6,
      team_description: "first team"
    },
    {
      teamid: 4,
      mentorid: 8,
      team_description: "second team"
    }
  ]

function HrFeedbackOptions() {
  const[teams, setTeams] = useState([]);

  async function getTeams(){
    try {
      const res = await axios.get(backend_url+'/team/');
      console.log(res);
      setTeams(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTeams();
  }, [])

  return (
    <div>
        <Navbar />
        {/* <div className="teamdetails flex flex-col items-center pt-6 pb-4">
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>1</span></div>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>abcd</span></div>
        </div> */}
        <h1 className='min-w-[80%] max-w-[80%] mx-auto pt-8 text-xl font-bold'>Teams</h1>
        <div className='divider bg-[#A5B8CF] min-h-[1px] min-w-[80%] max-w-[80%] mx-auto mt-4 mb-4' style={{backgroundColor: "#A5B8CF"}}></div>

        <div className="teamproperties flex max-w-[78%] mx-auto bg-[#3e0f27] py-1 text-[#FFF]">
          <h4 className='w-1/4 text-center'>Team Id</h4>
          <h4 className='w-1/4 text-center'>Mentor Id</h4>
          <h4 className='w-2/4 text-center'>Team Description</h4>
        </div>

        <div className="members max-w-[78%] mx-auto">
            {
                teams.map((team, index) => {
                    return (
                      team.teamid === 1 ?
                      null :
                    <div key={index+1}>
                        <TeamsCard team={team} />
                    </div>
                    )
                    
                })
            }
        </div>
    </div>
  )
}

export default HrFeedbackOptions