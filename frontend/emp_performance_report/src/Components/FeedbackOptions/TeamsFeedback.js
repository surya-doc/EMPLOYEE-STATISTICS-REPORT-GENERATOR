import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router'
import HrFeedbackCard from '../Cards/HrFeedbackCard';
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

  
  
  function TeamsFeedback() {
    const[employees, setEmployees] = useState([]);

    const location = useLocation();
    console.log(location);

    async function getTeamMembers(){
      try {
        const res = await axios.get(backend_url+'/employeeDetail/byteam/'+location.state.teamid+'/member');
        console.log(res);
        if(res.status === 200){
          for(let i=0; i<res.data.length; i++){
            console.log(res.data[i]);
            const employee = await axios.get(backend_url+'/employee/'+res.data[i].empid);
            console.log(employee);
            res.data[i].name = employee.data.name;
          }
          setEmployees(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getTeamMembers();
    }, [])

  return (
    <div>
        <Navbar />
        <div className="teamdetails flex flex-col items-center pt-6 pb-4">
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>{location.state.teamid}</span></div>
            <div className="teammentor font-semibold">Team mentor id: <span className='text-base text-[#A62868] uppercase pl-4'>{location.state.mentorid}</span></div>
            <div className="teamid font-semibold">Team description: <span className='text-base text-[#A62868] pl-4'>{location.state.team_description}</span></div>
        </div>
        <div className='divider bg-[#A5B8CF] min-h-[1px] min-w-[80%] max-w-[80%] mx-auto mt-4 mb-4' style={{backgroundColor: "#A62868"}}></div>
        <div className="members flex flex-col items-center">
            {
                employees.map((emp) => {
                    return <div>
                        <HrFeedbackCard employee={emp} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default TeamsFeedback