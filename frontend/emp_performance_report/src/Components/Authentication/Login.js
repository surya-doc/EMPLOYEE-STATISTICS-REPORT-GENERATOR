import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import './Login.css'


function Login() {
  const[password1, setPassword1] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="login">
      <Navbar />
        <div className='flex justify-center items-center min-h-[94vh] flex-col'>
        <div className='w-[80vw] h-[60vh] flex items-center shadow-lg rounded-lg' style={{ overflow: "hidden" }}>
            <div className="min-w-[40vw] bg-[red] min-h-[60vh]" style={{ position: "relative", backgroundImage: `url('./signup.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
            </div>
            <div className='w-1/2 min-h-[60vh] right-0 bg-[#FFF] py-16 px-10 shadow-md h-full' style={{float: "right"}}>
              <h1 className='pb-4 text-3xl font-semibold text-center'>Login to your account</h1>
              <form className='flex flex-col rounded-md p-4 bg-[#FFF] py-8 gap-6'>
                  <div className='my-4'>
                      <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter email'/>
                  </div>
                  <div className='flex pb-2 my-4 relative' >
                  <div className='flex items-center gap-2 w-full'>
                      <input className='input border-b-[1px] w-full' style={{outline: "none"}} required type={`${password1 ? 'text' : 'password'}`} placeholder="Enter password" />
                  </div>
                  <div className='password_visibility text-2xl relative -left-10' onClick={() => setPassword1(!password1)}>
                  {
                      password1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                  }
                  </div>
                  </div>
                  <div className='my-4'>
                      {/* <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter your role'/> */}
                      <select className="input border-b-[1px] pb-2 w-full bg-[#FFF]"  style={{outline: "none"}} value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Choose your role</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                  </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login