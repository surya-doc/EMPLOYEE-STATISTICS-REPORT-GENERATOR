import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Manage.css'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { useNavigate } from 'react-router';

function AddEmployee() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState();

  const navigate = useNavigate();


  async function getTeams(){
    try {
      const res = await axios.get(backend_url+'/team/');
      console.log(res);
      setTeams(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTeams();
  }, [])

  async function addMember(event){
    event.preventDefault()
    if(employeeId != null || employeeName != null || employeeEmail != null || employeePassword != null || employeeAddress != null || team != null){
      try {
        const res = await axios.post(backend_url+'/employeeDetail/create', {empid: employeeId, name: employeeName, email: employeeEmail, password: employeePassword, address: employeeAddress, status: true, teamid: team});
        console.log(res);
        if(res.status === 200){
          alert("Employee created successfully");
          // navigate('/');
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong.");
      }
    }
  }

  return (
    <div className="CrossMentorFeedback bg-[#f7e5ee] min-h-[100vh]">
    <Navbar />
    <div className="feedbackform w-2/5 bg-[#f7e5ee] flex justify-center items-center mx-auto py-14">
      <div className='w-full relative'>
        {/* <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" /> */}
        <form className='min-h-[82vh] bg-[#FFF] shadow-2xl px-10 flex flex-col justify-center py-16 gap-4 gap-y-14' style={{backgroundColor: "rgba(255, 255, 255, 1"}} onSubmit={(event) => addMember(event)}>
            <h1 className='text-center pb-4 text-2xl uppercase' style={{letterSpacing: "1px"}}>Create new member</h1>
            <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Employee Id'
        value={employeeId}
        onChange={(event) => setEmployeeId(event.target.value)}
      />
      <input
        className='input border-b-[1px] px-1 text-sm pb-1'
        type="text"
        placeholder='Enter Employee Name'
        value={employeeName}
        onChange={(event) => setEmployeeName(event.target.value)}
      />
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
      <select className="input border-b-[1px] px-1 mx-auto bg-[transparent] pb-2 bg-[#FFF] text-sm" required style={{outline: "none"}} value={team} onChange={(event) => setTeam(event.target.value)}>
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