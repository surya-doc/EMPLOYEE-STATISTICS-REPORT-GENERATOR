import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import MentorCard from '../Cards/MentorCard';

function MentorDetails() {
  const[mentors, setMentors] = useState([]);

  const navigate = useNavigate();

  async function getMentors(){
    try {
      const res = await axios.get(backend_url+'/mentors/');
      console.log(res);
      setMentors(res.data);
    } catch (error) {
      alert("Something went wrong!!");
    }
  }

  useEffect(() => {
    getMentors();
  }, [])
  return (
    <div className="mentordetails">
      <Navbar />
      <div className='flex justify-between max-w-[80%] mx-auto mt-10'>
        <h4 className='text-2xl text-[#000000] uppercase' style={{letterSpacing: "1px"}}>Mentors</h4>
        <div className="addbtn flex items-center gap-2 border-[2px] py-1 px-4 rounded-xl cursor-pointer"  onClick={() => navigate('/manage/creatementor')}>
          <button>Add New Mentor</button>
          <AiOutlinePlusCircle className='text-lg' />
        </div>
      </div>
      <div className='bg-[#e7e7e7] min-h-[1px] min-w-[80%] max-w-[86%] mx-auto mt-4 mb-4'></div>
      <div className="employees flex flex-col items-center" id='employee'>
        {
          mentors.map((mentor) => {
            return <div>
              <MentorCard mentor={mentor} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default MentorDetails