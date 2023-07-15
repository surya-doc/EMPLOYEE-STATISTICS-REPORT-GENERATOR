import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useNavigate } from 'react-router';

function Navbar() {
  const[stat, setStat] = useState(false);

  const navigate = useNavigate();

  function checkFeedbacker(){
    const type = localStorage.getItem('feedbacker');
    console.log("type");
    if(type === "member"){
      navigate("/peerfeedback");
    }
    else if(type === "mentor"){
      navigate("/mentorfeedback")
    }
    else{
      navigate("/hrfeedback");
    }
  }

  return (
    <div className='navbar flex justify-between py-4 px-8 shadow-lg'>
      <div className='left text-xl cursor-pointer' onClick={() => navigate('/')}>StatMaster</div>
      <div className='right flex items-center gap-6'>
        <div className='login bg-[#A62868] px-4 py-1 rounded-sm text-[#FFF] cursor-pointer' onClick={() => navigate('/login')}>
          Login
        </div>
        <div className='signup relative'>
          <div className=' border-[1px] border-[#A62868] gap-2 px-4 py-1 rounded-sm cursor-pointer flex items-center justify-between' onClick={() => setStat(!stat)}>
            <p>Signup</p>
            <MdKeyboardArrowDown />
          </div>
          <div className={`signupoptions absolute ${stat ? 'block' : 'hidden'} top-9 -left-6 text-sm bg-[#FFF] w-40 shadow-md`}>
            <div className='py-2 border-b-[1px] hover:bg-[#F3F3F3] px-2 cursor-pointer' onClick={() => navigate('/signup/employee')}>Signup as team member</div>
            <div className='py-2 border-b-[1px] hover:bg-[#F3F3F3] px-2 cursor-pointer' onClick={() => navigate('/signup/mentor')}>Signup as team mentor</div>
            <div className='py-2 hover:bg-[#F3F3F3] px-2 cursor-pointer' onClick={() => navigate('/signup/hr')}>Signup as HR</div>
          </div>
        </div>
        <div className='feedback cursor-pointer hover:text-[#A62868]' onClick={() => checkFeedbacker()}>
          Feedback
        </div>
      </div>
    </div>
  )
}

export default Navbar