import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useNavigate } from 'react-router';
import { backend_url } from '../../BackendRoute';
import { getapiCall } from '../APICall/apiget';
import jwtDecode from 'jwt-decode';

function AdminHeader() {
  const[stat, setStat] = useState(false);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[name, setName] = useState();
  const[profile, setProfile] = useState(false);
  const[role, setRole] = useState();

  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

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
      const url = `${backend_url}/employeeDetail/1`;
      const res = await getapiCall(url, token);
      console.log(res);
      if(res.status === 200 && res.data.role === "admin"){
        console.log("*")
        setRole(res.data.role);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      if(error.response.status === 401){
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        localStorage.removeItem("type");
        localStorage.removeItem("name");
        navigate('/admin/login');
        setIsLoggedIn(false);
      }
    }
  }

  useEffect(() => {
    check();
  }, [])

  return (
    <div className='navbar bg-[#FFF] flex justify-between py-4 px-8 shadow-lg relative' style={{zIndex: "999"}}>
      <div className='left text-xl cursor-pointer' onClick={() => navigate('/admin')}>StatMaster</div>
      <div className='right flex items-center gap-6'>
        <div className={`login ${isLoggedIn ? 'hidden' : 'block'} bg-[#A62868] px-4 py-1 rounded-sm text-[#FFF] cursor-pointer`} onClick={() => navigate('/admin/login')}>
          Login
        </div>
        <div className={`login ${isLoggedIn ? 'block' : 'hidden'} bg-[#A62868] px-4 py-1 rounded-sm text-[#FFF] cursor-pointer`} onClick={() => logOut()}>
          Logout
        </div>
        <div className={`signup ${isLoggedIn ? 'block' : 'hidden'} relative`}>
          <div className=' border-[1px] border-[#A62868] gap-2 px-4 py-1 rounded-sm cursor-pointer flex items-center justify-between' onClick={() => navigate('/admin/addhr')}>
            <p>Add Hr</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader