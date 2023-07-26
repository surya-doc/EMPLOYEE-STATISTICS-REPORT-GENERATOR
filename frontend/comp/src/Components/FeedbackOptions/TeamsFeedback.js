import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router'
import HrFeedbackCard from '../Cards/HrFeedbackCard';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import TeamStat from '../TeamStat/TeamStat';

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
    const[mentorDetails, setMentorDetails] = useState();
    const[tab, setTab] = useState('stats');

    const location = useLocation();
    console.log(location);

    const token = localStorage.getItem("token");

    async function getTeamMembers(){
      try {
        const res = await axios.get(backend_url+'/employeeDetail/byteam/'+location.state.teamid+'/member', {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
          }
        });
        console.log(res);
        if(res.status === 200){
          for(let i=0; i<res.data.length; i++){
            console.log(res.data[i]);
            const employee = await axios.get(backend_url+'/employee/'+res.data[i].empid, {
              headers: {
                'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
                'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
              }
            });
            console.log(employee);
            res.data[i].name = employee.data.name;
          }
          setEmployees(res.data);
        }
        const mentorDetail = await axios.get(backend_url+'/employeeDetail/'+location.state.mentorid, {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
          }
        });
        const mentorName = await axios.get(backend_url+'/employee/'+location.state.mentorid, {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
          }
        });
        console.log(mentorName);
        mentorDetail.data.name = mentorName.data.name;
        console.log(mentorDetail);
        setMentorDetails(mentorDetail.data);
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
        <div className="teamdetails flex items-center pt-6 pb-4 justify-center gap-16">
          <div className=''>
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>{location.state.teamid}</span></div>
            <div className="teammentor font-semibold">Team mentor id: <span className='text-base text-[#A62868] uppercase pl-4'>{location.state.mentorid}</span></div>
          </div>
          <div className=''>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>{mentorDetails?.name}</span></div>
            <div className="teammentor font-semibold">Mentor email: <span className='text-base text-[#A62868] pl-4'>{mentorDetails?.email}</span></div>
          </div>
        </div>
        <div className="teamid font-semibold text-lg bg-[#e4bed1] border-[1px] border-[#A62868] text-[#A62868] py-2 px-4 rounded-sm w-48 text-center mx-auto">{location.state.team_description}</div>
        <div className="tabs flex items-center gap-4 min-w-[80%] max-w-[80%] mx-auto pl-4">
          <div className={`teamstat cursor-pointer hover:text-[#A62868] font-semibold ${tab === "members" ? 'text-[#000000]' : 'text-[#A62868]'}`} style={{letterSpacing: "1px"}} onClick={() => setTab("stats")}>Statistics</div>
          <div className={`memberstab cursor-pointer hover:text-[#A62868] font-semibold ${tab === "members" ? 'text-[#A62868]' : 'text-[#000000]'}`} style={{letterSpacing: "1px"}} onClick={() => setTab("members")}>Members</div>
        </div>
        <div className='divider bg-[#A5B8CF] min-h-[1px] min-w-[80%] max-w-[80%] mx-auto mt-4 mb-4' style={{backgroundColor: "#A62868"}}></div>
        {
          tab === 'members' ? 
          <div className="members flex flex-col items-center">
              {
                  employees.map((emp) => {
                      return <div>
                          <HrFeedbackCard employee={emp} team={location.state} />
                      </div>
                  })
              }
          </div>
          :
          <div className='teamstat'>
            <TeamStat team={location.state} />
          </div>
        }
    </div>
  )
}

export default TeamsFeedback