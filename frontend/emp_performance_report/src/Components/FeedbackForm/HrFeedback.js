import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './FeedbackOptions.css'
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function HrFeedback() {  
  const [communication, setCommunication] = useState('');
  const [behaviour, setBehaviour] = useState('');
  const [extraActivity, setExtraActivity] = useState('');

  const location = useLocation();

  const navigate = useNavigate();

  const hrName = localStorage.getItem('name');
  const hrId = localStorage.getItem('id');
  const token = localStorage.getItem("token");

  const giveCommunicationRating = (event) => {
    setCommunication(event.target.value);
  };
  const giveBehaviourRating = (event) => {
    setBehaviour(event.target.value);
  };
  const giveExtraActivity = (event) => {
    setExtraActivity(event.target.value);
  };

  async function addHrFeedback(event){
    event.preventDefault()
    try {
      const res = await axios.post(backend_url+'/hrFeedback/create', {empid: location.state.employee.empid, hrid: hrId, communication, behaviour, extraactivity: extraActivity}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      if(res.status === 200){
        success("Feedback got submitted successfully.");
        navigate('/hrfedback/team', {state: location.state.team});
      }
    } catch (error) {
      if(error.response.status === 404){
        notify(error.response.data);
      }
      else{
        notify("Something went wrong!!");
      }
      console.log(error);
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
    <div className="HrFeedback">
      <Navbar />
      <div className="feedbackform w-3/5 flex justify-center items-center mx-auto my-14">
        <div className='w-full relative'>
          <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" />
          <form className='min-h-[82vh] shadow-2xl px-10 flex flex-col justify-center gap-4' style={{backgroundColor: "rgba(255, 255, 255, 0.7"}} onSubmit={(event) => addHrFeedback(event)}>
            <h1 className='text-center pb-4 text-2xl font-semibold'>Hr's feedback</h1>
            <div className="feedbacker_name border-b-[1px] pb-2 my-4">
              <p className='pl-1'>{hrName}</p>
            </div>
            <div className="peername border-b-[1px] pb-2 my-4">
              <p className='pl-1'>{location.state.employee.name}</p>
            </div>
            <div className="peerid border-b-[1px] pb-2 my-4">
              <p className='pl-1'>{location.state.employee.empid}</p>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis of communication between 1 to 5">
                <select className="input border-b-[1px] bg-[transparent] pb-2 w-full bg-[#FFF] mx-0" required style={{outline: "none"}} value={communication} onChange={giveCommunicationRating}>
                  <option value="">communication</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis of behaviour between 1 to 5">
                <select className="input bg-[transparent] border-b-[1px] pb-2 w-full bg-[#FFF]" required style={{outline: "none"}} value={behaviour} onChange={giveBehaviourRating}>
                  <option value="">behaviour</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis responsibility between 1 to 5">
                <select className="input bg-[transparent] border-b-[1px] pb-2 w-full bg-[#FFF]" required style={{outline: "none"}} value={extraActivity} onChange={giveExtraActivity}>
                  <option value="">extra activity</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
            </div>
            <button type='submit' className='text-sm bg-[#A62868] w-20 py-1 text-[#FFF] rounded-sm mx-auto'>Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default HrFeedback