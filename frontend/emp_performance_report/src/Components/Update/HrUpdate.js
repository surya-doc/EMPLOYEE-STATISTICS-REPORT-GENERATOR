import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getapiCall } from '../APICall/apiget';

function HrUpdate() {
    const [employee, setEmployee] = useState();
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeePassword, setEmployeePassword] = useState('');
    const [employeeAddress, setEmployeeAddress] = useState('');
    const [teams, setTeams] = useState([]);
    const [team, setTeam] = useState();
    const [role, setRole] = useState();

    
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");

    async function addMember(event){
        event.preventDefault()
        if(employeeId != null || employeeName != null || employeeEmail != null || employeePassword != null || employeeAddress != null || team != null){
          try {
            const res2 = await axios.put(backend_url + "/employeeDetail/update", {empid: employeeId, email: employeeEmail, password: employeePassword, address: employeeAddress, teamid: team, role: role}, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              }
            });
            if(res2.status === 200){
              success("Employee updated successfully");
              navigate('/');
            }
          } catch (error) {
            console.log(error);
            notify("Something went wrong.");
          }
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

      async function getEmployeeDetail(){
        try {
          const url = backend_url+'/employeeDetail/'+id;
          const res = await getapiCall(url, token);
          setEmployee(res.data);
          setEmployeeName(name);
          setEmployeeEmail(res.data.email);
          setEmployeeAddress(res.data.address);
          setRole(res.data.role);
          setTeam(res.data.team);
          setEmployeeId(res.data.empid);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        getEmployeeDetail();
      }, [])

  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        <form className='min-h-[82vh] bg-[#FFF] shadow-2xl px-10 flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1"}} onSubmit={(event) => addMember(event)}>
            <h1 className='text-center pb-4 text-2xl uppercase' style={{letterSpacing: "1px"}}>Update employee detail</h1>
            <div className='input border-b-[1px] px-1 text-sm pb-1'>Emp id: {employee?.empid}</div>
            <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter your name'
        value={employeeName}
        onChange={(event) => setEmployeeName(event.target.value)}
      />

      <div className='input border-b-[1px] px-1 text-sm pb-1'>{employee?.email}</div>
      <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="password"
        placeholder='Enter your Password'
        value={employeePassword}
        onChange={(event) => setEmployeePassword(event.target.value)}
      />
      <input
        className='input border-b-[1px] px-1 text-sm pb-1 tooltip'
        data-title="Give feedback on the basis of communication between 1 to 5"
        type="text"
        placeholder='Enter your Address'
        value={employeeAddress}
        onChange={(event) => setEmployeeAddress(event.target.value)}
      />
            <div className='input border-b-[1px] px-1 text-sm pb-1'>{employee?.role}</div>
     
            <div className='input border-b-[1px] px-1 text-sm pb-1'>Team id: {employee?.teamid}</div>

      <div className="buttonholder flex justify-center gap-4">
        <button className='cancel_btn text-sm bg-[#D191B1] px-4 border-[1px] border-[#A62868] text-[#A62868] py-3 mt-8 rounded-sm' onClick={() => navigate('/hr/employees')}>Cancel</button>
        <button type='submit' className='submit_btn text-sm bg-[#A62868] px-4 py-3 mt-8 text-[#FFF] rounded-sm'>Submit</button>
      </div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default HrUpdate