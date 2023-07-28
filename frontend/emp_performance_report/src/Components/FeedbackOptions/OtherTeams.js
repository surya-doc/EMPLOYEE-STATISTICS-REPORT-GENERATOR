import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import MentorFeedbackMembersCard from '../Cards/MentorFeedbackMembersCard';
import { useLocation } from 'react-router';

function OtherTeams() {

  const[employees, setEmployees] = useState([]);
  const[mentor, setMentor] = useState();
  const[team, setTeam] = useState();

  const mentorId = localStorage.getItem('id');

  const token = localStorage.getItem("token");

  const location = useLocation();
  
  async function getMentorDetails(){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byteam/'+location.state.teamid+'/mentor', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if(res.status === 200){
        for(let i=0; i<res.data.length; i++){
          const employee = await axios.get(backend_url+'/employee/'+res.data[0].empid, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          });
          res.data[i].name = employee.data.name;
        }
      }
      setMentor(res?.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTeamDetails(){
    try {
      const teamDetails = await axios.get(backend_url+'/team/'+location.state.teamid, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      setTeam(teamDetails.data);
      getMentorDetails();
    } catch (error) {
      console.log(error);
    }
  }

  async function getTeamEmployees(){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byteam/'+location.state.teamid+'/member', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if(res.status === 200){
        for(let i=0; i<res.data.length; i++){
          const employee = await axios.get(backend_url+'/employee/'+res.data[i].empid, {
            headers: {
              'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
              'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
            }
          });
          res.data[i].name = employee.data.name;
        }
      }
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getTeamDetails();
    getTeamEmployees();
  }, [])

  return (
    <div>
      <Navbar />
        <div className="teamdetails flex flex-col items-center pt-6 pb-4">
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>{mentor?.teamid}</span></div>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>{mentor?.name}</span></div>
            <div className="teammentor font-semibold text-[#A62868] text-2xl border-[1px] px-8 py-2 rounded-md my-8">{team?.team_description}</div>
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