import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

function CreateMentor() {
    const [mentorid, setMentorid] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const navigate = useNavigate();

    async function addMentorFeedback(event){
        event.preventDefault()
        try {
          const res = await axios.post(backend_url+'/mentors/create', {mentorid: mentorid, name: name, email: email, password: password, status: true});
          console.log(res);
          if(res.status === 200){
            alert("Mentor created successfully");
            // navigate('/');
          }
        } catch (error) {
          console.log(error);
          alert("Something went wrong.");
        }
      }

  return (
    <div className="CreateMentor bg-[#f7e5ee] ">
        <Navbar />
        <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        {/* <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" /> */}
        <form className='min-h-[82vh] bg-[#FFF] shadow-2xl px-10 flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1"}} onSubmit={(event) => addMentorFeedback(event)}>
            <h1 className='text-center pb-4 text-2xl uppercase' style={{letterSpacing: "1px"}}>Create New Mentor</h1>
            <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Mentor Id'
        value={mentorid}
        onChange={(event) => setMentorid(event.target.value)}
      />
      <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Mentor Name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Mentor Email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Mentor Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit' className='text-sm bg-[#A62868] w-60 py-3 mt-8 text-[#FFF] rounded-sm mx-auto'>Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateMentor