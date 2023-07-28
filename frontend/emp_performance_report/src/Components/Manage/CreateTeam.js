import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Manage.css'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function CreateTeam() {
  const[teamid, setTeamid] = useState();
  const[mentorid, setMentorid] = useState();
  const[teamDescription, setTeamDescription] = useState();
  const[mentors, setMentors] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  async function getMentors(){
    try {
      const res = await axios.get(backend_url+'/employee/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      setMentors(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  async function createNewTeam(event){
    event.preventDefault()
    try {
      const res = await axios.post(backend_url+'/team/create', {teamid: teamid, mentorid: mentorid, team_description: teamDescription}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if(res.status === 200){
        success("Team created successfully");
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      notify("Something went wrong.");
    }
  }

  const notify = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  
  const success = (msg) => {
      toast.success(msg, {
      position: toast.POSITION.TOP_CENTER
    });
  }

  useEffect(() => {
    getMentors();
  }, [])

  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        <form className='min-h-[82vh] px-16 bg-[#FFF] shadow-2xl relative flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1", overflow: "hidden"}} onSubmit={(event) => createNewTeam(event)}>
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