import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Manage.css'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function AddEmployee() {
  const [employees, setEmployees] = useState();
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

  async function getTeams(){
    try {
      const res = await axios.get(backend_url+'/team/', {
        headers: {
          'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
          'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
        }
      });
      console.log(res);
      setTeams(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  async function getEmployees(){
    try {
      const res = await axios.get(backend_url+'/employee/', {
        headers: {
          'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
          'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
        }
      });
      console.log(res);
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  async function addMember(event){
    event.preventDefault()
    if(employeeId != null || employeeName != null || employeeEmail != null || employeePassword != null || employeeAddress != null || team != null){
      try {
        const res2 = await axios.post(backend_url + "/employeeDetail/create", {empid: employeeId, email: employeeEmail, password: employeePassword, address: employeeAddress, teamid: team, role: role}, {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
          }
        });
        console.log(res2);
        if(res2.status === 200){
          success("Employee created successfully");
          // navigate('/');
        }
      } catch (error) {
        console.log(error);
        notify("Something went wrong.");
      }
    }
    console.log(employeeId);
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
  
  useEffect(() => {
    getTeams();
    getEmployees();
  }, [])

  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        {/* <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" /> */}
        <form className='min-h-[82vh] bg-[#FFF] shadow-2xl px-10 flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1"}} onSubmit={(event) => addMember(event)}>
            <h1 className='text-center pb-4 text-2xl uppercase' style={{letterSpacing: "1px"}}>Add Employee Detail</h1>
      <select className="input border-b-[1px] px-1 mx-auto bg-[transparent] pb-2 bg-[#FFF] text-sm w-full" required style={{outline: "none"}} value={employeeName} onChange={(event) => {
        setEmployeeId(event.target.value)
        setEmployeeName()
      }
      }>
        <option value="">Employee Name</option>
        {
          employees?.map((employee) => {
            return <option value={employee.empid}>{employee.name}</option>
          })
        }
      </select>
      <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Employee Email'
        value={employeeEmail}
        onChange={(event) => setEmployeeEmail(event.target.value)}
      />
      <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Employee Password'
        value={employeePassword}
        onChange={(event) => setEmployeePassword(event.target.value)}
      />
      <input
        className='input border-b-[1px] px-1 text-sm pb-1 tooltip'
        data-title="Give feedback on the basis of communication between 1 to 5"
        type="text"
        placeholder='Enter Employee Address'
        value={employeeAddress}
        onChange={(event) => setEmployeeAddress(event.target.value)}
      />
      <select className="input border-b-[1px] px-1 mx-auto bg-[transparent] pb-2 bg-[#FFF] text-sm w-full" required style={{outline: "none"}} value={role} onChange={(event) => setRole(event.target.value)}>
        <option value="">Role</option>
        <option value="hr">Hr</option>
        <option value="member">Member</option>
        <option value="mentor">Mentor</option>
      </select>        
      <select className="input border-b-[1px] px-1 mx-auto bg-[transparent] pb-2 bg-[#FFF] text-sm w-full" required style={{outline: "none"}} value={team} onChange={(event) => setTeam(event.target.value)}>
        <option value="">Teams</option>
        {
          teams?.map((team) => {
            return <option value={team.teamid}>{team.team_description}</option>
          })
        }
      </select>
      <button type='submit' className='text-sm bg-[#A62868] w-60 py-3 mt-8 text-[#FFF] rounded-sm mx-auto'>Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AddEmployee