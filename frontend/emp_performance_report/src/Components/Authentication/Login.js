import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { backend_url } from '../../BackendRoute';
import { RxCross1 } from "react-icons/rx";


function Login() {
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[type, setType] = useState();
  const[password1, setPassword1] = useState(false);
  const[otpEmail, setOtpEmail] = useState();
  const[forgotPassword, setForgotPassword] = useState(false);
  const[options, setOptions] = useState('email');
  const[otp, setOtp] = useState();

  const navigate = useNavigate();


  async function getValues(event){
    event.preventDefault()

    try {
        const res = await axios.post("http://localhost:8080/auth/login", {email, password, type});
        let token = res.data.jwtToken;
        localStorage.setItem("token", token);
        if(res.status === 200){
          const res = await axios.post(backend_url+'/employeeDetail/byemail', {email: email}, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            }
          });
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("id", res.data.empid);
            localStorage.setItem("type", type);
            const getName = await axios.get(backend_url+'/employee/'+res.data.empid, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              }
            });
            localStorage.setItem("name", getName.data.name);
            success("Success!");
            navigate("/")
        }
    } catch (error) {
      if(error.response.status === 500){
        notify("No user found !");
      }
      else{
        console.log(error);
        notify("Something went wrong !");
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

async function generateOTP(event){
  event.preventDefault();
  try {
    const res = await axios.post(backend_url+'/otp/getotp?email='+otpEmail);
    setOptions('otp');
    setOtp('');
    success("Check your email for OTP.")
  } catch (error) {
    notify(error.response.data);
  }
}

async function validateOtp(event){
  event.preventDefault();
  try {
    const key = otp+otpEmail;
    const res = await axios.post(backend_url + '/otp/validate?key=' + key);
    console.log(res);
    if(res.status === 200){
      navigate('/update/password', {state: true});
    }
  } catch (error) {
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
            <div className='w-1/2 min-h-[60vh] right-0 bg-[#FFF] pb-16 px-10 shadow-md h-full' style={{float: "right"}}>
              <h1 className='pb-4 text-3xl font-semibold text-center'>Login to your account</h1>
              <form className='flex flex-col rounded-md p-4 bg-[#FFF] pb-8 gap-6' onSubmit={(event) => getValues(event)}>
                  <div className='my-4'>
                      <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter email' onChange={(event) => setEmail(event.target.value)}/>
                  </div>
                  <div className='flex pb-2 mt-8 relative' >
                  <div className='flex items-center gap-2 w-full'>
                      <input className='input border-b-[1px] w-full' style={{outline: "none"}} required type={`${password1 ? 'text' : 'password'}`} placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}/>
                  </div>
                  <div className='password_visibility text-2xl relative border-b-[1px]' onClick={() => setPassword1(!password1)}>
                  {
                      password1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                  }
                  </div>
                  </div>
                  <div className='text-sm cursor-pointer text-[#3498DB]' onClick={() => setForgotPassword(true)}>Forgot password?</div>
                  <button type='submit' className='text-sm bg-[#A62868] w-20 py-1 text-[#FFF] rounded-sm mx-auto'>Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className={`w-[100vw] h-[100vh] ${forgotPassword ? 'block' : 'hidden'} fixed flex-col top-0 left-0 flex items-center justify-center`} style={{zIndex: "999", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
          <RxCross1 className='text-4xl bg-[#FFF] rounded-full p-2 my-4' onClick={() => setForgotPassword(false)} />
                <div className={`otpemailsction w-[300px] h-[200px] bg-[#FFF] ${options === "email" ? 'block' : 'hidden'} flex flex-col itmes-center justify-center px-8`}>
                  <form className='flex flex-col justify-center' action="" onSubmit={(event) => generateOTP(event)}>
                    <input className='input_otp border-[1px] w-full px-2 py-1' value={otpEmail} style={{outline: "none"}} required type='text' placeholder="Enter email" onChange={(event) => setOtpEmail(event.target.value)}/>
                    <button className='text-sm bg-[#F7B204] px-2 py-1 my-4' type='submit'>Generate OTP</button>
                  </form>
                </div>
                <div className={`otpscreen w-[300px] h-[200px] bg-[#FFF] flex flex-col itmes-center ${options === "email" ? 'hidden' : 'block'} justify-center px-8`}>
                  <form className='flex flex-col justify-center' action="" onSubmit={(event) => validateOtp(event)}>
                    <input className='input_otp border-[1px] w-full px-2 py-1' style={{outline: "none"}} type='text' placeholder="Enter OTP" onChange={(event) => setOtp(event.target.value)}/>
                    <button className='text-sm bg-[#F7B204] px-2 py-1 my-4' type='submit'>Submit</button>
                    <p className='text-xs text-[#5795F4] pt-2' onClick={() => {
                      setOptions("email")
                    }  
                    } >Regnerate otp</p>
                  </form>
                </div>
        </div>
    </div>
  )
}

export default Login