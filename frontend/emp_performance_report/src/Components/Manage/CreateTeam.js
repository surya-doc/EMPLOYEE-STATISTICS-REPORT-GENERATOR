import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Manage.css'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { useNavigate } from 'react-router';

function CreateTeam() {
  const[teamid, setTeamid] = useState();
  const[mentorid, setMentorid] = useState();
  const[teamDescription, setTeamDescription] = useState();
  const[mentors, setMentors] = useState([]);

  const navigate = useNavigate();


  async function getMentors(){
    try {
      const res = await axios.get(backend_url+'/employee/');
      console.log(res);
      setMentors(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMentors();
  }, [])

  async function addMentorFeedback(event){
    event.preventDefault()
    try {
      const res = await axios.post(backend_url+'/team/create', {teamid: teamid, mentorid: mentorid, team_description: teamDescription});
      console.log(res);
      if(res.status === 200){
        alert("Team created successfully");
        // navigate('/');
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        {/* <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" /> */}
        <form className='min-h-[82vh] px-16 bg-[#FFF] shadow-2xl relative flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1", overflow: "hidden"}} onSubmit={(event) => addMentorFeedback(event)}>
            <h1 className='text-center pb-4 text-2xl uppercase' style={{letterSpacing: "1px"}}>Create New Team</h1>
            <input
        className='input border-b-[1px] px-1 text-sm mb-10'
        type="text"
        placeholder='Enter Team Id'
        value={teamid}
        onChange={(event) => setTeamid(event.target.value)}
      />
      <textarea
        rows="4"
        className='textarea border-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Team Description'
        value={teamDescription}
        onChange={(event) => setTeamDescription(event.target.value)}
      />
        
      <select className="input border-b-[1px] px-1 mr-16 bg-[transparent] pb-2 bg-[#FFF] text-sm" required style={{outline: "none"}} value={mentorid} onChange={(event) => setMentorid(event.target.value)}>
        <option value="">Mentor</option>
        {
          mentors?.map((mentor, index) => {
            return <option key={index+1} value={mentor.empid}>{mentor.name}: {mentor.empid}</option>
          })
        }
      </select>
      <button type='submit' className='text-sm bg-[#A62868] w-60 py-3 mt-8 text-[#FFF] rounded-sm mx-auto'>Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CreateTeam