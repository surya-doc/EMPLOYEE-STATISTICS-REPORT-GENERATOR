import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useNavigate } from 'react-router';
import { backend_url } from '../../BackendRoute';
import { getapiCall } from '../APICall/apiget';
import jwtDecode from 'jwt-decode';

function Navbar() {
  const[stat, setStat] = useState(false);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[name, setName] = useState();
  const[profile, setProfile] = useState(false);
  const[role, setRole] = useState();

  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  function checkFeedbacker(){
    const token = localStorage.getItem('token');
    var type = jwtDecode(token);
    type = type.role[0].authority
    console.log(type);
    if(type === "member"){
      navigate("/peerfeedback");
    }
    else if(type === "mentor"){
      navigate("/mentorfeedback")
    }
    else if(type === "hr"){
      navigate("/hrfeedback");
    }
  }

  const reloadPage = () => {
    window.location.reload()
  }

  function logOut(){
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("type");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    navigate("/");
    reloadPage();
  }

  async function check(){
    try {
      const url = `${backend_url}/employeeDetail/${id}`;
      const res = await getapiCall(url, token);

      console.log(res);
      if(res.status === 200 && res.data.role === "hr"){
        console.log("*")
        setRole(res.data.role);
      }
      else if(res.status === 200 && res.data.role === "member"){
        setRole(res.data.role);
      }
      else{
        setRole(res.data.role);
      }
    } catch (error) {
      console.log(error);
      if(error.response.status === 401){
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        localStorage.removeItem("type");
        localStorage.removeItem("name");
        // navigate('/login');
      }
    }
  }

  useEffect(() => {
    const check = localStorage.getItem('email');
    if(check !== null){
      setIsLoggedIn(true);
    }
    setName(localStorage.getItem("name"));
  }, [])

  return (
    <div className='navbar bg-[#FFF] flex justify-between py-4 px-8 shadow-lg relative' style={{zIndex: "999"}}>
      <div className='left text-xl cursor-pointer' onClick={() => navigate('/')}>StatMaster</div>
      <div className='right flex items-center gap-6'>
        <div className={`login ${isLoggedIn ? 'hidden' : 'block'} bg-[#A62868] px-4 py-1 rounded-sm text-[#FFF] cursor-pointer`} onClick={() => navigate('/login')}>
          Login
        </div>
        <div className={`signup ${isLoggedIn ? 'hidden' : 'block'} relative`}>
          <div className=' border-[1px] border-[#A62868] gap-2 px-4 py-1 rounded-sm cursor-pointer flex items-center justify-between' onClick={() => setStat(!stat)}>
            <p>Signup</p>
            <MdKeyboardArrowDown />
          </div>
          <div className={`signupoptions absolute ${stat ? 'block' : 'hidden'} top-9 -left-6 text-sm bg-[#FFF] w-40 shadow-md`}>
            <div className='py-2 hover:bg-[#F3F3F3] px-2 cursor-pointer' onClick={() => navigate('/signup/hr')}>Signup as HR</div>
          </div>
        </div>
        <div className={`account relative ${isLoggedIn ? 'block' : 'hidden'} bg-[#A62868] w-8 h-8 flex items-center justify-center rounded-full text-[#FFF] text-sm cursor-pointer`}>
          <h4 className='uppercase' onClick={() => setProfile(!profile)}>{name?.substring(0, 2)}</h4>
          <div className={`absolute ${profile ? 'block' : 'hidden'} bg-[#FFF] top-10 text-[#000000] py-4 px-4 shadow-md`} style={{zIndex: 999}}>
            <p className='py-2 border-b-[1px] min-w-[8rem]'>{localStorage.getItem('name')}</p>
            <p className='py-2 border-b-[1px] min-w-[8rem]'>{localStorage.getItem('email')}</p>
            <p className='py-2 border-b-[1px] min-w-[8rem]'>emp id: {localStorage.getItem('id')}</p>
            <div className='flex'>
              <div className={`mx-auto w-full flex`}>
                <button className='bg-[#A62868] py-1 px-2 mt-4 mb-2 mx-auto text-[#FFF] rounded-sm' onClick={() => navigate("/update")}>Update</button>
              </div>
              <div className='mx-auto w-full flex'>
                <button className='bg-[#A62868] py-1 px-2 mt-4 mb-2 mx-auto text-[#FFF] rounded-sm' onClick={() => logOut()}>Logout</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`feedback ${isLoggedIn ? 'block' : 'hidden'} cursor-pointer hover:text-[#A62868]`} onClick={() => checkFeedbacker()}>
          Feedback
        </div>
      </div>
    </div>
  )
}

export default Navbar