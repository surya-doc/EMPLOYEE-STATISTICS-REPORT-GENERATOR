import React from 'react'
import PeerFeedbackEmployeesCard from '../Cards/PeerFeedbackEmployeesCard';
import Navbar from '../Navbar/Navbar';


var employees = [
    {
      empid: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      status: true,
      attendance: 90,
      teamid: 1
    },
    {
      empid: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "password456",
      status: true,
      attendance: 95,
      teamid: 1
    },
    {
      empid: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      password: "password789",
      status: true,
      attendance: 85,
      teamid: 2
    }
  ];

function PeerFeedbackOptions() {
  return (
    <div>
        <Navbar />
        <div className="teamdetails flex flex-col items-center pt-6 pb-4">
            <div className="teamid font-semibold">Team id: <span className='text-base text-[#A62868] pl-4'>1</span></div>
            <div className="teammentor font-semibold">Team mentor: <span className='text-base text-[#A62868] uppercase pl-4'>abcd</span></div>
        </div>
        <div className="members flex flex-col items-center">
            {
                employees.map((emp) => {
                    return <div>
                        <PeerFeedbackEmployeesCard employee={emp} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default PeerFeedbackOptions