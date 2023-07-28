import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Manage.css'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { Tooltip as ReactTooltip } from "react-tooltip";

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
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  async function getTeams(){
    try {
      const res = await axios.get(backend_url+'/team/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      setTeams(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  async function getEmployees(){
    try {
      const res = await axios.get(backend_url+'/employee/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;
    if (!emailRegex.test(employeeEmail)) {
      setError('Invalid email');
      isValid = false;
    }

    if (!passwordRegex.test(employeePassword)) {
      setError('Invalid password');
      isValid = false;
    }

    return isValid;
};

  async function addMember(event){
    event.preventDefault()
    if(employeeId != null || employeeName != null || employeeEmail != null || employeePassword != null || employeeAddress != null || team != null){
      if(validateForm()){
        try {
          const res2 = await axios.post(backend_url + "/employeeDetail/create", {empid: employeeId, email: employeeEmail, password: employeePassword, address: employeeAddress, teamid: team, role: role}, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          });
          if(res2.status === 200){
            success("Employee created successfully");
            navigate('/manage');
          }
        } catch (error) {
          notify("Something went wrong.");
        }
      }
      else{
        notify(error);
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

  const validatePassword = (password) => {
    if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.';
    }
    return '';
  };
  useEffect(() => {
    getTeams();
    getEmployees();
  }, [])

  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
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
            return <option value={employee.empid}>{employee.name}: {employee.empid}</option>
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
        data-tooltip-id="password"
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
    <ReactTooltip
        id="password"
        place="top"
        variant="info"
        content="Password should be atleast 8 char, one upppercase, one letter and one special charactor"
      />
  </div>
  )
}

export default AddEmployee