import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Landing.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import EmployeeCard from '../Cards/EmployeeCard';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { useNavigate } from 'react-router';
import { getapiCall } from '../APICall/apiget';


function Landing() {
  const[isHr, setIsHr] = useState(false);
  const[isMember, setIsMember] = useState(false);
  const[employees, setEmployees] = useState([]);

  const empId = localStorage.getItem('id');

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  async function check(){
    try {
      const url = `${backend_url}/employeeDetail/${empId}`;
      const res = await getapiCall(url, token);

      if(res.status === 200 && res.data.role === "hr"){
        setIsHr(true);
      }
      else if(res.status === 200 && res.data.role === "member"){
        setIsMember(true);
      }
      else{
        setIsHr(false);
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      localStorage.removeItem("type");
      localStorage.removeItem("name");
      localStorage.removeItem("token");
    }
  }

  async function getTopEmployees(){
    try {
      const res = await axios.get(backend_url+'/calculate/sorted');
      setEmployees(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    check();
    getTopEmployees();
  }, [])

  return (
    <div className='landing'>
        <Navbar />
        <div className='body flex justify-center px-16 pt-20 items-center gap-32'>
            <div className="left w-6/12 text-[3.2rem] border-b-1">
                <h1 className="text-[3.2rem] border-b-1" style={{fontFamily: "sans-serif"}}>Smarter Workforce Management through Statistics</h1>
                <p className='text-lg pt-6' style={{letterSpacing: "2px"}}>Empower Your Workforce with Dynamic Employee Statistics Reports!</p>
                <div className='flex gap-6'>
                  <div className={`manage ${isHr === true ? 'block' : 'hidden'}`}>
                    <button className='text-base bg-[#e4bed1] border-[1px] border-[#A62868] text-[#A62868] py-1 px-4 rounded-2xl' onClick={() => {navigate('/hr/details')}}>Details</button>
                  </div>
                  <div className={`manage ${isHr === true ? 'block' : 'hidden'}`}>
                    <button className='text-base bg-[#A62868] border-[1px] border-[#A62868] py-1 px-4 text-[#FFF] rounded-2xl' onClick={() => {navigate('/manage')}}>Manage</button>
                  </div>
                  <div className={`manage ${isMember === true ? 'block' : 'hidden'}`}>
                    <button className='text-base bg-[#e4bed1] border-[1px] border-[#A62868] text-[#A62868] py-1 px-4 rounded-2xl' onClick={() => {navigate('/employee/statistics')}}>Statistics</button>
                  </div>
                </div>
            </div>
            <div className="right w-4/12">
                <img src="./landing.svg" alt="" />
            </div>
        </div>
        <div className='divider bg-divider min-h-[1px] min-w-[80%] max-w-[86%] mx-auto mt-16 mb-4'></div>
        <div className='bg-[#E4BED1] mx-auto w-8 h-8 flex justify-center items-center rounded-full p-2 animate-bounce'>
          <a className='bg-[#D191B1] w-6 h-6 flex justify-center items-center rounded-full p-1' href="#employee">
            <MdKeyboardDoubleArrowDown className='color-[#A62868] text-[#A62868] font-bold'  />
          </a>
        </div>
        <div className="topEmployees mt-16">
          <div className='flex items-center justify-center'>
            <img className='w-16 h-16' src="./champ_cup.png" alt="" />
            <h1 className='text-[#A62868] text-3xl text-center py-8 font-bold' >Employees of the month</h1>
            <img className='w-16 h-16' src="./champ_cup.png" alt="" />
          </div>
          <div className="bg-[#E6E6E6] min-h-[2px] min-w-[40%] max-w-[40%] mx-auto mb-4"></div>
          <div className="employees flex flex-col items-center" id='employee'>
            {
              employees.slice(0, 3).map((emp, index) => {
                return <div className='border-[1px] shadow-lg my-4'>
                  <EmployeeCard key={index+1} employee={emp} />
                </div>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Landing