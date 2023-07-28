import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend_url } from '../../BackendRoute';

function MentorCard({mentor}) {
    const[teamDetails, setTeamDetails] = useState();
    const token = localStorage.getItem("token");

    async function getTeams(){
      try {
        const res = await axios.get(backend_url+'/team/'+mentor.teamid, {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
          }
        });
        setTeamDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getTeams();
    }, [])
  return (
    <div className='employeesCard flex items-center border-[1px] w-[60vw] my-4 shadow-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-105 rounded-md py-4 pl-4 pr-2'>
        <div className="nameLogo bg-[#E6E6E6] text-[2rem] font-bold w-16 h-16 py-4 flex items-center justify-center px-8">{mentor.name.substring(0, 2)}
        <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-lime-600"></span>
        </span>
        </div>
        <div className="right w-full px-8 flex justify-between">
            <div className=''>
                <div className='flex items-center gap-2 py-2'>
                    <h5>Name: </h5>
                    <p>{mentor.name}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <h5>Email: </h5>
                    <p>{mentor.email}</p>
                </div>
            </div>
            <div className='justify-end'>
                <div className='flex items-center gap-2 py-2'>
                    <h5>Team Id: </h5>
                    <p>{mentor.teamid}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <h5>Team: </h5>
                    <p>{teamDetails?.team_description}</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default MentorCard