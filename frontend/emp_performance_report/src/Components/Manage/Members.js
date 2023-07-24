import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

function Members() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  async function addMember(event){
    event.preventDefault()
    if(employeeId != null || employeeName != null ){
      try {
        const res1 = await axios.post(backend_url+"/employee/create", {empid: employeeId, name: employeeName, status: true});
        console.log(res1);
        if(res1.status === 200){
          alert("Employee created successfully");
          // navigate('/');
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong.");
      }
    }
  }
  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        {/* <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" /> */}
        <form className='min-h-[82vh] bg-[#FFF] shadow-2xl px-10 flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1"}} onSubmit={(event) => addMember(event)}>
            <h1 className='text-center pb-4 text-2xl uppercase' style={{letterSpacing: "1px"}}>Create new member</h1>
            <input
              className='input border-b-[1px] px-1 text-sm pb-1'
              type="text"
              placeholder='Enter Employee Id'
              value={employeeId}
              onChange={(event) => setEmployeeId(event.target.value)}
            />
            <input
              className='input border-b-[1px] px-1 text-sm pb-1'
              type="text"
              placeholder='Enter Employee Name'
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
                  <button type='submit' className='text-sm bg-[#A62868] w-60 py-3 mt-8 text-[#FFF] rounded-sm mx-auto'>Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Members