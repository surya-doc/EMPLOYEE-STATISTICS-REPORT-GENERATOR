import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './FeedbackOptions.css'
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

function Peerfeedback() {  
  const [communication, setCommunication] = useState('');
  const [behaviour, setBehaviour] = useState('');
  const [responsibility, setResponsibility] = useState('');

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const giveCommunicationRating = (event) => {
    setCommunication(event.target.value);
  };
  const giveBehaviourRating = (event) => {
    setBehaviour(event.target.value);
  };
  const giveResponsibilityRating = (event) => {
    setResponsibility(event.target.value);
  };


  async function addPeerFeedback(event){
    event.preventDefault()
    try {
      const res = await axios.post(backend_url+'/peerFeedback/create', {empid: location.state.feedbacker.empid, peerid: location.state.employee.empid, teamid: location.state.employee.teamid, communication, behaviour, responsibility: responsibility});
      console.log(res);
      if(res.status === 200){
        alert("Your response got submitted successfully.");
        navigate('/peerfeedback');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="peerfeedback">
      <Navbar />
      <div className="feedbackform w-3/5 flex justify-center items-center mx-auto my-14">
        <div className='w-full relative'>
          <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" />
          <form className='min-h-[82vh] shadow-2xl px-10 flex flex-col justify-center gap-4' style={{backgroundColor: "rgba(255, 255, 255, 0.8"}}  onSubmit={(event) => addPeerFeedback(event)}>
            <h1 className='text-center pb-4 text-2xl font-semibold'>Peer's feedback</h1>
            <div className="feedbacker_name border-b-[1px] pb-2 my-4">
              <p className='pl-1'>{localStorage.getItem("name")}</p>
            </div>
            <div className="peername border-b-[1px] pb-2 my-4">
              <p className='pl-1'>{location.state.employee.name}</p>
            </div>
            <div className="peerid border-b-[1px] pb-2 my-4">
              <p className='pl-1'>{location.state.employee.empid}</p>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis of communication between 1 to 5">
            {/* <p></p> */}
                  <select className="input border-b-[1px] bg-[transparent] pb-2 w-full bg-[#FFF]" required style={{outline: "none"}} value={communication} onChange={giveCommunicationRating}>
                  <option value="">communication</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis of behaviour between 1 to 5">
                {/* <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter your role'/> */}
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
                {/* <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter your role'/> */}
                <select className="input bg-[transparent] border-b-[1px] pb-2 w-full bg-[#FFF]" required style={{outline: "none"}} value={responsibility} onChange={giveResponsibilityRating}>
                  <option value="">responsibility</option>
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

export default Peerfeedback