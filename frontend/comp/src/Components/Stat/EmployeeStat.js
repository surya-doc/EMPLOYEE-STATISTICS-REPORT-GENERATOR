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

import html2pdf from 'html2pdf.js';

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

    const token = localStorage.getItem("token");
    

    async function getEmployeeDetail(){
        try {
            const res = await axios.get(backend_url+'/employeeDetail/'+empid, {
              headers: {
                'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
                'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
              }
            });
            const emp = await axios.get(backend_url+'/employee/'+empid, {
              headers: {
                'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
                'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
              }
            });
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
        const res = await axios.get(backend_url+'/calculate/'+empid, {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
          }
        });
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
        const res = await axios.get(backend_url+'/employeeDetail/byteam/'+teamid+'/member', {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
            'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
          }
        });
        // console.log(res);
        setEmployees(res.data);
        for(var i=0; i<res.data.length; i++){
          try {
            const teamStat = await axios.get(backend_url+'/calculate/'+res.data[i].empid, {
              headers: {
                'Authorization': `Bearer ${token}`, // Set the JWT token in the Authorization header
                'Content-Type': 'application/json', // Set the content type to JSON, adjust as needed
              }
            });
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

    const handleDownloadPDF = () => {
      const element = document.getElementById('analytics-page');
      const opt = {
        margin: 1,
        filename: 'analytics_page.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'cm', format: 'a2', orientation: 'portrait' },
      };
  
      html2pdf().from(element).set(opt).save();
    };

    useEffect(() => {
        getEmployeeDetail();
    }, [])

  return (
    <div className="employeestat">
        <Navbar />
        <div id="analytics-page" className="statcontainer min-h-[94vh] bg-[#f1f1f1] flex justify-between pt-2 px-2 md:flex-col">
            <div className='w-4/12 h-full bg-[#f1f1f1] p-2 md:flex md:w-[100%] md:p-0'>
              <div className="detailscard bg-[#FFF] py-5 md:w-5/12">
                <div className="mx-auto w-full flex flex-col items-center md:mx-1">
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
              <div className="statcards md:w-7/12">

                <div className='md:flex md:w-full'>
                  <div className="statnumber md:w-1/2 md:mx-2 items-center justify-between text-xl md:flex-col p-[28px] my-[10px] md:p-[10px] md:text-base sm:text-sm flex md:flex-col md:gap-2">
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
                  <div className="statnumber md:w-1/2 md:mx-2 items-center justify-between text-xl md:flex-col p-[28px] my-[10px] md:p-[10px] md:text-base sm:text-sm communication">
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
                </div>

                <div className='md:flex md:w-full'>
                  <div className="statnumber md:w-1/2 md:mx-2 items-center justify-between text-xl md:flex-col p-[28px] my-[10px] md:p-[10px] md:text-base sm:text-sm deadline">
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
                  <div className="statnumber md:w-1/2 md:mx-2 items-center justify-between text-xl md:flex-col p-[28px] my-[10px] md:p-[10px] md:text-base sm:text-sm extrawork">
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
                </div>
                
                <div className='md:flex md:w-full'>
                  <div className="statnumber md:w-1/2 md:mx-2 items-center justify-between text-xl md:flex-col p-[28px] my-[10px] md:p-[10px] md:text-base sm:text-sm responsibility">
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
                  <div className="statnumber md:w-1/2 md:mx-2 items-center justify-between text-xl md:flex-col p-[28px] my-[10px] md:p-[10px] md:text-base sm:text-sm workload">

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
            </div>
            <div className='w-8/12 bg-[#f1f1f1] md:w-[100%]'>
              <div className='py-4 px-16 bg-[#FFF] my-2 mr-2 md:w-full'>
                <h1 className='text-lg py-2'>Employee statistics of team: {employee?.teamid}</h1>
                {
                  teamStat?<BarChart teams={teamStat} teamData={teamBarStat} teamLabels={teamBarLabel} />:
                  console.log(teamBarLabel, teamBarStat, teamStat.length)
                }
              </div>
              <div className='flex justify-between mr-2 lg:flex-col'>
                <div className='w-1/2 bg-[#FFF] mr-2 lg:w-full'>
                  <DoughnutChart total={totalWorkingDays} present={attendance} />
                </div>
                <div className='w-1/2 bg-[#FFF] pb-4 lg:w-full'>
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
              <div className='w-full my-4'>
                <div className='w-40 mx-auto bg-[#E4BED1] p-2'>
                  <button className='mx-auto w-36 bg-[#A62868] p-1 text-[#FFF]' onClick={handleDownloadPDF}>Download PDF</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeStat