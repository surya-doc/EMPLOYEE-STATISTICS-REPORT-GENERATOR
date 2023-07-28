import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import PeerFeedbackEmployeesCard from '../Cards/PeerFeedbackEmployeesCard'
import MentorFeedbackMembersCard from '../Cards/MentorFeedbackMembersCard';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

function MentorTeamFeedback() {
  const[employees, setEmployees] = useState([]);
  const[mentor, setMentor] = useState();

  const mentorId = localStorage.getItem('id');

  const token = localStorage.getItem("token");

  async function getTeamDetails(teamid){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byteam/'+teamid+'/member', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if(res.status === 200){
        for(let i=0; i<res.data.length; i++){
          const employee = await axios.get(backend_url+'/employee/'+res.data[i].empid, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          });
          res.data[i].name = employee.data.name;
        }
      }
      setEmployees(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  async function getMentorDetails(){
    try {

      const res = await axios.get(backend_url+'/employeeDetail/'+mentorId, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if(res.status === 200){
        for(let i=0; i<res.data.length; i++){
          const employee = await axios.get(backend_url+'/employee/'+mentorId, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          });
          res.data[i].name = employee.data.name;
        }
      }
      setMentor(res.data);
      getTeamDetails(res.data.teamid);
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
        <div className=" min-w-[80%] max-w-[80%] mx-auto pl-2 pt-8">
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