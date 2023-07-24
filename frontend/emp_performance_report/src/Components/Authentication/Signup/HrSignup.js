import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router';

function HrSignup() {
  const[email, setEmail] = useState();
  const[hrId, setHrId] = useState();
  const[name, setName] = useState();
  const[password, setPassword] = useState();
  const[rePassword, setRePassword] = useState();
  const[password1, setPassword1] = useState(false);
  const[password2, setPassword2] = useState(false);
  const[address, setAddress] = useState();

  const navigate = useNavigate();

    async function getValues(event){
        event.preventDefault()

        console.log(email, hrId, name, password, rePassword);
        if(password === rePassword){
            try {
                const res1 = await axios.post("http://localhost:8080/employee/create", {empid: hrId, name: name, status: true});
                const res2 = await axios.post("http://localhost:8080/employeeDetail/create", {empid: hrId, email, password, name: name, status: true, address, teamid: 1, role: "hr"});
                if(res2.status === 200){
                    localStorage.setItem("email", email);
                    localStorage.setItem("id", hrId);
                    localStorage.setItem("type", "hr");
                    localStorage.setItem("name", name);
                    navigate("/")
                }
            } catch (error) {
                console.log(error);
            }
        }
        else{
            console.log("Password doesn't matchs. Check once.")
        }

    }

  return (
    <div className="hrsignup">
      <Navbar />
        <div className='flex justify-center items-center min-h-[94vh] flex-col'>
            <h1 className='pb-4 text-xl'>Signup for HR</h1>
            <form className='flex flex-col rounded-md p-4 bg-[#FFF] shadow-lg py-8' onSubmit={(event) => getValues(event)}>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter email' onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="number" style={{outline: "none"}} placeholder='enter hr id' onChange={(event) => setHrId(event.target.value)}/>
                </div>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="text" style={{outline: "none"}} placeholder='enter name' onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="text" style={{outline: "none"}} placeholder='enter address' onChange={(event) => setAddress(event.target.value)}/>
                </div>
                <div className='flex border-b-[1px] pb-2 my-4' >
                <div className='flex items-center gap-2 w-full'>
                    <input className='w-full' style={{outline: "none"}} required type={`${password1 ? 'text' : 'password'}`} placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className='password_visibility text-2xl' onClick={() => setPassword1(!password1)}>
                {
                    password1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                }
                </div>
                </div>
                <div className='flex border-b-[1px] pb-2 my-4' >
                <div className='flex items-center gap-2 w-full'>
                    <input className='w-full' style={{outline: "none"}} required type={`${password2 ? 'text' : 'password'}`} placeholder="Re enter password" onChange={(event) => setRePassword(event.target.value)}/>
                </div>
                <div className='password_visibility text-2xl' onClick={() => setPassword2(!password2)}>
                {
                    password2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                }
                </div>
                </div>
                <button type='submit' className='text-sm bg-[#A62868] w-20 py-1 text-[#FFF] rounded-sm mx-auto'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default HrSignup