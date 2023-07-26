import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router'

function MentorFeedbackOptions() {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar />
        <div className='flex items-center justify-center py-16'>
            <div className='bg-[#A62868] py-8 px-8 m-4 text-[#FFF] text-lg font-semibold transition delay-150 duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer' onClick={() => navigate('/mentorfeedback/team')}>Your Team</div>
            <div className='bg-[#A62868] py-8 px-8 m-4 text-[#FFF] text-lg font-semibold transition delay-150 duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer' onClick={() => navigate('/mentorfeedback/crossteam')}>Other Teams</div>
        </div>
    </div>
  )
}

export default MentorFeedbackOptions