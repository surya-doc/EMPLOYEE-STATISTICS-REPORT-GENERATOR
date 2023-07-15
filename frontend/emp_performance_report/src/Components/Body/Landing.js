import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Landing.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import EmployeeCard from '../Cards/EmployeeCard';

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

function Landing() {
  return (
    <div className='landing'>
        <Navbar />
        <div className='body flex justify-center px-16 pt-20 items-center gap-32'>
            <div className="left w-6/12 text-[3.2rem] border-b-1">
                <h1 className="text-[3.2rem] border-b-1" style={{fontFamily: "sans-serif"}}>Smarter Workforce Management through Statistics</h1>
                <p className='text-lg pt-6' style={{letterSpacing: "2px"}}>Empower Your Workforce with Dynamic Employee Statistics Reports!</p>
            </div>
            <div className="right w-4/12">
                <img src="./landing.svg" alt="" />
            </div>
        </div>
        <div className='divider bg-divider min-h-[1px] min-w-[80%] max-w-[80%] mx-auto mt-16 mb-4'></div>
        <div className='bg-[#E4BED1] mx-auto w-8 h-8 flex justify-center items-center rounded-full p-2 animate-bounce'>
          <a className='bg-[#D191B1] w-6 h-6 flex justify-center items-center rounded-full p-1' href="#employee">
            <MdKeyboardDoubleArrowDown className='color-[#A62868] text-[#A62868] font-bold'  />
          </a>
        </div>
        <div className="topEmployees mt-16">
          <div className='flex items-center justify-center'>
            <img className='w-16 h-16' src="./champ_cup.png" alt="" />
            <h1 className='text-[#A62868] text-3xl text-center py-8 font-bold' >Employees of the month</h1>
            <img className='w-16 h-16' src="./champ_cup.png" alt="" />
          </div>
          <div className="bg-[#E6E6E6] min-h-[2px] min-w-[40%] max-w-[40%] mx-auto mb-4"></div>
          <div className="employees flex flex-col items-center" id='employee'>
            {
              employees.map((emp) => {
                return <div>
                  <EmployeeCard employee={emp} />
                </div>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Landing