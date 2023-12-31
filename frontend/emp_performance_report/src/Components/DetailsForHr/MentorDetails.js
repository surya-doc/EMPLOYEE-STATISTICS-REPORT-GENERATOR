import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import MentorCard from '../Cards/MentorCard';

function MentorDetails() {
  const[mentors, setMentors] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  async function getMentors(){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byrole/mentor', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if(res.status === 200){
        for(let i=0; i<res.data.length; i++){
          const employee = await axios.get(backend_url+'/employeeDetail/'+res.data[i].empid, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          });
          res.data[i].email = employee.data.email;
          res.data[i].teamid = employee.data.teamid;
        }
      }
      setMentors(res.data);
    } catch (error) {
      console.log(error);
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