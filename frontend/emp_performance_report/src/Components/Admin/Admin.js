import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import EmployeeCard from '../Cards/EmployeeCard';
import { BiSolidEditAlt } from 'react-icons/bi';
import { ImBin } from 'react-icons/im';

function Admin() {
  const[employees, setEmployees] = useState([]);

  const token = localStorage.getItem("token");

  async function getTeamDetails(teamid){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/byteam/1/hr', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      console.log(res);
      if(res.status === 200){
        for(let i=0; i<res.data.length; i++){
          const employee = await axios.get(backend_url+'/employee/'+res.data[i].empid, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          });
          res.data[i].name = employee.data.name;
        }
      }
      setEmployees(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteEmployee(employee){
    var answer = window.confirm("You want to delete this employee?");
    if (answer) {
        try {
            const res = await axios.delete(backend_url+'/employeeDetail/delete/'+employee.empid, {
              headers: {
                'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
                'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
              }
            });
            getTeamDetails();
        } catch (error) {
            console.log(error);
        }
    }
    else {
        //some code
    }

}

  useEffect(() => {
    getTeamDetails();
  }, [])

  return (
    <div className="admin">
      <AdminHeader />
      <div className="hrdetails">
      <div className="employees flex flex-col items-center" id='employee'>
        {
          employees.map((emp) => {
            return <div className='flex items-center border-[1px] shadow-lg my-4'>
              <EmployeeCard employee={emp} />
              <div className="updateoptions pr-4">
                  <div className="delete border-[1px] flex items-center justify-center p-2 mt-2 hover:bg-[#F2F2F2] cursor-pointer" onClick={() => deleteEmployee(emp)}>
                      <ImBin className='text-[#838082]' />
                  </div>
              </div>
            </div>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Admin