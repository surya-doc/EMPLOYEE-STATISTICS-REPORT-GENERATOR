import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import MentorFeedbackMembersCard from '../Cards/MentorFeedbackMembersCard';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import TeamsCard from '../Cards/TeamsCard';
import TeamsForMentorCards from '../Cards/TeamsForMentorCards';

function CrossMentorTeamFeedback() {
  const[teams, setTeams] = useState([]);

  const mentorId = localStorage.getItem('id');
  const token = localStorage.getItem("token");

  async function getTeams(){
    try {
      const res = await axios.get(backend_url+'/team/', {
        headers: {
          'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
          'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
        }
      });
      setTeams(res.data.filter(mentor => mentor.mentorid != mentorId && mentor.teamid != 1));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTeams();
  }, [])

  return (
    <div>
        <Navbar />
        <h1 className='min-w-[80%] max-w-[80%] mx-auto pt-8 text-xl font-bold'>Teams</h1>
        <div className='divider bg-[#A5B8CF] min-h-[1px] min-w-[80%] max-w-[80%] mx-auto mt-4 mb-4' style={{backgroundColor: "#A5B8CF"}}></div>

        <div className="teamproperties flex max-w-[78%] mx-auto bg-[#3e0f27] py-1 text-[#FFF]">
          <h4 className='w-1/4 text-center'>Team Id</h4>
          <h4 className='w-1/4 text-center'>Mentor Id</h4>
          <h4 className='w-2/4 text-center'>Team Description</h4>
        </div>

        <div className="members max-w-[78%] mx-auto">
            {
                teams.map((team, index) => {
                    return <div key={index+1}>
                        <TeamsForMentorCards team={team} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default CrossMentorTeamFeedback