import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

function MentorSignup() {
  const[password1, setPassword1] = useState(false);
  const[password2, setPassword2] = useState(false);

  return (
    <div className="mentorsignup">
      <Navbar />
        <div className='flex justify-center items-center min-h-[94vh] flex-col'>
            <h1 className='pb-4 text-xl'>Signup for team Mentor</h1>
            <form className='flex flex-col rounded-md p-4 bg-[#FFF] shadow-lg py-8'>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter email'/>
                </div>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="text" style={{outline: "none"}} placeholder='enter hr id'/>
                </div>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="text" style={{outline: "none"}} placeholder='enter team id'/>
                </div>
                <div className='flex border-b-[1px] pb-2 my-4' >
                <div className='flex items-center gap-2 w-full'>
                    <input className='w-full' style={{outline: "none"}} required type={`${password1 ? 'text' : 'password'}`} placeholder="Enter password" />
                </div>
                <div className='password_visibility text-2xl' onClick={() => setPassword1(!password1)}>
                {
                    password1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                }
                </div>
                </div>
                <div className='flex border-b-[1px] pb-2 my-4' >
                <div className='flex items-center gap-2 w-full'>
                    <input className='w-full' style={{outline: "none"}} required type={`${password2 ? 'text' : 'password'}`} placeholder="Re enter password" />
                </div>
                <div className='password_visibility text-2xl' onClick={() => setPassword2(!password2)}>
                {
                    password2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                }
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MentorSignup