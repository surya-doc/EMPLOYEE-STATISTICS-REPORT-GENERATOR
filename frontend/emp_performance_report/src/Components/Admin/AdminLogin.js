import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router';

function AdminLogin() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[password1, setPassword1] = useState();

    const navigate = useNavigate();

    async function getValues(event){
      event.preventDefault()
  
      try {
        console.log("***************");
          const res = await axios.post("http://localhost:8080/auth/login", {email, password});
          console.log(res);
          let token = res.data.jwtToken;
          localStorage.setItem("token", token);
          localStorage.setItem("email", res.data.username);
          navigate('/admin')
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
    
  return (
    <div className="admin h-[100vh]">
        <AdminHeader />
        <div className="admin_login flex flex-col items-center h-full justify-center">
            <h1 className='pb-4'>Admin Login</h1>
            <form className='w-[30vw] h-[40vh]' action="" onSubmit={(event) => getValues(event)}>
                <input className='w-full border-b-[1px] pb-1 mb-8 mt-6 focus:outline-none' type="email" placeholder='Enter email' onChange={(event) => setEmail(event.target.value)}/>
                <div className='flex border-b-[1px] pb-2 mt-4 mb-8 w-full' >
                    <div className='flex items-center gap-2 w-full'>
                        <input className='w-full' style={{outline: "none"}} required type={`${password1 ? 'text' : 'password'}`} placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className='password_visibility text-2xl' onClick={() => setPassword1(!password1)}>
                    {
                        password1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                    }
                    </div>
                </div>
                <button type='submit' className='text-sm bg-[#A62868] w-20 py-1 text-[#FFF] rounded-sm mx-auto'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin