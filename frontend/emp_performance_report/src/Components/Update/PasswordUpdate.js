import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function PasswordUpdate() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[rePassword, setRePassword] = useState();
    const[password1, setPassword1] = useState(false);
    const[password2, setPassword2] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
        let isValid = true;
    
        if (!emailRegex.test(email)) {
        isValid = false;
        setError('Invalid email');
        }
    
        if (!passwordRegex.test(password)) {
        isValid = false;
        setError('Invalid password');
        }
    
        return isValid;
    };

    const location = useLocation();

    useEffect(() => {
        if(location.state === false || location.state === null){
            navigate('/');
        }
    }, [])

    async function getValues(event){
        event.preventDefault()

        console.log(email, password, rePassword);
        if (validateForm()) {
            if(password === rePassword){
                try {
                    const res = await axios.put(backend_url+'/employeeDetail/update/password', {email, password});
                    console.log(res);
                    if(res.status === 200){
                        // localStorage.setItem("email", email);
                        // localStorage.setItem("id", hrId);
                        // localStorage.setItem("type", "hr");
                        // localStorage.setItem("name", name);
                        success(res.data);
                        navigate("/login");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            else{
                notify(error);
            }
        } else {
            notify(error);
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
    <div className="hrsignup">
      <Navbar />
        <div className='flex justify-center items-center min-h-[94vh] flex-col'>
            <h1 className='pb-4 text-xl'>Signup as HR</h1>
            <form className='flex flex-col rounded-md px-16 gap-4 bg-[#FFF] shadow-lg py-8' onSubmit={(event) => getValues(event)}>
                <div className='my-4'>
                    <input className='border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter email' onChange={(event) => setEmail(event.target.value)}/>
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

export default PasswordUpdate