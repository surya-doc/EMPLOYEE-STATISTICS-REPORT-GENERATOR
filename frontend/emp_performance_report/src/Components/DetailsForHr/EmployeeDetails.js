import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend_url } from '../../BackendRoute';
import EmployeeCard from '../Cards/EmployeeCard';
import Navbar from '../Navbar/Navbar';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router';

function EmployeeDetails() {
  const[employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  async function getEmployees(){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/');
      console.log(res);
      setEmployees(res.data);
    } catch (error) {
      alert("Something went wrong!!");
    }
  }

  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <div className="employeedetails">
      <Navbar />
      <div className='flex justify-between max-w-[80%] mx-auto mt-10'>
        <h4 className='text-2xl text-[#000000] uppercase' style={{letterSpacing: "1px"}}>Employees</h4>
        <div className="addbtn flex items-center gap-2 border-[2px] py-1 px-4 rounded-xl cursor-pointer"  onClick={() => navigate('/manage/createmember')}>
          <button>Add New Employee</button>
          <AiOutlinePlusCircle className='text-lg' />
        </div>
      </div>
      <div className='bg-[#e7e7e7] min-h-[1px] min-w-[80%] max-w-[86%] mx-auto mt-4 mb-4'></div>
      <div className="employees flex flex-col items-center" id='employee'>
        {
          employees.map((emp) => {
            return <div>
              <EmployeeCard employee={emp} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default EmployeeDetails