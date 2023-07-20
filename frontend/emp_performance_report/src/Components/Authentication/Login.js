import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router';


function Login() {
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[type, setType] = useState();
  const[password1, setPassword1] = useState(false);

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setType(event.target.value);
  };

  async function getValues(event){
    event.preventDefault()

    try {
        const res = await axios.post("http://localhost:8080/login", {email, password, type});
        console.log(res);
        if(res.status === 200){
            localStorage.setItem("email", res.data.emailid);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("type", type);
            localStorage.setItem("name", res.data.name);
            navigate("/")
        }
    } catch (error) {
      if(error.response.status === 500){
        alert("No user find with this email.");
      }
        console.log(error);
    }
}

  return (
    <div className="login">
      <Navbar />
        <div className='flex justify-center items-center min-h-[94vh] flex-col'>
        <div className='w-[80vw] h-[60vh] flex items-center shadow-lg rounded-lg'>
            <div className="min-w-[40vw] bg-[red] min-h-[60vh]" style={{ position: "relative", backgroundImage: `url('./signup.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
            </div>
            <div className='w-1/2 min-h-[60vh] right-0 bg-[#FFF] py-16 px-10 shadow-md h-full' style={{float: "right"}}>
              <h1 className='pb-4 text-3xl font-semibold text-center'>Login to your account</h1>
              <form className='flex flex-col rounded-md p-4 bg-[#FFF] py-8 gap-6' onSubmit={(event) => getValues(event)}>
                  <div className='my-4'>
                      <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter email' onChange={(event) => setEmail(event.target.value)}/>
                  </div>
                  <div className='flex pb-2 my-4 relative' >
                  <div className='flex items-center gap-2 w-full'>
                      <input className='input border-b-[1px] w-full' style={{outline: "none"}} required type={`${password1 ? 'text' : 'password'}`} placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}/>
                  </div>
                  <div className='password_visibility text-2xl relative border-b-[1px]' onClick={() => setPassword1(!password1)}>
                  {
                      password1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                  }
                  </div>
                  </div>
                  <div className='my-4'>
                      {/* <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter your role'/> */}
                      <select className="input border-b-[1px] pb-2 w-full bg-[#FFF]"  style={{outline: "none"}} value={type} onChange={handleSelectChange}>
                        <option value="">Choose your role</option>
                        <option value="hr">Hr</option>
                        <option value="employee">Team Member</option>
                        <option value="mentor">Mentor</option>
                      </select>
                  </div>
                  <button type='submit' className='text-sm bg-[#A62868] w-20 py-1 text-[#FFF] rounded-sm mx-auto'>Submit</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login