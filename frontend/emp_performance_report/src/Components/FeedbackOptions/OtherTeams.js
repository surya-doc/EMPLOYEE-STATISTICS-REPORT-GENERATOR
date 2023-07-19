import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import MentorFeedbackMembersCard from '../Cards/MentorFeedbackMembersCard';
import { useLocation } from 'react-router';

function OtherTeams() {

  const[employees, setEmployees] = useState([]);
  const[mentor, setMentor] = useState();

  const mentorId = localStorage.getItem('id');

  const location = useLocation();
  console.log(location);
  
  async function getMentorDetails(){
    try {
      const mentorDetails = await axios.get(backend_url+'/mentors/'+location.state.mentorid);
      console.log(mentorDetails);
      setMentor(mentorDetails.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTeamDetails(){
    console.log("********************")
    try {
      const teamDetails = await axios.get(backend_url+'/employeeDetail/byteam/'+location.state.teamid);
      console.log(teamDetails);
      setEmployees(teamDetails.data);
      getMentorDetails();
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getTeamDetails();
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

export default OtherTeams