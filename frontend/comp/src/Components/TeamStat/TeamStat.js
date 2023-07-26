import React, { useEffect, useState } from 'react'
import { backend_url } from '../../BackendRoute';
import { getapiCall } from '../APICall/apiget';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router';
import TeamBarchart from './TeamBarchart';
import TeamPointChart from './TeamPointChart';
import WorkChart from './WorkChart';
import TeamResponsibilityChart from './TeamResponsibilityChart';

function TeamStat({team}) {
  const[behaviour, setBehaviour] = useState();
  const[communication, setCommunication] = useState();
  const[deadline, setDeadline] = useState();
  const[extraactivity, setExtraactivity] = useState();
  const[extrawork, setExtrawork] = useState();
  const[percentile, setPercentile] = useState();
  const[responsibility, setResponsibility] = useState();
  const[workload, setWorklad] = useState();
  const[empId, setEmpId] = useState();

  console.log(team);
  const navigate = useNavigate();

  async function getTeamStat(event){
    try {
      const url = backend_url+'/calculate/byteam/'+team.teamid;
      const token = localStorage.getItem("token");
      const res = await getapiCall(url, token);
      console.log(res);
      let behaviour = [];
      let communication = [];
      let deadline = [];
      let extraactivity = [];
      let extrawork = [];
      let percentile = [];
      let responsibility = [];
      let workload = [];
      let empid = [];
      for(var i=0; i<res.data.length; i++){
        behaviour.push(res.data[i].behaviour);
        communication.push(res.data[i].communication);
        deadline.push(res.data[i].deadline);
        extraactivity.push(res.data[i].extraactivity);
        extrawork.push(res.data[i].extrawork);
        percentile.push(Math.round(res.data[i].percentile));
        responsibility.push(res.data[i].responsibility);
        workload.push(res.data[i].workload);
        empid.push(res.data[i].empid);
      }
      deadline.push(0);
      behaviour.push(0);
      communication.push(0);
      extraactivity.push(0);
      extrawork.push(0);
      responsibility.push(0);
      workload.push(0);

      deadline.push(5);
      behaviour.push(5);
      communication.push(5);
      extraactivity.push(5);
      extrawork.push(5);
      responsibility.push(5);
      workload.push(5);

      setBehaviour(behaviour);
      setCommunication(communication);
      setDeadline(deadline);
      setExtraactivity(extraactivity);
      setExtrawork(extrawork);
      setPercentile(percentile);
      setResponsibility(responsibility);
      setWorklad(workload);
      setEmpId(empid);
    } catch (error) {
      notify("Something went wrong!!");
      console.log(error);
    }
  }
  const notify = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  
  const success = () => {
      toast.success("Login successful!", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  useEffect(() => {
    getTeamStat();
  }, [])

  return (
    <div className="teamstatics">
      <div className="percentile flex py-10">
        <div className='w-1/2'>
          <TeamBarchart teamData={percentile} teamLabels={empId} />
        </div>
        <div className='w-1/2'>
          <TeamPointChart deadline={deadline} extrawork={extrawork} extraactivity={extraactivity} teamLabels={empId} />
        </div>
      </div>
      <div className="percentile flex py-10">
        <div className='w-1/2'>
          <WorkChart behaviour={behaviour} communication={communication} teamLabels={empId} />
        </div>
        <div className='w-1/2'>
          <TeamResponsibilityChart responsibility={responsibility} workload={workload} teamLabels={empId} />
        </div>
      </div>
    </div>
  )
}

export default TeamStat