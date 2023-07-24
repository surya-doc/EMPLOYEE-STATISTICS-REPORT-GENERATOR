import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend_url } from '../../BackendRoute';
import EmployeeCard from '../Cards/EmployeeCard';
import Navbar from '../Navbar/Navbar';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { BiSolidEditAlt } from 'react-icons/bi'
import { ImBin } from 'react-icons/im'

function EmployeeDetails() {
  const[employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  async function getEmployees(){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byrole/member');
      console.log(res);
      if(res.status === 200){
        for(let i=0; i<res.data.length; i++){
          // console.log(res.data[i]);
          const employee = await axios.get(backend_url+'/employeeDetail/'+res.data[i].empid);
          console.log(employee);
          res.data[i].email = employee.data.email;
          res.data[i].teamid = employee.data.teamid;
        }
      }
      setEmployees(res.data);
    } catch (error) {
      
      console.log(error);
    }
  }

    
  async function deleteEmployee(employee){
      var answer = window.confirm("You want to delete this employee?");
      if (answer) {
          try {
              const res = await axios.delete(backend_url+'/employeeDetail/delete/'+employee.empid);
              console.log(res);
              getEmployees();
          } catch (error) {
              console.log(error);
          }
      }
      else {
          //some code
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
        {/* <div className="addbtn flex items-center gap-2 border-[2px] py-1 px-4 rounded-xl cursor-pointer"  onClick={() => navigate('/manage/createmember')}>
          <button>Add New Employee</button>
          <AiOutlinePlusCircle className='text-lg' />
        </div> */}
      </div>
      <div className='bg-[#e7e7e7] min-h-[1px] min-w-[80%] max-w-[86%] mx-auto mt-4 mb-4'></div>
      <div className="employees flex flex-col items-center" id='employee'>
        {
          employees.map((emp) => {
            return <div className='flex items-center border-[1px] shadow-lg'>
              <EmployeeCard employee={emp} />
              <div className="updateoptions pr-4">
                  <div className="update border-[1px] flex items-center justify-center p-2 mb-1 hover:bg-[#F2F2F2]" onClick={() => navigate('/hr/update/employee', {state: emp})}>
                      <BiSolidEditAlt className='text-[#838082]' />
                  </div>
                  <div className="delete border-[1px] flex items-center justify-center p-2 mt-2 hover:bg-[#F2F2F2]" onClick={() => deleteEmployee(emp)}>
                      <ImBin className='text-[#838082]' />
                  </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default EmployeeDetails