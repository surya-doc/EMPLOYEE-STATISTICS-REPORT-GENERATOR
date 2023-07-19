import React, { useEffect, useState } from 'react'
import PeerFeedbackEmployeesCard from '../Cards/PeerFeedbackEmployeesCard';
import Navbar from '../Navbar/Navbar';
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

function PeerFeedbackOptions() {
  const[employees, setEmployees] = useState([]);
  const[employee, setEmployee] = useState();
  const[team, setTeam] = useState();
  const empId = localStorage.getItem('id');

  async function getTeamDetails(){
    let empDetails = '';
    try {
      empDetails = await axios.get(backend_url+'/employeeDetail/'+empId);
      console.log(empDetails, empDetails.data.teamid);
      setEmployee(empDetails.data);
    } catch (error) {
      alert("Something went wrong!!");
    }
    try {
      const teamDetails = await axios.get(backend_url+'/mentors/byteam/'+empDetails.data.teamid);
      console.log(teamDetails);
      setTeam(teamDetails);
    } catch (error) {
      alert("Something went wrong!!");
    }
    try {
      const teamDetails = await axios.get(backend_url+'/employeeDetail/byteam/'+empDetails.data.teamid);
      console.log(teamDetails);
      setEmployees(teamDetails.data)
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
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>1</span></div>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>{team?.data.name}</span></div>
        </div>
        <div className="members flex flex-col items-center">
            {
                employees?.map((emp) => {
                    return employee.empid !== emp.empid ?<div>
                        <PeerFeedbackEmployeesCard employee={emp} feedbacker={employee}/>
                    </div> : 
                    // console.log(emp, employee)
                    console.log("You.")
                })
            }
        </div>
    </div>
  )
}

export default PeerFeedbackOptions