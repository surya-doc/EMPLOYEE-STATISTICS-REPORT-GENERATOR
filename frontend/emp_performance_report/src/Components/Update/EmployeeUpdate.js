import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
// import './Manage.css'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { useLocation, useNavigate } from 'react-router';

function EmployeeUpdate() {
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

  const location = useLocation();
  console.log(location);

  async function getTeams(){
    try {
      const res = await axios.get(backend_url+'/team/');
      console.log(res);
      setTeams(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  async function setEmployeeDefaultData(){
    try {
      const res = await axios.get(backend_url+'/employeeDetail/'+location.state.empid);
      console.log(res);
      setEmployeeEmail(res.data.email);
      setEmployeeAddress(res.data.address);
      setRole(res.data.role)
      setEmployeeId(res.data.empid);
    } catch (error) {
      console.log(error);
    }
  }

  
  async function addMember(event){
    event.preventDefault()
    if(employeeId != null || employeeName != null || employeeEmail != null || employeePassword != null || employeeAddress != null || team != null){
      try {
        const res2 = await axios.put(backend_url + "/employeeDetail/update", {empid: employeeId, email: employeeEmail, password: employeePassword, address: employeeAddress, teamid: team, role: role});
        console.log(res2);
        if(res2.status === 200){
          alert("Employee updated successfully");
          navigate('/hr/employees');
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong.");
      }
    }
    console.log(employeeId, employeeEmail, employeePassword, employeeAddress, team, role);
  }
  
  useEffect(() => {
    getTeams();
    setEmployeeDefaultData();
  }, [])

  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        {/* <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" /> */}
        <form className='min-h-[82vh] bg-[#FFF] shadow-2xl px-10 flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1"}} onSubmit={(event) => addMember(event)}>
            <h1 className='text-center pb-4 text-2xl uppercase' style={{letterSpacing: "1px"}}>Update employee detail</h1>
            <div className='input border-b-[1px] px-1 text-sm pb-1'>Emp id: {location.state.empid}</div>
            <div className='input border-b-[1px] px-1 text-sm pb-1'>Emp name: {location.state.name}</div>

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

export default EmployeeUpdate