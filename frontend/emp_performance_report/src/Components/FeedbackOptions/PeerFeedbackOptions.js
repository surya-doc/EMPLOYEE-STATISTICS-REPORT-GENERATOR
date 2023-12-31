import React, { useEffect, useState } from 'react'
import PeerFeedbackEmployeesCard from '../Cards/PeerFeedbackEmployeesCard';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

function PeerFeedbackOptions() {
  const[employees, setEmployees] = useState([]);
  const[employee, setEmployee] = useState();
  const[team, setTeam] = useState();
  const[teamDetails, setTeamDetails] = useState();

  const empId = localStorage.getItem('id');

  const token = localStorage.getItem("token");

  async function getTeamDetails(){
    let empDetails = '';
    try {
      empDetails = await axios.get(backend_url+'/employeeDetail/'+empId, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        }
      });
      setEmployee(empDetails.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byteam/'+empDetails.data.teamid+'/member', {
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
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byteam/'+empDetails.data.teamid+'/mentor', {
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
      setTeam(res.data[0]);
    } catch (error) {
      console.log(error);
    }
    try {
      const teamDetails = await axios.get(backend_url+'/team/'+empDetails.data.teamid, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        }
      });
      setTeamDetails(teamDetails.data)
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
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>{team?.teamid}</span></div>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>{team?.name}</span></div>
            <div className="teammentor font-semibold text-[#A62868] text-2xl border-[1px] px-8 py-2 rounded-md my-8">{teamDetails?.team_description}</div>
        </div>
        <div className='divider bg-divider min-h-[1px] min-w-[80%] max-w-[86%] mx-auto mt-4 mb-4'></div>
        <div className="members flex flex-col items-center">
            {
                employees?.map((emp) => {
                    return employee.empid !== emp.empid ?<div>
                        <PeerFeedbackEmployeesCard employee={emp} feedbacker={employee}/>
                    </div> : 
                    console.log("You.", team)
                })
            }
        </div>
    </div>
  )
}

export default PeerFeedbackOptions