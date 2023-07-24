import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import './EmployeeStat.css'
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

import { AiTwotoneStar } from 'react-icons/ai'
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function EmployeeStat() {
    const[employee, setEmployee] = useState();
    const[stat, setStat] = useState();
    const[employees, setEmployees] = useState([]);
    const[teamStat, setTeamStat] = useState([]);
    const[teamBarStat, setTeamBarStat] = useState([]);
    const[teamBarLabel, setTeamBarLabel] = useState([]);
    const[teamid, setTeamId] = useState(3);
    const[totalWorkingDays, setTotalWorkingDays] = useState();
    const[attendance, setAttendance] = useState();

    const empid = localStorage.getItem('id');



    async function getEmployeeDetail(){
        try {

            const res = await axios.get(backend_url+'/employeeDetail/'+empid);
            const emp = await axios.get(backend_url+'/employee/'+empid);
            console.log(emp);
            res.data.name = emp.data.name;
            // emp.data.total_working_days
            setTotalWorkingDays(30);
            setAttendance(emp.data.attendance);
            if(res.status === 200){
                for(let i=0; i<res.data.length; i++){
                    // console.log(res.data[i]);
                }
            }
            setEmployee(res.data);
            // console.log("*******************", res);
            setTeamId(res.data.teamid);
          } catch (error) {
            console.log(error);
          }

        getStatistics();
    }

    async function getStatistics(){
      try {
        const res = await axios.get(backend_url+'/calculate/'+empid);
        // console.log(res);
        setStat(res.data);
      } catch (error) {
        console.log(error);
      }

      getAllEmployees();
    }

    async function getAllEmployees(){
      let tempArr = [];
      let tempStatPercentile = [];
      let teamBarLevelArr = [];
      // console.log("(*************************", employee?.teamid)
      try {
        const res = await axios.get(backend_url+'/employeeDetail/byteam/'+teamid+'/member');
        // console.log(res);
        setEmployees(res.data);
        for(var i=0; i<res.data.length; i++){
          try {
            const teamStat = await axios.get(backend_url+'/calculate/'+res.data[i].empid);
            tempArr.push(teamStat.data);
            tempStatPercentile.push(Math.round(teamStat.data.percentile));
            teamBarLevelArr.push('id: '+teamStat.data.empid)
          } catch (error) {
            console.log("Something went wrong.");
          }
        }
        setTeamStat(tempArr);
        setTeamBarStat(tempStatPercentile);
        setTeamBarLabel(teamBarLevelArr);
        // console.log(tempArr, teamBarLevelArr, tempStatPercentile);
      } catch (error) {
        console.log(error);
      }
      console.log(tempArr);
    }

    useEffect(() => {
        getEmployeeDetail();
    }, [])

  return (
    <div className="employeestat">
        <Navbar />
        <div className="statcontainer min-h-[94vh] bg-[#f1f1f1] flex justify-between">
            <div className='w-4/12 h-full bg-[#f1f1f1] p-2'>
              <div className="detailscard bg-[#FFF] py-5">
                <div className="mx-auto w-full flex flex-col items-center">
                  <div className="nameLogo border-[2px] border-[#000000] bg-[#A62868] text-[#FFF] text-[2rem] font-bold w-16 h-16 py-4 flex items-center justify-center px-8">{employee?.name.substring(0, 2)}
                </div>
                <h1 className='text-lg pt-4' style={{letterSpacing: "1px"}}>{employee?.name}</h1>
                <p className='text-sm py-2'>{employee?.email}</p>
                <div className='flex gap-6'>
                    <p>Team id: <span className='text-[#A62868]'>{employee?.teamid}</span></p>
                    <p>Employee id: <span className='text-[#A62868]'>{employee?.empid}</span></p>
                </div>
                <div className='divider bg-divider min-h-[1px] min-w-[80%] max-w-[86%] mx-auto mt-4 mb-4' style={{backgroundColor: "#B5B2B2", minHeight: "1px", maxHeight: "1px"}}></div>
                <div className='w-full mx-4 px-4'>
                  <div className="address py-2 bg-[#faeaf2] border-[2px] border-[#000000] flex items-center justify-center px-4 mt-2 w-full">Address: {employee?.address}</div>
                </div>
              </div>
              </div>
              <div className="statcards">
                <div className="statnumber text-xl flex">
                  <h4>Behaviour</h4>
                  <div className="star">
                    <div className='flex'>
                      <div className="colorstar flex">
                        {Array.from({ length: stat?.behaviour }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#fdca0e] text-shadow-md' />
                          </div>
                        ))}
                      </div>
                      <div className="notcolourstar flex">
                        {Array.from({ length: 5-stat?.behaviour }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#E1DFDB]' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="statnumber text-xl communication">
                  <h4>Communication</h4>
                  <div className="star">
                    <div className='flex'>
                      <div className="colorstar flex">
                        {Array.from({ length: stat?.communication }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#fdca0e] text-shadow-md' />
                          </div>
                        ))}
                      </div>
                      <div className="notcolourstar flex">
                        {Array.from({ length: 5-stat?.communication }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#E1DFDB]' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>                
                </div>
                <div className="statnumber text-xl deadline">
                  <h4>Deadline</h4>
                  <div className="star">
                    <div className='flex'>
                      <div className="colorstar flex">
                        {Array.from({ length: stat?.deadline }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#fdca0e] text-shadow-md' />
                          </div>
                        ))}
                      </div>
                      <div className="notcolourstar flex">
                        {Array.from({ length: 5-stat?.deadline }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#E1DFDB]' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>                
                </div>
                <div className="statnumber text-xl extrawork">
                  <h4>Extrawork</h4>
                  <div className="star">
                    <div className='flex'>
                      <div className="colorstar flex">
                        {Array.from({ length: stat?.extrawork }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#fdca0e] text-shadow-md' />
                          </div>
                        ))}
                      </div>
                      <div className="notcolourstar flex">
                        {Array.from({ length: 5-stat?.extrawork }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#E1DFDB]' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="statnumber text-xl responsibility">
                  <h4>Responsibility</h4>
                  <div className="star">
                    <div className='flex'>
                      <div className="colorstar flex">
                        {Array.from({ length: stat?.responsibility }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#fdca0e] text-shadow-md' />
                          </div>
                        ))}
                      </div>
                      <div className="notcolourstar flex">
                        {Array.from({ length: 5-stat?.responsibility }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#E1DFDB]' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>                
                </div>
                <div className="statnumber text-xl workload">

                  <h4>Workload</h4>
                  <div className="star">
                    <div className='flex'>
                      <div className="colorstar flex">
                        {Array.from({ length: stat?.workload }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#fdca0e] text-shadow-md' />
                          </div>
                        ))}
                      </div>
                      <div className="notcolourstar flex">
                        {Array.from({ length: 5-stat?.workload }).map((element, index) => (
                          <div key={index+1}>
                            <AiTwotoneStar className='text-[#E1DFDB]' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>                
                </div>
              </div>
            </div>
            <div className='w-8/12 bg-[#f1f1f1]'>
              <div className='py-4 px-16 bg-[#FFF] my-2 mr-2'>
                <h1 className='text-lg py-2'>Employee statistics of team: {employee?.teamid}</h1>
                {
                  teamStat?<BarChart teams={teamStat} teamData={teamBarStat} teamLabels={teamBarLabel} />:
                  console.log(teamBarLabel, teamBarStat, teamStat.length)
                }
              </div>
              <div className='flex justify-between'>
                <div className='w-1/2 bg-[#FFF] mr-2 pb-4'>
                  <DoughnutChart total={totalWorkingDays} present={attendance} />
                </div>
                <div className='w-1/2 bg-[#FFF] pb-4'>
                  <PieChart
                    behaviour={stat?.behaviour}
                    communication={stat?.communication}
                    deadline={stat?.deadline}
                    extrawork={stat?.extrawork}
                    responsibility={stat?.responsibility}
                    workload={stat?.workload}
                  />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeStat