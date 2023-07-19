import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import PeerFeedbackEmployeesCard from '../Cards/PeerFeedbackEmployeesCard'
import MentorFeedbackMembersCard from '../Cards/MentorFeedbackMembersCard';
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

function MentorTeamFeedback() {
  const[employees, setEmployees] = useState([]);
  const[mentor, setMentor] = useState();

  const mentorId = localStorage.getItem('id');

  async function getTeamDetails(teamid){
    console.log("********************")
    try {
      const teamDetails = await axios.get(backend_url+'/employeeDetail/byteam/'+teamid);
      console.log(teamDetails);
      setEmployees(teamDetails.data)
    } catch (error) {
      console.log(error);
    }
  }

  async function getMentorDetails(){
    try {
      const mentorDetails = await axios.get(backend_url+'/mentors/'+mentorId);
      console.log(mentorDetails);
      setMentor(mentorDetails.data);
      getTeamDetails(mentorDetails.data.teamid);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMentorDetails();
  }, [])

  return (
    <div>
        <Navbar />
        <div className="teamdetails flex flex-col items-center pt-6 pb-4">
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>{mentor?.teamid}</span></div>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>{mentor?.name}</span></div>
        </div>
        <div className=" min-w-[80%] max-w-[80%] mx-auto pl-2">
            <h2 className="text-left text-lg font-semibold">Team Members</h2>
        </div>
        <div className='divider bg-divider min-h-[1px] min-w-[80%] max-w-[80%] mx-auto mt-4 mb-4'></div>
        <div className="members flex flex-col items-center">
            {
                employees?.map((emp) => {
                    return <div>
                        <MentorFeedbackMembersCard employee={emp} type={'team'} mentor={mentor}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default MentorTeamFeedback