import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import TeamsCard from '../Cards/TeamsCard';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router';

function TeamDetails() {
  const[teams, setTeams] = useState([]);

  const navigate = useNavigate();

  async function getTeams(){
    try {
      const res = await axios.get(backend_url+'/team/');
      console.log(res);
      setTeams(res.data);
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
        {/* <div className="teamdetails flex flex-col items-center pt-6 pb-4">
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>1</span></div>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>abcd</span></div>
        </div> */}
      <div className='flex justify-between max-w-[80%] mx-auto mt-10'>
        <h4 className='text-2xl text-[#000000] uppercase' style={{letterSpacing: "1px"}}>Teams</h4>
        <div className="addbtn flex items-center gap-2 border-[2px] py-1 px-4 rounded-xl cursor-pointer"  onClick={() => navigate('/manage/createteam')}>
          <button>Add New Team</button>
          <AiOutlinePlusCircle className='text-lg' />
        </div>
      </div>
      <div className='bg-[#e7e7e7] min-h-[1px] min-w-[80%] max-w-[86%] mx-auto mt-4 mb-4'></div>

        <div className="teamproperties flex max-w-[78%] mx-auto bg-[#3e0f27] py-1 text-[#FFF]">
          <h4 className='w-1/4 text-center'>Team Id</h4>
          <h4 className='w-1/4 text-center'>Mentor Id</h4>
          <h4 className='w-2/4 text-center'>Team Description</h4>
        </div>

        <div className="members max-w-[78%] mx-auto">
            {
                teams.map((team, index) => {
                    return <div key={index+1}>
                        <TeamsCard team={team} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default TeamDetails