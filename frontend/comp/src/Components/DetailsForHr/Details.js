import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BiSolidUser } from 'react-icons/bi'
import { FaUserTie } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { useNavigate } from 'react-router'

function Details() {
  const navigate = useNavigate();
  return (
    <div className="manage">
        <Navbar />
        <div className="manageoptions flex gap-8 items-center justify-center min-h-[92vh]">
            <div className="outer bg-[#d3adc0] p-2 transition delay-150 duration-300 ease-in-out hover:scale-105">
                <div className='teammember bg-[#a62868] flex items-center py-2 px-6 text-[#e8c9d9] gap-4 cursor-pointer' onClick={() => navigate('/hr/employees')}>
                    <BiSolidUser className='text-4xl' />
                    Employees
                </div>
            </div>
            <div className="outer bg-[#d3adc0] p-2 transition delay-150 duration-300 ease-in-out hover:scale-105">
                <div className='teammentor bg-[#a62868] flex items-center py-2 px-6 text-[#e8c9d9] gap-4 cursor-pointer'onClick={() => navigate('/hr/mentordetails')}>
                    <FaUserTie className='text-4xl' />
                    Team Mentors
                </div>
            </div>
            <div className="outer bg-[#d3adc0] p-2 transition delay-150 duration-300 ease-in-out hover:scale-105">
                <div className='team bg-[#a62868] flex items-center py-2 px-6 text-[#e8c9d9] gap-4 cursor-pointer' onClick={() => navigate('/hr/teamdetails')}>
                    <RiTeamFill  className='text-4xl'/>
                    Teams
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details