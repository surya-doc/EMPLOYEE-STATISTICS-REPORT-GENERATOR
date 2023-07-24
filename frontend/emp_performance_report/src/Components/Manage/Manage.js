import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaUserTie } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { useNavigate } from 'react-router';

function Manage() {
    const navigate = useNavigate();
  return (
    <div className="manage">
        <Navbar />
        <div className="manageoptions flex gap-8 items-center justify-center min-h-[92vh]">
            <div className="outer bg-[#d3adc0] p-2 transition delay-150 duration-300 ease-in-out hover:scale-105">
                <div className='teammember bg-[#a62868] flex items-center py-2 px-6 text-[#e8c9d9] gap-4 cursor-pointer' onClick={() => navigate('/manage/createemployee')}>
                    <BiSolidUser className='text-4xl' />
                    Create Employee
                </div>
            </div>
            <div className="outer bg-[#d3adc0] p-2 transition delay-150 duration-300 ease-in-out hover:scale-105">
                <div className='teammentor bg-[#a62868] flex items-center py-2 px-6 text-[#e8c9d9] gap-4 cursor-pointer'onClick={() => navigate('/manage/employeedetail')}>
                    <FaUserTie className='text-4xl' />
                    Add Employee Detail
                </div>
            </div>
            <div className="outer bg-[#d3adc0] p-2 transition delay-150 duration-300 ease-in-out hover:scale-105">
                <div className='team bg-[#a62868] flex items-center py-2 px-6 text-[#e8c9d9] gap-4 cursor-pointer' onClick={() => navigate('/manage/createteam')}>
                    <RiTeamFill  className='text-4xl'/>
                    Create Team
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manage