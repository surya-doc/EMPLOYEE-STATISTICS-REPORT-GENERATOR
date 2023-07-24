import axios from 'axios';
import React from 'react'
import { BiSolidEditAlt } from 'react-icons/bi'
import { ImBin } from 'react-icons/im'
import { useNavigate } from 'react-router';
import { backend_url } from '../../BackendRoute';

function EmployeeCard({employee}) {


  return (
    <div className='employeesCard flex items-center w-[60vw] my-4 cursor-pointer rounded-md py-4 pl-4 pr-2'>
        <div className="nameLogo bg-[#E6E6E6] text-[2rem] font-bold w-16 h-16 py-4 flex items-center justify-center px-8">{employee.name.substring(0, 2)}
        <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-lime-600"></span>
        </span>
        </div>
        <div className="right w-full px-8 flex justify-between">
            <div className=''>
                <div className='flex items-center gap-2 py-2'>
                    <h5>Name: </h5>
                    <p>{employee.name}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <h5>Email: </h5>
                    <p>{employee.email}</p>
                </div>
            </div>
            <div className='justify-end'>
                <div className='flex items-center gap-2 py-2'>
                    <h5>Team Id: </h5>
                    <p>{employee.teamid}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <h5>Attendance</h5>
                    <p>{employee.attendance}</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default EmployeeCard